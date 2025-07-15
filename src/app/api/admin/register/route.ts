import { register } from "@/controller/admin.controller";
import connectDB from "@/util/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  await connectDB();
  try {
    const body = await req.json();
    const superAdmin = await register(body);
    if (!superAdmin.success) {
      return NextResponse.json({
        success: superAdmin.success,
        message: superAdmin.message,
      });
    }
    return NextResponse.json({
      success: superAdmin.success,
      Data: superAdmin.data,
    });
  } catch (e) {
    return NextResponse.json({ success: false, Message: e });
  }
};
