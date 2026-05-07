import { RegistrationData } from "../../lib/schemas/registration";
import { supabase } from "../supabase";

export const RegistrationService = {
  submitRegistration: async (registrationData: RegistrationData) => {
    const { data, error } = await supabase
      .from("registrations")
      .insert([registrationData]);

    if (error) {
      throw error;
    }

    return data;
  },

  isEmailTaken: async (email: string) => {
    const { data, error } = await supabase
      .from("registrations")
      .select("email")
      .eq("email", email)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data === null;
  },
};
