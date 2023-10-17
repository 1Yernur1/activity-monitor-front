import { TaskCard } from "../components/TaskCard";
import TaskCardModel from "../model/TaskCardModel";

const TaskCardRenderer = {
  renderTaskCardsList: (taskCardList: TaskCardModel[], handleDeleteTaskCard: (id: number) => void) => {
    return taskCardList.map((card) => (
      <TaskCard key={card.id} taskCard={card} deleteTaskCard={handleDeleteTaskCard}/>
    ));
  },
};

export default TaskCardRenderer;
