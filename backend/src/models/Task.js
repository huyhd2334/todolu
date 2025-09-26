import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      trim: true,
      default: "unknown" // có thể thêm default để tránh lỗi dữ liệu cũ không có field này
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "complete"],
      default: "active",
    },
    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Xóa model cũ nếu tồn tại, tránh lỗi "Cannot overwrite `Task` model once compiled"
mongoose.models.Task && delete mongoose.models.Task;

const Task = mongoose.model("Task", taskSchema);
export default Task;
