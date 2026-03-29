import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json({ error: "Address is required" }, { status: 400 });
  }

  try {
    const claims = await prisma.claimRequest.findMany({
      where: {
        walletAddress: address.toLowerCase(),
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ claims });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch claims" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { walletAddress, requestedName } = body;

    if (!walletAddress || !requestedName) {
      return NextResponse.json(
        { error: "walletAddress and requestedName are required" },
        { status: 400 },
      );
    }

    // Check if they already have an approved or pending claim
    const existing = await prisma.claimRequest.findFirst({
      where: {
        walletAddress: walletAddress.toLowerCase(),
        status: { in: ["PENDING", "APPROVED"] },
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: `You already have a ${existing.status} claim.` },
        { status: 400 },
      );
    }

    // Create the claim
    const claim = await prisma.claimRequest.create({
      data: {
        walletAddress: walletAddress.toLowerCase(),
        requestedName: requestedName.toLowerCase(),
      },
    });

    return NextResponse.json({ claim }, { status: 201 });
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "You already have a request with this status." },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { error: "Failed to create claim" },
      { status: 500 },
    );
  }
}
