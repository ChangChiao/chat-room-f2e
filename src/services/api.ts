import { ApiResponse } from "../models";
import axiosInstance from "./axios";

interface User {
  id: number;
  name: string;
  email: string;
}

export const authApi = {
  getAuthInfo: () => {
    return axiosInstance.get<ApiResponse<User>>("/auth/info");
  },
  signUp: (data: { name: string; email: string; password: string }) => {
    return axiosInstance.post<ApiResponse<User>>("/auth/signup", data);
  },
};

export const userApi = {
  getCurrentUser: () => {
    return axiosInstance.get<ApiResponse<User>>("/users");
  },
  getAllUsers: () => {
    return axiosInstance.get<ApiResponse<User[]>>("/users/all");
  },
  createUser: (userData: Partial<User>) => {
    return axiosInstance.post<ApiResponse<User>>("/users", userData);
  },
};

interface Message {
  id: number;
  content: string;
  userId: number;
  createdAt: string;
}

export const chatApi = {
  getMessages: (roomId: number) => {
    return axiosInstance.get<ApiResponse<Message[]>>(
      `/rooms/${roomId}/messages`
    );
  },

  sendMessage: (roomId: number, content: string) => {
    return axiosInstance.post<ApiResponse<Message>>(
      `/rooms/${roomId}/messages`,
      {
        content,
      }
    );
  },
};
