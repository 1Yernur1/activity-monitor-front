"use client";
import { AuthContext } from "@/app/context/AuthContext";
import { auth } from "@/config/firbaseConfig";
import { LockOutlined, VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Paper,
  Avatar,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import SignInFormStyles from "../mui-styles/SignInFormStyles";
import StaticProperties from "../static-properties/StaticProperties";
import { useRouter } from "next/navigation";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorSignIn, setIsErrorSignIn] = useState(false);
  const [isSignButtonDisabled, setIsSignButtonDisabled] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { setUser } = useContext(AuthContext);

  const router = useRouter();

  const handleSignIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSignButtonDisabled(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user.uid);
        router.push("/");
        setIsSignButtonDisabled(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
          <TextField
            {...StaticProperties.emailInputProperties}
            error={isErrorSignIn}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleClickShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
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
          <Button {...StaticProperties.buttonSubmitProperties} disabled={isSignButtonDisabled} sx={{ my: 2 }}>
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
