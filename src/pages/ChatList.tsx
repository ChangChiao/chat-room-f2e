import React from "react";
import { Link } from "react-router-dom";

const ChatList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">聊天室列表</h1>
      <div className="space-y-4">
        {/* 這裡之後可以加入聊天室列表 */}
        <Link
          to="/chat/1"
          className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        >
          聊天室 #1
        </Link>
      </div>
    </div>
  );
};

export default ChatList;
