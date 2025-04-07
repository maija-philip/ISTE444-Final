import React from "react";
import "./assets/css/constants.css";
import "./assets/css/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import EditCowPage from "./pages/EditCowPage";
import CreateCowPage from "./pages/CreateCowPage";



export const CowRouter = () => {
  // all the pages you can navigate to
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
    },
    {
      path: "/:cowId/edit",
      element: <EditCowPage />,
    },
    {
      path: "/create",
      element: <CreateCowPage />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <DashboardPage />
    </RouterProvider>
  );
};
