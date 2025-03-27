import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";
import NotFound from "./pages/NotFound";
import AuthFailure from "./pages/AuthFailure";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Navigate to="/chat" replace />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/auth-failure",
    element: <AuthFailure />,
  },
  {
    path: "/chat",
    element: (
      <ProtectedRoute>
        <ChatList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/chat/:id",
    element: (
      <ProtectedRoute>
        <ChatRoom />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
