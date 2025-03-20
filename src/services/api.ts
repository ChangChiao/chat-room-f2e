import axiosInstance from "./axios";

interface ApiResponse<T> {
  data: T;
  message?: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

export const userApi = {
  // 獲取用戶信息
  getCurrentUser: () => {
    return axiosInstance.get<ApiResponse<User>>("/user/profile");
  },

  // 更新用戶信息
  updateUser: (userData: Partial<User>) => {
    return axiosInstance.put<ApiResponse<User>>("/user/profile", userData);
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

  // 發送消息
  sendMessage: (roomId: number, content: string) => {
    return axiosInstance.post<ApiResponse<Message>>(
      `/rooms/${roomId}/messages`,
      {
        content,
      }
    );
  },
};

// 使用示例：
/*
try {
  const user = await userApi.getCurrentUser();
  console.log('用戶信息：', user);
} catch (error) {
  // 錯誤已經在 axios 攔截器中統一處理
  console.error('獲取用戶信息失敗：', error);
}
*/
