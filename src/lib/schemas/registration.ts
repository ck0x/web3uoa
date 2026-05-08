import { z } from "zod";

export enum UniversityType {
  UOA = "UOA",
  AUT = "AUT",
  Other = "OTHER",
  None = "NONE",
}

export enum DegreeType {
  FirstYear = "FIRST_YEAR",
  SecondYear = "SECOND_YEAR",
  ThirdYear = "THIRD_YEAR",
  FourthYear = "FOURTH_YEAR",
  FourthYearAndBeyond = "FOURTH_ABOVE",
  Masters = "MASTER",
  PhD = "PHD",
}

export enum FacultyType {
  Arts = "ARTS",
  Commerce = "COMMERCE",
  Engineering = "ENGINEERING",
  Science = "SCIENCE",
  Other = "OTHER",
}

const normalizeEmpty = (value: unknown) => {
  if (typeof value === "string" && value.trim() === "") {
    return null;
  }

  return value;
};

const RegistrationSchema = z
  .object({
    first_name: z.string().trim().min(1, "First name is required"),
    last_name: z.string().trim().min(1, "Last name is required"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Email must be valid"),
    university: z.nativeEnum(UniversityType, "Select University"),
    university_other: z.string().trim().nullable().optional(),
    upi: z.string().trim().nullable().optional(),
    student_id: z.string().trim().nullable().optional(),
    degree_type: z.preprocess(
      normalizeEmpty,
      z.nativeEnum(DegreeType).nullable().optional(),
    ),
    faculty: z.preprocess(
      normalizeEmpty,
      z.nativeEnum(FacultyType).nullable().optional(),
    ),
    goal_statement: z.string().trim().nullable().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.university === UniversityType.None) {
      return;
    }

    if (data.university === UniversityType.Other && !data.university_other) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["university_other"],
        message: "University's name is required",
      });
    }

    if (data.university === UniversityType.UOA && !data.upi) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["upi"],
        message: "UPI is required",
      });
    }

    if (
      data.university === UniversityType.UOA ||
      data.university === UniversityType.AUT
    ) {
      if (!data.student_id) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["student_id"],
          message: "Student ID is required",
        });
      } else if (!/^\d+$/.test(data.student_id)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["student_id"],
          message: "Student ID must contain only numbers",
        });
      }
    }

    if (!data.degree_type) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["degree_type"],
        message: "Degree type is required",
      });
    }

    if (!data.faculty) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["faculty"],
        message: "Faculty is required",
      });
    }
  });

export type RegistrationData = z.infer<typeof RegistrationSchema>;
export { RegistrationSchema };
