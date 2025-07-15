import { login } from "@/controller/user.controller";
import connectDB from "@/util/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  await connectDB();
  try {
    const body = await req.json();
    const loginData = await login(body);
    if (!loginData.success) {
      return NextResponse.json(
        { success: loginData.success, message: loginData.message },
      );
    }
    return NextResponse.json(
      { success: true, message: loginData.message, data: loginData.data },
      { status: 200 }
    );
  } catch (e) {
    NextResponse.json(
      { success: false, message: "server error", error: e },
      { status: 5000 }
    );
  }
};
