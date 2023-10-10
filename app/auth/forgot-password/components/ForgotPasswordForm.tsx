import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export const ForgotPassword = () => {
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
          <Button
            type="submit"
            variant="contained"
            className="bg-black"
            href="otp-verification"
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
