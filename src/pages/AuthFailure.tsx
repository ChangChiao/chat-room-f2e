import { useNavigate } from "react-router-dom";

const AuthFailure = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto max-w-2xl">
      <div className="mt-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">登入失敗</h1>
        <p className="text-gray-600 mb-6">
          很抱歉，您的登入驗證失敗。請確認您的帳號密碼是否正確，或稍後再試。
        </p>
        <button
          className="mt-12 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          onClick={() => navigate("/login")}
        >
          返回登入頁面
        </button>
      </div>
    </div>
  );
};

export default AuthFailure;
