import { profile } from "@/controller/user.controller";
import connectDB from "@/util/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectDB();
  try {
    const profileData = await profile();
    return NextResponse.json(
      {
        success: profileData.success,
        data: profileData.data,
        message: profileData.message,
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({
      success: false,
      error: e,
    });
  }
};


