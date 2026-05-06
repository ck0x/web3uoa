import { z } from "zod";

export enum UniversityType {
  UOA = "UOA",
  AUT = "AUT",
  Other = "Other",
  None = "None",
}

export enum DegreeType {
  FirstYear = "First Year",
  SecondYear = "Second Year",
  ThirdYear = "Third Year",
  FourthYear = "Fourth Year",
  FourthYearAndBeyond = "Fourth Year and Beyond",
  Masters = "Masters",
  PhD = "PhD",
}

export enum FacultyType {
  Art = "Art",
  Commerce = "Commerce",
  Engineering = "Engineering",
  Science = "Science",
  Other = "Other",
}

// util funciton
const emptyToUndefined = <T extends z.ZodTypeAny>(schema: T) => {
  return z.preprocess((val) => {
    if (val === "") return undefined;
    return val;
  }, schema);
};

const joinUsFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email(),
  university: z.nativeEnum(UniversityType, "Select University"),
  upi: z.string().optional(),
  student_id: z.number().optional(),
  degree_type: emptyToUndefined(z.nativeEnum(DegreeType).optional()),
  faculty: emptyToUndefined(z.nativeEnum(FacultyType).optional()),
  goal_statement: z.string().optional(),
});

export type JoinUsFormData = z.infer<typeof joinUsFormSchema>;
export { joinUsFormSchema };
