"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export async function loginAction(formData: z.infer<typeof LoginSchema>) {
  const validatedFormData = LoginSchema.safeParse(formData);

  if (!validatedFormData.success) {
    return { error: "Invalid fields!" };
  }

  return { sucess: "Email was sent!" };
}
