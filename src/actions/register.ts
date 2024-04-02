"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { createUser, getUserByEmail } from "@/database/user";

export async function registerAction(formData: z.infer<typeof RegisterSchema>) {
  const validatedFormData = RegisterSchema.safeParse(formData);

  if (!validatedFormData.success) {
    return { error: "Invalid fields!" };
  }

  const { email, name, password } = validatedFormData.data;

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "User with this email already exist!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await createUser(email, name, hashedPassword);

  // todo send verification token email

  return { sucess: "User created" };
}
