import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';

const mockUsers = [
  {
    id: 1,
    name: 'Dhivya',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Dhiya',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Rithi',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

const mockMessages = [
  { id: 1, sender: 'Dhivya', content: 'Hey, how are you?' },
  { id: 2, sender: 'Dhiya', content: 'I’m good! What about you?' },
  { id: 3, sender: 'Dhivya', content: 'Doing great 😊' },
];

function Chat() {
  const [messages, setMessages] = useState(mockMessages);
  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);

  return (
    <div className="min-h-screen flex">
      <Sidebar
        users={mockUsers}
        selectedUser={selectedUser}
        onSelectUser={setSelectedUser}
      />
      <ChatWindow
        messages={messages}
        setMessages={setMessages}
        selectedUser={selectedUser}
      />
    </div>
  );
}

export default Chat;
