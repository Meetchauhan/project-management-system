import { getProjects } from "@/controller/project.controller";
import connectDB from "@/util/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectDB();
  try {
    const projects = await getProjects();
    return NextResponse.json(
      {
        success: projects.success,
        data: projects.data,
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    NextResponse.json(
      {
        success: false,
        message: "server error",
        error: e,
      },
      {
        status: 500,
      }
    );
  }
};
