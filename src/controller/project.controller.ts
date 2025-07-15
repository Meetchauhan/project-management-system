import Project from "../model/project";

interface projectTypes {
  title: string;
  status: string;
  complationStatus: number;
}

export const createProject = async (data: projectTypes) => {
  const { title, status, complationStatus } = data;

  const existingProject = await Project.findOne({ title });
  console.log("existingProject", existingProject);
  if (existingProject) {
    return {
      success: false,
      message: "Project already exist",
    };
  }

  const project = new Project({
    title,
    status,
    complationStatus,
  });
  await project.save();
  return {
    success: true,
    message: "Project Created",
    data: project,
  };
};

export const getProjects = async () => {
  const projects = await Project.find({});
  return {
    success: true,
    data: projects,
  };
};
