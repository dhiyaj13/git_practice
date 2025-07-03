import React, { useEffect, useRef } from 'react';
import MessageInput from './MessageInput';

function ChatWindow({ messages, setMessages, selectedUser }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="p-4 bg-indigo-500 text-white font-semibold">
        Chat with {selectedUser.name}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-md px-4 py-2 rounded-lg shadow ${
              msg.sender === 'You'
                ? 'bg-indigo-100 self-end text-right ml-auto'
                : 'bg-white self-start'
            }`}
          >
            <p className="text-sm text-gray-500">{msg.sender}</p>
            <p>{msg.content}</p>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <MessageInput messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default ChatWindow;
