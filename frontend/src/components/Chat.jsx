import React, { useEffect, useRef, useState } from 'react';

const mockUsers = [
  { id: 1, name: 'Dhivya', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Dhiya', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Rithi', avatar: 'https://i.pravatar.cc/150?img=3' },
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
  const messageEndRef = useRef(null);

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

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Sidebar */}
      <aside className="w-full sm:w-1/4 bg-white border-r p-4">
        <h2 className="text-lg font-bold text-indigo-600 mb-4">Contacts</h2>
        <ul className="space-y-3">
          {mockUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
                selectedUser.id === user.id
                  ? 'bg-indigo-100 text-indigo-700 font-semibold'
                  : 'hover:bg-gray-100'
              }`}
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-indigo-400"
              />
              <div>
                <p>{user.name}</p>
                <span className="text-xs text-gray-500">Online</span>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Window */}
      <main className="flex-1 flex flex-col bg-gray-50">
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
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 custom-scroll">
          {messages.map((msg) => (
            <div
              key={msg.id}
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

        {/* Message Input */}
        <div className="p-4 border-t bg-white flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleSend}
            className="px-5 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}

export default Chat;
