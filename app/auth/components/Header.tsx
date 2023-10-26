import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" component="a" href="/">
            Activity Monitoring
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
