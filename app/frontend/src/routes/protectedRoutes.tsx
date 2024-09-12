import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "@/redux/store";

export const ProtectedRoutes = ({ children }: PropsWithChildren) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (auth.authLoading) {
    console.log();
  }

  return (
    <>{!auth.isAuthenticated ? <Navigate to="/auth/login" /> : children}</>
  );
};
