"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export async function registerAction(formData: z.infer<typeof RegisterSchema>) {
  const validatedFormData = RegisterSchema.safeParse(formData);

  if (!validatedFormData.success) {
    return { error: "Invalid fields!" };
  }

  return { sucess: "Email was sent!" };
}
