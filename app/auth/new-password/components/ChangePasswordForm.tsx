import { FormEvent, useState } from "react";
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
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "@/config/firbaseConfig";
import { useRouter, useSearchParams } from "next/navigation";

export const ChangePasswordForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isErrorNewPassword, setIsErrorNewPassword] = useState(false);
  const [oobCode, setOobCode] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChangePassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchParams.get("oobCode")) {
      const searchParam = searchParams.get("oobCode");
      setOobCode(searchParam);
    }
    // verifyPasswordResetCode(auth, oddCode)
    //   .then(() => {
    //     console.log("verification good");
    //   })
    //   .catch(() => {
    //     console.log("verification bad");
    //   });
    if (newPassword === confirmPassword) {
      confirmPasswordReset(auth, oobCode, newPassword)
        .then(() => {
          setIsErrorNewPassword(false);
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
        <Box
          component="form"
          onSubmit={(e) => {
            handleChangePassword(e);
          }}
        >
          <FormControl fullWidth required margin="normal">
            <InputLabel>New Password</InputLabel>
            <OutlinedInput
              label="New Password"
              type={showPassword ? "text" : "password"}
              error={isErrorNewPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
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
              error={isErrorNewPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
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
