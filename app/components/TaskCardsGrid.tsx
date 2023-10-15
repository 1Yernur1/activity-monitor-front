import { Box, Container, Grid, Typography } from "@mui/material";
import { TaskCard } from "./TaskCard";
import { useEffect, useState } from "react";

export const TaskCardsGrid = () => {
  const [toDoTaskCardsList, setTodoTaskCardsList] = useState<JSX.Element[]>([]);
  const [inProgressTaskCardsList, setInProgressTaskCardsList] = useState<
    JSX.Element[]
  >([]);
  const [inReviewTaskCardsList, setInReviewTaskCardsList] = useState<
    JSX.Element[]
  >([]);
  const [doneTaskCardsList, setDoneTaskCardsList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setTodoTaskCardsList([1, 2].map((cardKey) => <TaskCard key={cardKey} />));
    setInProgressTaskCardsList(
      [1, 2, 3, 4].map((cardKey) => <TaskCard key={cardKey} />)
    );
    setInReviewTaskCardsList(
      [1, 2, 3].map((cardKey) => <TaskCard key={cardKey} />)
    );
    setDoneTaskCardsList([1].map((cardKey) => <TaskCard key={cardKey} />));
  }, []);

  return (
    <div className="p-2 overflow-auto">
      <div className="min-w-[75rem] grid grid-cols-4 gap-x-4">
        <div className="flex flex-col gap-2">
          <Typography textTransform={"uppercase"} fontWeight={600}>
            to do
          </Typography>
          {toDoTaskCardsList}
        </div>
        <div className="flex flex-col gap-2">
          <Typography textTransform={"uppercase"} fontWeight={600}>
            in progress
          </Typography>
          {inProgressTaskCardsList}
        </div>
        <div className="flex flex-col gap-2">
          <Typography textTransform={"uppercase"} fontWeight={600}>
            review
          </Typography>
          {inReviewTaskCardsList}
        </div>
        <div className="flex flex-col gap-2">
          <Typography textTransform={"uppercase"} fontWeight={600}>
            done
          </Typography>
          {doneTaskCardsList}
        </div>
      </div>
    </div>
  );
};
