import { z } from "zod";

export enum UniversityType {
  UOA = "UOA",
  AUT = "AUT",
  Other = "OTHER",
}

export enum DegreeType {
  FirstYear = "First Year",
  SecondYear = "Second Year",
  ThirdYear = "Third Year",
  FourthYear = "Fourth Year",
  Other = "Other",
}

export enum FacultyType {
  Art = "Art",
  Commerce = "Commerce",
  Engineering = "Engineering",
  Science = "Science",
  Other = "Other",
}

const joinUsFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email(),
  university: z.nativeEnum(UniversityType),
  upi: z.string().optional(),
  student_id: z.number().optional(),
  degree_type: z.nativeEnum(DegreeType).optional(),
  faculty: z.nativeEnum(FacultyType).optional(),
  goal_statement: z.string().optional(),
});

export type JoinUsFormData = z.infer<typeof joinUsFormSchema>;
export { joinUsFormSchema };
