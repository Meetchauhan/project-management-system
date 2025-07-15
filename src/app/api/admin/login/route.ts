import { login } from "@/controller/admin.controller";
import connectDB from "@/util/db";

import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  await connectDB();
  try {
    const body = await req.json();
    const loginData = await login(body);
    if (!loginData.success) {
      return NextResponse.json(
        { success: loginData.success, data: loginData.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: true, data: loginData.data },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { success: false, Message: "Server error", error: e },
      { status: 500 }
    );
  }
};
