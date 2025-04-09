import React, { useEffect, useState } from 'react';
import Sidebar from "./frontend/Components/Sidebar"; // adjust path as needed

function App() {
  const [users, setUsers] = useState([]);
  const [seeded, setSeeded] = useState(false);

   // Function to handle logging out (modify as needed)
   const handleLogout = () => {
    // your logout logic here
    console.log("Logging out...");
  };

  // After seeding, GET all users
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched users:", data);
        setUsers(data);
      })
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <Sidebar onLogout={handleLogout} />
      {users.length ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              {user.name} - {user.email} - {user.role}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default App;
