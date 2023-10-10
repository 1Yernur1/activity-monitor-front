"use client";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";

export const OTPVerificationForm = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (newValue: string) => setOtp(newValue);

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
          OTP Code Verification
        </Typography>
        <Box component="form">
          <MuiOtpInput
            value={otp}
            onChange={handleChange}
            sx={{ mx: 8 }}
            TextFieldsProps={{
              margin: "normal",
              required: true,
              size: "small",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            className="bg-black"
            href="new-password"
            fullWidth
            sx={{ mt: 2 }}
          >
            Continue
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
