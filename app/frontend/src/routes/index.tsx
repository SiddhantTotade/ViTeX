import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { RouteSuspense } from "./routeSuspense";
import SuspenseLoader from "@/components/common/SuspenseLoader";

const LoginPage = React.lazy(() => import("@/pages/auth/Login"));
const RegisterPage = React.lazy(() => import("@/pages/auth/Register"));
const NotFoundPage = React.lazy(() => import("@/pages/404NotFound"));

type Route = RouteObject[] | RouteObject;

const authRoutes: Route = [
  {
    path: "/auth/login",
    element: <RouteSuspense children={<LoginPage />} />,
  },
  {
    path: "/auth/register",
    element: <RouteSuspense children={<RegisterPage />} />,
  },
];

const appRoutes: Route = [];

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
  ...authRoutes,
  ...appRoutes,
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
