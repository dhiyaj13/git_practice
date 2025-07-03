import React from 'react';

const MessageInput = ({ newMessage, onChange, onSend }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSend();
  };

  return (
    <div className="p-4 border-t bg-white flex items-center gap-2">
      <input
        type="text"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={onSend}
        className="px-5 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
