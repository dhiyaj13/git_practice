import React, { useEffect, useRef } from 'react';

const ChatWindow = ({ messages, selectedUser }) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-indigo-500 text-white shadow">
        <img
          src={selectedUser.avatar}
          alt={selectedUser.name}
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div>
          <p className="font-semibold">{selectedUser.name}</p>
          <p className="text-xs text-indigo-200">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg._id || msg.id}
            className={`flex ${
              msg.sender === 'You' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-xs md:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                msg.sender === 'You'
                  ? 'bg-indigo-100 text-right text-gray-800 rounded-br-none'
                  : 'bg-white text-left text-gray-700 rounded-bl-none'
              }`}
            >
              <p className="text-xs text-gray-500 mb-1">{msg.sender}</p>
              <p className="break-words">{msg.content}</p>
              <p className="text-[10px] mt-1 text-gray-400">Just now</p>
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
    </div>
  );
};

export default ChatWindow;
