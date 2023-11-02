import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";

interface ShowPasswordIconProps {
  showPassword: boolean;
  handleClickShowPassword: () => void;
}
export const ShowPasswordIcon = ({
  showPassword,
  handleClickShowPassword,
}: ShowPasswordIconProps) => {
  return (
    <InputAdornment position="end">
      <IconButton edge="end" onClick={handleClickShowPassword}>
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
};
