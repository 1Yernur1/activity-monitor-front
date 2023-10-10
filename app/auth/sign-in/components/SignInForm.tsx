"use client";
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
import Link from "next/link";
import { useState } from "react";

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
        <Avatar sx={{ bgcolor: "black" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" fontWeight={700} fontSize={32}>
          Sign In
        </Typography>
        <Box component="form">
          <TextField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            margin="normal"
            required
            fullWidth
          />
          <FormControl fullWidth required margin="normal">
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              label="password"
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
            type="submit"
            variant="contained"
            className="bg-black"
            href="/"
            fullWidth
            sx={{ my: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
