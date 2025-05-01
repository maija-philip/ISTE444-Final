import React from "react";
import "./assets/css/constants.css";
import "./assets/css/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import EditCowPage from "./pages/EditCowPage";
import CreateCowPage from "./pages/CreateCowPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import CowDetailPage from "./pages/CowDetailPage";



export const CowRouter = () => {
  // all the pages you can navigate to
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/:cowId/info",
      element: <CowDetailPage />,
    },
    {
      path: "/:cowId/edit",
      element: <EditCowPage />,
    },
    {
      path: "/create",
      element: <CreateCowPage />,
    },
    {
      path: "/account",
      element: <AccountPage/>
    }
  ]);

  return (
    <RouterProvider router={router}>
      <DashboardPage />
    </RouterProvider>
  );
};
