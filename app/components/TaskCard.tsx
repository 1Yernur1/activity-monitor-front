import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import { useEffect, useState } from "react";

export interface TaskCardProps {
  priority: string;
  title: string;
  description: string;
  tags: string[];
  finishDate: string;
}

export const TaskCard = () => {
  const [priority, setPriority] = useState("");
  const [title, setTitle] = useState("");
  const [descriptionText, setDescriptionText] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit." +
      " Ea ratione provident accusamus, commodi voluptatem optio nostrum" +
      " temporibus reprehenderit ad nisi? Ex nesciunt expedita quam fuga," +
      " quibusdam esse perspiciatis deserunt natus!"
  );
  const [tags, setTags] = useState<string[]>([]);
  const [finishDate, setFinishDate] = useState("");

  useEffect(() => {
    setPriority("epic");
    setTitle("Hello, card!");
    setDescriptionText((prevDescriptionText) =>
      truncateText(prevDescriptionText, 115)
    );
    setTags(["first", "second", "third", "fourth"]);
    setFinishDate("15/10/2023");
  }, []);

  const truncateText = (text: string, maxChars: number) =>
    text.length > maxChars ? text.slice(0, maxChars - 3) + "..." : text;

  const renderTagsList = () => {
    return tags.map((tag) => (
      <Chip
        key={tag}
        label={tag}
        color="default"
        size="small"
        sx={{
          textTransform: "uppercase",
          borderRadius: ".25rem",
          fontSize: 12,
        }}
      />
    ));
  };

  return (
    <Card>
      <CardContent>
        <Chip
          label={priority}
          color="info"
          size="small"
          sx={{ textTransform: "uppercase", borderRadius: ".25rem" }}
        />
        <Typography mt={1}>{title}</Typography>
        <Typography variant="body2">{descriptionText}</Typography>
        <Stack direction={"row"} alignItems={"center"} spacing={1} mt={1}>
          <AccessAlarmOutlinedIcon />
          <Typography>{finishDate}</Typography>
        </Stack>
        <Stack
          direction={"row"}
          spacing={1}
          useFlexGap
          flexWrap={"wrap"}
          mt={1}
        >
          {renderTagsList()}
        </Stack>
      </CardContent>
    </Card>
  );
};
