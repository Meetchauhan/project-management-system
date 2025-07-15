import { register } from "@/controller/user.controller";
import connectDB from "@/util/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  await connectDB();
  try {
    const body = await req.json();
    const admin = await register(body);
    if (!admin.success) {
      return NextResponse.json({
        success: admin.success,
        message: admin.message,
      });
    }
    return NextResponse.json({
      success: admin.success,
      data: admin.data,
      message: admin.message,
    });
  } catch (e) {
    return NextResponse.json({ success: false, Error: e });
  }
};
