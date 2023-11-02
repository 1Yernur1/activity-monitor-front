import { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import ChangePasswordFormStyles from "../mui-styles/ChangePasswordFormStyles";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "@/config/firbaseConfig";
import { useRouter, useSearchParams } from "next/navigation";
import { ShowPasswordIcon } from "../../service/SignInRenderer";

export const ChangePasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isErrorNewPassword, setIsErrorNewPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChangeNewPasswordField = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setNewPassword(event.target.value);

  const handleChangeConfirmPasswordField = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setConfirmPassword(event.target.value);

  const handleSubmitNewPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const oobCode = searchParams.get("oobCode");
    if (newPassword === confirmPassword && oobCode) {
      confirmPasswordReset(auth, oobCode, newPassword)
        .then(() => {
          router.push("/auth/sign-in");
        })
        .catch(() => {
          setIsErrorNewPassword(true);
        });
    } else {
      setIsErrorNewPassword(true);
    }
  };

  return (
    <Container component="section" maxWidth="xs">
      <Paper elevation={1} sx={ChangePasswordFormStyles.wrapperPaperStyles}>
        <Typography component="h1" fontWeight={700} fontSize={32}>
          Change password
        </Typography>
        <Box component="form" onSubmit={handleSubmitNewPassword}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>New Password</InputLabel>
            <OutlinedInput
              label="New Password"
              type={showPassword ? "text" : "password"}
              error={isErrorNewPassword}
              onChange={handleChangeNewPasswordField}
              endAdornment={
                <ShowPasswordIcon
                  {...{ showPassword, handleClickShowPassword }}
                />
              }
            />
          </FormControl>
          <FormControl fullWidth required margin="normal">
            <InputLabel>Confirm New Password</InputLabel>
            <OutlinedInput
              label="Confirm New Password"
              type={showPassword ? "text" : "password"}
              error={isErrorNewPassword}
              onChange={handleChangeConfirmPasswordField}
              endAdornment={
                <ShowPasswordIcon
                  {...{ showPassword, handleClickShowPassword }}
                />
              }
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            className="bg-black"
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
