const ChatMessage = ({ sender, text, time, isUser }) => (
  <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
    {!isUser && <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>}
    <div
      className={`p-3 rounded-lg max-w-xs ${
        isUser ? "bg-green-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <p className="text-sm">{text}</p>
      <span className="text-xs text-gray-500 block text-right">{time}</span>
    </div>
  </div>
);

export default ChatMessage;
