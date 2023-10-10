import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" component="a" href={pathName} sx={{flexGrow: 1}}>
            Activity Monitoring
          </Typography>
          <Button variant="contained" href="auth/sign-in">
            Sign In
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
