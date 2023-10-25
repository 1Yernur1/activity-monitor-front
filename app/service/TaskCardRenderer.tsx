import { Typography, IconButton } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { TaskCard } from "../components/TaskCard";
import TaskCardModel from "../model/TaskCardModel";
import TaskCardsGridStyles from "../mui-styles/TaskCardsGridStyles";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

interface TaskCardsListProps {
  taskCardsDataList: TaskCardModel[];
  handleDeleteTaskCard: (id: number) => void;
}
export const TaskCardsList = ({
  taskCardsDataList,
  handleDeleteTaskCard,
}: TaskCardsListProps) => {
  return taskCardsDataList.map((card) => (
    <TaskCard
      key={card.id}
      taskCard={card}
      deleteTaskCard={handleDeleteTaskCard}
    />
  ));
};

interface TaskCardsGridColumnProps {
  title: string;
  taskCardsDataList: TaskCardModel[];
  handleDeleteTaskCard: (id: number) => void;
  onClickAddTaskCardButton: () => void;
}
export const TaskCardsListColumn = ({
  title,
  taskCardsDataList,
  handleDeleteTaskCard,
  onClickAddTaskCardButton,
}: TaskCardsGridColumnProps) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-2">
      <Typography sx={TaskCardsGridStyles.gridColumnTitleStyles}>
        {title}
      </Typography>
      <TaskCardsList
        taskCardsDataList={taskCardsDataList}
        handleDeleteTaskCard={handleDeleteTaskCard}
      />
      {user && (
        <IconButton
          color="primary"
          sx={TaskCardsGridStyles.addTaskCardIconButtonStyles}
          onClick={onClickAddTaskCardButton}
        >
          <AddCircleOutlineOutlinedIcon fontSize="large" />
        </IconButton>
      )}
    </div>
  );
};

interface TaskCardsGridBoar {
  taskCardsDataList: TaskCardModel[];
  handleDeleteTaskCard: (id: number) => void;
  onClickAddTaskCardButton: (taskCardStatus: string) => void;
}
export const TaskCardsGridBoard = ({
  taskCardsDataList,
  handleDeleteTaskCard,
  onClickAddTaskCardButton,
}: TaskCardsGridBoar) => {
  const getTaskCardsDataByStatus = (selectedStatus: string) =>
    taskCardsDataList.filter(
      (taskCardsData) => taskCardsData.status === selectedStatus
    );

  const toDoTaskCardsData = getTaskCardsDataByStatus("toDo");
  const inProgressTaskCardsData = getTaskCardsDataByStatus("inProgress");
  const inReviewTaskCardsData = getTaskCardsDataByStatus("inReview");
  const doneTaskCardsData = getTaskCardsDataByStatus("done");

  const taskCardsGridColumnsData = [
    { title: "to do", data: toDoTaskCardsData, status: "toDo" },
    {
      title: "in progress",
      data: inProgressTaskCardsData,
      status: "inProgress",
    },
    { title: "review", data: inReviewTaskCardsData, status: "inReview" },
    { title: "done", data: doneTaskCardsData, status: "done" },
  ];

  return taskCardsGridColumnsData.map(({ title, data, status }, index) => (
    <TaskCardsListColumn
      key={index}
      title={title}
      taskCardsDataList={data}
      handleDeleteTaskCard={handleDeleteTaskCard}
      onClickAddTaskCardButton={() => {
        onClickAddTaskCardButton(status);
      }}
    />
  ));
};
