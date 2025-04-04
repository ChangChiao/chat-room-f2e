import React from "react";
import { useParams } from "react-router-dom";
import ChatMessage from "../components/ChatMessage";

const ChatRoom: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="w-full max-w-md mx-auto h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">Office</h2>
        <button className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm">
          JOIN
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <ChatMessage
          sender="Harvie"
          text="@dan Happy birthday!"
          time="18:25"
          isUser={false}
        />
        <ChatMessage
          sender="Harvie"
          text="You'll get your present as soon as we're back to working from the office."
          time="18:25"
          isUser={false}
        />
        <ChatMessage
          sender="User"
          text="Thanks! I hope that's soon."
          time="18:25"
          isUser={true}
        />
        <ChatMessage
          sender="Maria"
          text="You can still have your Happy Birthday song 🎵"
          time="18:25"
          isUser={false}
        />
      </div>

      {/* Input Field */}
      <div className="bg-white p-3 flex items-center border-t border-gray-300">
        <button className="text-gray-500 p-2">
          <FaPaperclip size={20} />
        </button>
        <input
          type="text"
          placeholder="Message"
          className="flex-1 px-3 py-2 border rounded-full outline-none mx-2"
        />
        <button className="text-gray-500 p-2">
          <FaMicrophone size={20} />
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-full ml-2">
          <IoMdSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
