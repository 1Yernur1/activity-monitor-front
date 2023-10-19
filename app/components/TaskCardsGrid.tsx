import { useEffect, useState } from "react";
import TaskCardModel from "../model/TaskCardModel";
import TaskCardService from "../service/TaskCardService";
import { TaskCardsGridBoard } from "../service/TaskCardRenderer";
import { TaskCardDialog } from "./TaskCardDialog";

export const TaskCardsGrid = () => {
  const [id, setId] = useState(6);
  const [taskCardsData, setTaskCardsData] = useState<TaskCardModel[]>([]);

  useEffect(() => {
    setTaskCardsData(TaskCardService.getAllTaskCards());
  }, []);

  const onClickAddTaskCardButton = (taskCardStatus: string) => {
    setId(id + 1);
    TaskCardService.addTaskCard({
      id: id,
      priority: "epic",
      title: "Hello, Card!",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ratione provident accusamus, commodi voluptatem optio nostrum temporibus reprehenderit ad nisi? Ex nesciunt expedita quam fuga, quibusdam esse perspiciatis deserunt natus!",
      tags: ["first", "second", "third", "fourth"],
      finishDate: "15/10/2023",
      status: taskCardStatus,
    });
  };

  const handleDeleteTaskCard = (selectedId: number) => {
    TaskCardService.deleteTaskCardById(selectedId);
    setTaskCardsData(TaskCardService.getAllTaskCards());
  };

  const [isOpenTaskCardDialog, setIsOpenTaskCardDialog] = useState(false);
  const handleOpen = () => {
    setIsOpenTaskCardDialog(true);
  };
  const handleClose = () => {
    setIsOpenTaskCardDialog(false);
  };

  return (
    <div className="p-2 overflow-auto">
      <div className="min-w-[75rem] grid grid-cols-4 gap-x-4">
        <TaskCardsGridBoard
          taskCardsDataList={taskCardsData}
          handleDeleteTaskCard={handleDeleteTaskCard}
          onClickAddTaskCardButton={onClickAddTaskCardButton}
        />
      </div>
    </div>
  );
};
