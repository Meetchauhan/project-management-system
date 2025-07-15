"use client";

import useProject from "@/customHooks/useProject/useProject";
import { use } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

interface projectItemType {
  _id: string;
  title: string;
  status: string;
  complationStatus: number;
}
export const ProjectDetail = ({ params }: Props) => {
  const { id } = use(params);
  const project = useProject();
  console.log("id", id);

  const getProject = project?.data?.find(
    (item: projectItemType) => item?._id === id
  );

  console.log("getProject", getProject);

  return (
    <div className="">
      <div className="">Project detail</div>
      <div className="">Title: {getProject?.title || "Not found"}</div>
      <div className="">Status: {getProject?.status || "Unknown"}</div>
      <div className="">
        Completion: {getProject?.complationStatus ?? "N/A"}%
      </div>
    </div>
  );
};
export default ProjectDetail;
