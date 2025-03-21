import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/chat" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/chat",
    element: <ChatList />,
  },
  {
    path: "/chat/:id",
    element: <ChatRoom />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
