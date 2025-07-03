import React from 'react';

const Sidebar = ({ users = [], selectedUser, onSelectUser }) => {
  return (
    <aside className="w-full sm:w-1/4 bg-white border-r p-4">
      <h2 className="text-lg font-bold text-indigo-600 mb-4">Contacts</h2>
      <ul className="space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => onSelectUser(user)}
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
  );
};

export default Sidebar;
