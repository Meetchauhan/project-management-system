import Task from "@/model/tasks";
import { taskItem } from "@/types/types";

export const createTask = async (data: taskItem) => {
  const { projectId, userId, projectName, taskLists, dueDate } = data;

  const existingTask = await Task.findById(projectId);
  if (existingTask) {
    return {
      success: false,
      message: "Task already exist",
    };
  }
  const task = new Task({
    projectId,
    userId,
    projectName,
    taskLists: taskLists.map((task) => ({
      title: task.title,
      description: task.description,
      status: task.status || "pending",
      dueDate: dueDate || null,
    })),
  });
  await task.save();
  return {
    success: true,
    message: "Task Created",
    data: task,
  };
};
