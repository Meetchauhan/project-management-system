import { createProject } from "@/controller/project.controller";
import connectDB from "@/util/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  await connectDB();
  try {
    const body = await req.json();
    const projectData = await createProject(body);
    return NextResponse.json(
      {
        success: projectData.success,
        data: projectData.data,
        message: projectData.message,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        error: e,
        message: "server error",
      },
      {
        status: 500,
      }
    );
  }
};
