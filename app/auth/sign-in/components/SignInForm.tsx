"use client";
import Link from "next/link";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/AuthContext";
import { auth } from "@/config/firbaseConfig";
import { LockOutlined } from "@mui/icons-material";
import {
  Paper,
  Avatar,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
  FormHelperText,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignInFormStyles from "../mui-styles/SignInFormStyles";
import StaticProperties from "../static-properties/StaticProperties";
import { ShowPasswordIcon } from "../../service/SignInRenderer";

export const SignInForm = () => {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorSignIn, setIsErrorSignIn] = useState(false);
  const [isSignButtonDisabled, setIsSignButtonDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChangeEmailInputField = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setEmail(event.target.value);

  const handleSignIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSignButtonDisabled(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user.uid);
        router.push("/");
      })
      .catch(() => {
        setIsErrorSignIn(true);
        setIsSignButtonDisabled(false);
      });
  };

  return (
    <Container component="section" maxWidth="xs">
      <Paper elevation={1} sx={SignInFormStyles.wrapperPaperStyles}>
        <Avatar sx={SignInFormStyles.avatarIconStyles}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" fontWeight={700} fontSize={32}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={(e) => handleSignIn(e)}>
          {isErrorSignIn && (
            <FormHelperText className="text-red-500 text-center text-base">
              Wrong Email or Password
            </FormHelperText>
          )}
          <TextField
            {...StaticProperties.emailInputProperties}
            error={isErrorSignIn}
            onChange={handleChangeEmailInputField}
          />
          <FormControl fullWidth required margin="normal">
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              label="password"
              type={showPassword ? "text" : "password"}
              error={isErrorSignIn}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              endAdornment={
                <ShowPasswordIcon
                  {...{ showPassword, handleClickShowPassword }}
                />
              }
            />
          </FormControl>
          <Grid container alignItems="center">
            <Grid item xs>
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Remember me"
              />
            </Grid>
            <Grid item xs sx={{ textAlign: "right" }}>
              <Link href="forgot-password">Forgot password?</Link>
            </Grid>
          </Grid>
          <Button
            {...StaticProperties.buttonSubmitProperties}
            disabled={isSignButtonDisabled}
            sx={{ my: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
