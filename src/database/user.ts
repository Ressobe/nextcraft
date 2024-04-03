import { db } from "@/lib/db";

export async function getUserByEmail(email: string) {
  return await db.user.findUnique({ where: { email } });
}

export async function getUserById(userId?: string) {
  return await db.user.findUnique({ where: { id: userId } });
}

export async function createUser(
  email?: string,
  name?: string,
  password?: string,
) {
  return await db.user.create({
    data: {
      email,
      name,
      password,
    },
  });
}

export async function verifyUser(userId: string, email: string) {
  await db.user.update({
    where: { id: userId },
    data: {
      email: email,
      emailVerified: new Date(),
    },
  });
}
