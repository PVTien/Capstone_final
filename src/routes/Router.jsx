import React from "react";
import { useRoutes } from "react-router-dom";
import NoAuthGuard from "../guards/NoAuthGuard";
import HomeLayout from "../layouts/home/HomeLayout";
import CreateProject from "../pages/create-project/CreateProject";
import Login from "../pages/login/Login";
import ProjectDetail from "../pages/project-detail/ProjectDetail";
import ProjectManagement from "../pages/project-management/ProjectManagement";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <ProjectManagement />,
        },
        {
          path: "/project-detail/:id",
          element: <ProjectDetail />,
        },
        {
          path: "/create-project",
          element: <CreateProject />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return routing;
}
