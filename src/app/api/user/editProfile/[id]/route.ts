import { updateProfile } from "@/controller/user.controller";
import connectDB from "@/util/db";
import { NextResponse } from "next/server";

export const PUT = async (req: Request) => {
    await connectDB()
  const data = await req.json();
  const profileData = await updateProfile(data);
  try {
    return NextResponse.json(
      {
        success: profileData?.success,
        data: profileData?.data,
        message: profileData?.message,
      },    
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Server error",
      error: e,
    });
  }
};
