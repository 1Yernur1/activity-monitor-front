import TaskCardModel from "../model/TaskCardModel";

let tasks = [
  {
    id: 1,
    priority: "epic",
    title: "Hello, Card!",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ratione provident accusamus, commodi voluptatem optio nostrum temporibus reprehenderit ad nisi? Ex nesciunt expedita quam fuga, quibusdam esse perspiciatis deserunt natus!",
    tags: ["first", "second", "third", "fourth"],
    finishDate: "15/10/2023",
    status: "toDo",
  },
  {
    id: 2,
    priority: "epic",
    title: "Hello, Card!",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ratione provident accusamus, commodi voluptatem optio nostrum temporibus reprehenderit ad nisi? Ex nesciunt expedita quam fuga, quibusdam esse perspiciatis deserunt natus!",
    tags: ["first", "second", "third", "fourth"],
    finishDate: "15/10/2023",
    status: "inProgress",
  },
  {
    id: 3,
    priority: "epic",
    title: "Hello, Card!",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ratione provident accusamus, commodi voluptatem optio nostrum temporibus reprehenderit ad nisi? Ex nesciunt expedita quam fuga, quibusdam esse perspiciatis deserunt natus!",
    tags: ["first", "second", "third", "fourth"],
    finishDate: "15/10/2023",
    status: "inReview",
  },
  {
    id: 4,
    priority: "epic",
    title: "Hello, Card!",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ratione provident accusamus, commodi voluptatem optio nostrum temporibus reprehenderit ad nisi? Ex nesciunt expedita quam fuga, quibusdam esse perspiciatis deserunt natus!",
    tags: ["first", "second", "third", "fourth"],
    finishDate: "15/10/2023",
    status: "done",
  },
];

export const addTask = (task: TaskCardModel) => {
  tasks.push(task);
};

export const getAllTasks = () => tasks;

export const removeTaskById = (selectedId: number) => {
  tasks = tasks.filter((taskCard) => taskCard.id !== selectedId);
};
