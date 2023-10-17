const TaskCardFormatter = {
  truncateText: (text: string, maxChars: number) =>
    text.length > maxChars ? text.slice(0, maxChars - 3) + "..." : text,
};

export default TaskCardFormatter;
