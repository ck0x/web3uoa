"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type joinUsFormProp = {
  name: string;
};

export function JoinUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<joinUsFormProp>();
  const onSubmit: SubmitHandler<joinUsFormProp> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="input" {...register("name")} />
      <button type="submit">Submit</button>
    </form>
  );
}
