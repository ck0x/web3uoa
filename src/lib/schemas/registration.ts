import { z } from "zod";
import { RegistrationService } from "../../services/registrations/registrations-service";

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

// util funciton
const emptyToUndefined = <T extends z.ZodTypeAny>(schema: T) => {
  return z.preprocess((val) => {
    if (val === "") return undefined;
    return val;
  }, schema);
};

const RegistrationSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email(),
  university: z.nativeEnum(UniversityType, "Select University"),
  university_other: z.string().optional(),
  upi: z.string().optional(),
  student_id: z.number().optional(),
  degree_type: emptyToUndefined(z.nativeEnum(DegreeType).optional()),
  faculty: emptyToUndefined(z.nativeEnum(FacultyType).optional()),
  goal_statement: z.string().optional(),
});

export type RegistrationData = z.infer<typeof RegistrationSchema>;
export { RegistrationSchema };
