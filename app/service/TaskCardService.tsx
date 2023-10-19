import TaskCardModel from "../model/TaskCardModel";
import {
  addTask,
  getAllTasks,
  getTaskById,
  removeTaskById,
} from "./TaskCardRepository";

const TaskCardService = {
  getAllTaskCards: () => getAllTasks(),
  getTaskCardById: (id: number) => getTaskById(id),
  addTaskCard: (taskCard: TaskCardModel) => {
    addTask(taskCard);
  },
  deleteTaskCardById: (selectedId: number) => {
    removeTaskById(selectedId);
  },
};

export default TaskCardService;
