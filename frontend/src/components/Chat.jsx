import React, { useState } from 'react';

const mockUsers = [
  { id: 1, name: 'Dhivya' },
  { id: 2, name: 'Dhiya' },
  { id: 3, name: 'Rithi' },
];

const mockMessages = [
  { id: 1, sender: 'Dhivya', content: 'Hey, how are you?' },
  { id: 2, sender: 'Dhiya', content: 'I’m good! What about you?' },
  { id: 3, sender: 'Dhivya', content: 'Doing great 😊' },
];

function Chat() {
  const [messages, setMessages] = useState(mockMessages);
  const [selectedUser, setSelectedUser] = useState(mockUsers[1]);
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
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <ul className="space-y-2">
          {mockUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`p-2 rounded cursor-pointer ${
                selectedUser.id === user.id
                  ? 'bg-indigo-100 text-indigo-700 font-semibold'
                  : 'hover:bg-gray-100'
              }`}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
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
              className={`max-w-md px-4 py-2 rounded-lg ${
                msg.sender === 'You'
                  ? 'bg-indigo-100 self-end text-right ml-auto'
                  : 'bg-white self-start'
              } shadow`}
            >
              <p className="text-sm text-gray-500">{msg.sender}</p>
              <p>{msg.content}</p>
            </div>
          ))}
        </div>

        {/* Message Input */}
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
      </div>
    </div>
  );
}

export default Chat;
