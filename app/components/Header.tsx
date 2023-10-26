import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firbaseConfig";

export const Header = () => {
  const pathName = usePathname();
  const { user } = useContext(AuthContext);
  const router = useRouter();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href={pathName}
            sx={{ flexGrow: 1 }}
          >
            Activity Monitoring
          </Typography>
          {user ? (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                signOut(auth);
              }}
            >
              Sign out
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                router.push("auth/sign-in");
              }}
            >
              Sign in
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
