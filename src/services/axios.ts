import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// 創建錯誤類型
export interface ApiError {
  status: number;
  message: string;
  data: unknown;
}

export class CustomError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;
      let message = "發生錯誤";

      switch (status) {
        case 400:
          message = "請求錯誤";
          break;
        case 401:
          message = "請重新登入";
          break;
        case 403:
          message = "沒有權限";
          break;
        case 404:
          message = "請求url不存在";
          break;
        case 500:
          message = "伺服器內部錯誤";
          break;
        default:
          message = `連接錯誤 ${status}`;
      }

      return Promise.reject(
        new CustomError(message, status, error.response.data)
      );
    }

    if (error.request) {
      // 請求已發出但沒有收到響應
      return Promise.reject(new CustomError("網路錯誤，請檢查您的網路連線", 0));
    }

    // 其他錯誤
    return Promise.reject(new CustomError("發生未知錯誤", 0));
  }
);

export default axiosInstance;
