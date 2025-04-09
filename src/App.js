import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [seeded, setSeeded] = useState(false);

  // Seed the user data via POST /api/users/seed
  // useEffect(() => {
  //   fetch('/api/users/seed', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("Seeded users:", data);
  //       setSeeded(true);
  //     })
  //     .catch(err => console.error("Error seeding users:", err));
  // }, []);

  // After seeding, GET all users
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched users:", data);
        setUsers(data);
      })
      .catch(err => console.error("Error fetching users:", err));
  }, [seeded]);

  return (
    <div>
      <h1>Users</h1>
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
