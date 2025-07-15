import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    taskLists: [
      {
        title: { type: String, required: true },
        description: { type: String },
        status: {
          type: String,
          enum: ["pending", "inProgress", "forQa", "completed"],
          default: "pending",
        },
        dueDate: { type: Date },
      },
    ],
  },
  { timestamps: true }
);

const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

export default Task;
