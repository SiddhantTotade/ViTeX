import { ReactNode } from "react";
import { Typography, Card } from "@mui/material";

interface AuthLaytoutProps {
  children?: ReactNode;
  title?: string;
}

export default function AuthLayout({ title, children }: AuthLaytoutProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: {
          xs: "95%",
          sm: "65%",
          md: "45%",
          lg: "25%",
        },
        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        padding: "10px",
        gap: "20px",
      }}
      elevation={8}
    >
      <Typography fontSize={30}>ViTeX</Typography>
      <Typography color="">{title}</Typography>
      {children}
    </Card>
  );
}
