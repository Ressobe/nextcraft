import {
  createVerificationToken,
  getVerificationTokenByEmail,
  removeVerificationTokenById,
} from "@/database/verification-token";
import { v4 as uuidv4 } from "uuid";

export async function generateVerificationToken(email: string) {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    await removeVerificationTokenById(existingToken.id);
  }

  const verificationToken = await createVerificationToken(
    email,
    token,
    expires,
  );

  return verificationToken;
}
