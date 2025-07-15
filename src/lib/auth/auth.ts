import { verifyToken } from "@/util/jwt";
import { cookies } from "next/headers";

interface UserIdType {
  userId: string;
}

export const getAuthUser = async (): Promise<UserIdType | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  const decoded = (await verifyToken(token)) as UserIdType | null;

  if (!decoded?.userId) return null;

  return decoded;
};
