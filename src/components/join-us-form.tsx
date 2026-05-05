"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import {
  joinUsFormSchema,
  JoinUsFormData,
} from "../lib/schemas/join-us-form.schema";
import {
  UniversityType,
  DegreeType,
  FacultyType,
} from "../lib/schemas/join-us-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput, FormSelect } from "./ui/form-fields";

export function JoinUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinUsFormData>({
    resolver: zodResolver(joinUsFormSchema),
  });

  const onSubmit: SubmitHandler<JoinUsFormData> = (data) => {
    console.log(data);
  };

  console.log("Current errors state:", errors);

  // Storing the shared styles in a variable keeps the JSX clean!
  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Join Our Team
        </h2>

        <FormInput
          className={inputClass}
          placeholder="First Name"
          {...register("first_name")}
        />
        <FormInput
          className={inputClass}
          placeholder="Last Name"
          {...register("last_name")}
        />
        <FormInput
          type="email"
          className={inputClass}
          placeholder="Email"
          {...register("email")}
        />

        <FormSelect
          className={inputClass}
          placeholder="University"
          {...register("university")}
        >
          <option value="" disabled>
            Select University
          </option>
          <option value={UniversityType.UOA}>UOA</option>
          <option value={UniversityType.AUT}>Aut</option>
          <option value={UniversityType.Other}>Other</option>
        </FormSelect>

        <FormInput
          className={inputClass}
          placeholder="UPI"
          {...register("upi")}
        />
        <FormInput
          type="number"
          className={inputClass}
          placeholder="Student ID"
          {...register("student_id", { valueAsNumber: true })}
        />

        <FormSelect
          className={inputClass}
          placeholder="Degree Type"
          {...register("degree_type")}
        >
          <option value="" disabled>
            Select Degree Type
          </option>
          <option value={DegreeType.FIRST_YEAR}>First Year</option>
          <option value={DegreeType.SECOND_YEAR}>Second Year</option>
          <option value={DegreeType.THIRD_YEAR}>Third Year</option>
          <option value={DegreeType.FOURTH_YEAR}>Fourth Year</option>
        </FormSelect>

        <FormSelect
          className={inputClass}
          placeholder="Faculty"
          {...register("faculty")}
        >
          <option value="" disabled>
            Select Faculty
          </option>
          <option value={FacultyType.SCIENCE}>Science</option>
          <option value={FacultyType.ART}>Art</option>
          <option value={FacultyType.ENGINEERING}>Engineering</option>
          <option value={FacultyType.MEDICINE}>Medicine</option>
        </FormSelect>

        <textarea
          className={inputClass}
          placeholder="Goal Statement"
          {...register("goal_statement")}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-4 shadow-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
