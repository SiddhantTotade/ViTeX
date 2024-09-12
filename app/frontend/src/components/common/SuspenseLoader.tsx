import { Box, CircularProgress } from "@mui/material";

export default function SuspenseLoader() {
  return (
    <Box
      sx={{
        zIndex: 1,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress size="sm" />
    </Box>
  );
}
