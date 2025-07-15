import { logout } from "@/controller/user.controller";
import connectDB from "@/util/db";
import { NextResponse } from "next/server";

export const POST = async () => {
  await connectDB()
  const logoutData = await logout();
  try {
   return NextResponse.json(
      {
        success: logoutData.success,
        message: logoutData.message,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
   return NextResponse.json(
      {
        success: false,
        message: "Server error",
        error: e,
      },
      {
        status: 500,
      }
    );
  }
};
