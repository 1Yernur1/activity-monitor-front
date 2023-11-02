"use client";
import { auth } from "@/config/firbaseConfig";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import StaticProperties from "../static-properties/StaticProperties";
import ForgotPasswordFormStyles from "../mui-styles/ForgotPasswordFormStyles";

export const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSendEmailButtonDisabled, setIsSendEmailButtonDisabled] =
    useState(false);

  const handleChangeEmailField = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setEmail(event.target.value);

  const handleSubmitResetPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSendEmailButtonDisabled(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        router.push("/auth/sign-in");
      })
      .catch(() => {
        setIsSendEmailButtonDisabled(false);
      });
  };
  return (
    <Container component="section" maxWidth="xs">
      <Paper elevation={1} sx={ForgotPasswordFormStyles.wrapperPaperStyles}>
        <Typography component="h1" fontWeight={700} fontSize={32}>
          Reset your password
        </Typography>
        <Box component="form" onSubmit={handleSubmitResetPassword}>
          <TextField
            {...StaticProperties.emailInputProperties}
            onChange={handleChangeEmailField}
          />
          <Button
            type="submit"
            variant="contained"
            className="bg-black"
            fullWidth
            disabled={isSendEmailButtonDisabled}
            sx={{ mt: 2 }}
          >
            Send Email
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
