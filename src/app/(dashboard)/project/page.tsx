"use client";

import ProjectList from "@/components/projectList/projectList";
import { getProduct } from "@/features/projectSlice/projectSlice";
import { AppDispatch } from "@/store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Project = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="">
      <ProjectList />
    </div>
  );
};
export default Project;
