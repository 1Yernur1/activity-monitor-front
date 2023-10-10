import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box
      minHeight={"100vh"}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress />
    </Box>
  );
}
