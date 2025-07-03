import React, { useState } from 'react';

function MessageInput({ messages, setMessages }) {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const newMsg = {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage.trim(),
    };
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="p-4 border-t flex gap-2 bg-white">
      <input
        type="text"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={handleSend}
        className="px-5 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;
