import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IconButton, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import TaskCardsGridStyles from "../mui-styles/TaskCardsGridStyles";
import TaskCardModel from "../model/TaskCardModel";
import TaskCardService from "../service/TaskCardService";
import TaskCardRenderer from "../service/TaskCardRenderer";

export const TaskCardsGrid = () => {
  const [taskCardsData, setTaskCardsData] = useState<TaskCardModel[]>([]);
  const router = useRouter();

  useEffect(() => {
    setTaskCardsData(TaskCardService.getAllTaskCards());
  }, []);

  const onClickAddTaskCardButton = () => {
    TaskCardService.addTaskCard({
      id: taskCardsData.length + 1,
      priority: "epic",
      title: "Hello, Card!",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ratione provident accusamus, commodi voluptatem optio nostrum temporibus reprehenderit ad nisi? Ex nesciunt expedita quam fuga, quibusdam esse perspiciatis deserunt natus!",
      tags: ["first", "second", "third", "fourth"],
      finishDate: "15/10/2023",
      status: "toDo",
    });
    router.refresh();
  };

  const handleDeleteTaskCard = (selectedId: number) => {
    TaskCardService.deleteTaskCardById(selectedId);
    setTaskCardsData(TaskCardService.getAllTaskCards());
  };

  const renderTaskCardsListByStatus = (taskStatus: string) => {
    const taskCardsBySelectedCategory = taskCardsData.filter(
      (taskCard) => taskCard.status === taskStatus
    );
    return TaskCardRenderer.renderTaskCardsList(
      taskCardsBySelectedCategory,
      handleDeleteTaskCard
    );
  };

  return (
    <div className="p-2 overflow-auto">
      <div className="min-w-[75rem] grid grid-cols-4 gap-x-4">
        <div className="flex flex-col gap-2">
          <Typography sx={{ textTransform: "uppercase", fontWeight: 600 }}>
            to do
          </Typography>
          {renderTaskCardsListByStatus("toDo")}
          <IconButton
            color="primary"
            sx={TaskCardsGridStyles.addTaskCardIconButtonStyles}
            onClick={onClickAddTaskCardButton}
          >
            <AddCircleOutlineOutlinedIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="flex flex-col gap-2">
          <Typography textTransform={"uppercase"} fontWeight={600}>
            in progress
          </Typography>
          {renderTaskCardsListByStatus("inProgress")}
          {/* <IconButton
            color="primary"
            sx={TaskCardsGridStyles.addTaskCardIconButtonStyles}
            onClick={() => {}}
          >
            <AddCircleOutlineOutlinedIcon fontSize="large" />
          </IconButton> */}
        </div>
        <div className="flex flex-col gap-2">
          <Typography textTransform={"uppercase"} fontWeight={600}>
            review
          </Typography>
          {renderTaskCardsListByStatus("inReview")}
          {/* <IconButton
            color="primary"
            sx={TaskCardsGridStyles.addTaskCardIconButtonStyles}
            onClick={() => {}}
          >
            <AddCircleOutlineOutlinedIcon fontSize="large" />
          </IconButton> */}
        </div>
        <div className="flex flex-col gap-2">
          <Typography textTransform={"uppercase"} fontWeight={600}>
            done
          </Typography>
          {renderTaskCardsListByStatus("done")}
          {/* <IconButton
            color="primary"
            sx={TaskCardsGridStyles.addTaskCardIconButtonStyles}
            onClick={() => {}}
          >
            <AddCircleOutlineOutlinedIcon fontSize="large" />
          </IconButton> */}
        </div>
      </div>
    </div>
  );
};
