import React from "react";
import { useParams } from "react-router-dom";

const ChatRoom: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col">
      <div className="bg-white rounded-lg shadow flex-1 flex flex-col">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold">聊天室 #{id}</h1>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {/* 這裡之後可以加入聊天訊息列表 */}
        </div>
        <div className="p-4 border-t">
          {/* 這裡之後可以加入發送訊息的表單 */}
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
