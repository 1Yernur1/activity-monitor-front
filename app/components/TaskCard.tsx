import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import TaskCardStyles from "../mui-styles/TaskCardStyles";
import TaskCardModel from "../model/TaskCardModel";
import TaskCardFormatter from "../service/TaskCardFormatter";

export interface TaskCardProps {
  taskCard: TaskCardModel;
  deleteTaskCard: (taskCardId: number) => void;
}

export const TaskCard = ({
  taskCard: { id, priority, title, description, tags, finishDate },
  deleteTaskCard,
}: TaskCardProps) => {
  const trunkedDescription = TaskCardFormatter.truncateText(description, 115);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const onClickDeleteButtonInFloatingMenu = () => {
    deleteTaskCard(id);
    handleClose();
  };

  const renderTagsList = () => {
    return tags.map((tag) => (
      <Chip
        key={tag}
        label={tag}
        size="small"
        sx={TaskCardStyles.tagChipStyles}
      />
    ));
  };

  return (
    <Card>
      <CardContent>
        <Box sx={TaskCardStyles.cardBoxStyles}>
          <Chip
            label={priority}
            color="info"
            size="small"
            sx={TaskCardStyles.priorityChipStyles}
          />
          <IconButton onClick={handleClick}>
            <MoreHorizOutlinedIcon />
          </IconButton>
          <Menu open={isOpen} anchorEl={anchorEl} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={onClickDeleteButtonInFloatingMenu}>
              Delete
            </MenuItem>
          </Menu>
        </Box>
        <Typography>{title}</Typography>
        <Typography variant="body2">{trunkedDescription}</Typography>
        <Stack direction={"row"} alignItems={"center"} spacing={1} mt={1}>
          <AccessAlarmOutlinedIcon />
          <Typography>{finishDate}</Typography>
        </Stack>
        <Stack sx={TaskCardStyles.tagListStackStyles}>{renderTagsList()}</Stack>
      </CardContent>
    </Card>
  );
};
