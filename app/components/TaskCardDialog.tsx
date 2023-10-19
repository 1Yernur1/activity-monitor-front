import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
interface TaskCardDialogProps {
  isOpen: boolean;
  
}
export const TaskCardDialog = () => {
  return (
    <Dialog open={true} onClose={() => {}}>
      <DialogTitle>Hello</DialogTitle>
      <DialogContent>
        <DialogContentText>Hello, dialog!</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {}}>Cancel</Button>
        <Button onClick={() => {}}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
