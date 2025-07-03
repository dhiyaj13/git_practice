import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';

const mockUsers = [
  { id: 1, name: 'Dhivya', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Dhiya', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Rithi', avatar: 'https://i.pravatar.cc/150?img=3' },
];

function Chat() {
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(mockUsers[1]);
  const [newMessage, setNewMessage] = useState('');

  // Fetch messages from backend
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/messages')
      .then((res) => setMessages(res.data))
      .catch((err) => console.error('Error fetching messages:', err));
  }, []);

  // Send new message
  const handleSend = async () => {
    if (!newMessage.trim()) return;

    try {
      const response = await axios.post('http://localhost:5000/api/messages', {
        sender: 'You',
        content: newMessage.trim(),
      });

      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <Sidebar
        users={mockUsers}
        selectedUser={selectedUser}
        onSelectUser={setSelectedUser}
      />
      <div className="flex-1 flex flex-col">
        <ChatWindow messages={messages} selectedUser={selectedUser} />
        <MessageInput
          newMessage={newMessage}
          onChange={setNewMessage}
          onSend={handleSend}
        />
      </div>
    </div>
  );
}

export default Chat;
