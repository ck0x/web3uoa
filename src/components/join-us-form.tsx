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

        <input
          className={inputClass}
          defaultValue="first_name"
          {...register("first_name")}
        />
        <input
          className={inputClass}
          defaultValue="last_name"
          {...register("last_name")}
        />
        <input
          type="email"
          className={inputClass}
          defaultValue="email"
          {...register("email")}
        />

        <select className={inputClass} {...register("university")}>
          <option value={UniversityType.UOA}>UOA</option>
          <option value={UniversityType.AUT}>Aut</option>
          <option value={UniversityType.Other}>Other</option>
        </select>

        <input className={inputClass} defaultValue="upi" {...register("upi")} />
        <input
          type="number"
          className={inputClass}
          defaultValue="1234567"
          {...register("student_id", { valueAsNumber: true })}
        />

        <select className={inputClass} {...register("degree_type")}>
          <option value={DegreeType.FIRST_YEAR}>First Year</option>
          <option value={DegreeType.SECOND_YEAR}>Second Year</option>
          <option value={DegreeType.THIRD_YEAR}>Third Year</option>
          <option value={DegreeType.FOURTH_YEAR}>Fourth Year</option>
        </select>

        <select className={inputClass} {...register("faculty")}>
          <option value={FacultyType.SCIENCE}>Science</option>
          <option value={FacultyType.ART}>Art</option>
          <option value={FacultyType.ENGINEERING}>Engineering</option>
          <option value={FacultyType.MEDICINE}>Medicine</option>
        </select>

        <textarea
          className={inputClass}
          defaultValue="goal_statement"
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
