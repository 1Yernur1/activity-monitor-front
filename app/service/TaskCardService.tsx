import TaskCardModel from "../model/TaskCardModel";
import { addTask, getAllTasks, removeTaskById } from "./TaskCardRepository";

const TaskCardService = {
  getAllTaskCards: () => getAllTasks(),
  addTaskCard: (taskCard: TaskCardModel) => {
    addTask(taskCard);
  },
  deleteTaskCardById: (selectedId: number) => {
    removeTaskById(selectedId);
  },
};

export default TaskCardService;
