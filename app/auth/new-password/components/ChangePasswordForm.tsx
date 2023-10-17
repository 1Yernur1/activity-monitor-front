import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import ChangePasswordFormStyles from "../mui-styles/ChangePasswordFormStyles";

export const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Container component="section" maxWidth="xs">
      <Paper
        elevation={1}
        sx={ChangePasswordFormStyles.wrapperPaperStyles}
      >
        <Typography component="h1" fontWeight={700} fontSize={32}>
          Change password
        </Typography>
        <Box component="form">
          <FormControl fullWidth required margin="normal">
            <InputLabel>New Password</InputLabel>
            <OutlinedInput
              label="New Password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth required margin="normal">
            <InputLabel>Confirm New Password</InputLabel>
            <OutlinedInput
              label="Confirm New Password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            className="bg-black"
            href="sign-in"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="outlined"
            href="sign-in"
            fullWidth
            sx={{ my: 2 }}
          >
            Back to Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
