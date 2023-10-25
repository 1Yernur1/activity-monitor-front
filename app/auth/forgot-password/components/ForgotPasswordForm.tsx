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
import {
  ActionCodeSettings,
  sendPasswordResetEmail,
  sendSignInLinkToEmail,
  verifyPasswordResetCode,
} from "firebase/auth";
import { FormEvent, useState } from "react";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleClickResetPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log("All fine");
        console.log(res);
      })
      .catch((error) => {
        console.log("something wrong");
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    // const actionCodeSettings: ActionCodeSettings = {
    //   url: "http://localhost:3000/auth/forgot-password",
    //   iOS: {
    //     bundleId: "com.example.ios",
    //   },
    //   android: {
    //     packageName: "com.example.android",
    //     installApp: true,
    //     minimumVersion: "12",
    //   },
    //   handleCodeInApp: true,
    //   dynamicLinkDomain: "http://localhost:3000/auth/forgot-password"
    // };

    // sendPasswordResetEmail(auth, email, actionCodeSettings)
    //   .then((response) => {
    //     console.log("All fine");
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log("Something wrong");
    //   });
  };
  return (
    <Container component="section" maxWidth="xs">
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          mt: 8,
        }}
      >
        <Typography component="h1" fontWeight={700} fontSize={32}>
          Reset your password
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            handleClickResetPassword(e);
          }}
        >
          <TextField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            margin="normal"
            required
            fullWidth
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Button
            type="submit"
            variant="contained"
            className="bg-black"
            fullWidth
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
