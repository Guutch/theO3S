import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [seeded, setSeeded] = useState(false);

  // POST the seed user data
  useEffect(() => {
    const seedData = [
      {
        email: "test@example.com",
        secret_key: "supersecret",
        name: "Test User",
        role: "admin",
        created_at: "2025-02-21T15:49:15.662Z",
        updated_at: "2025-02-21T15:49:15.662Z"
      },
      {
        email: "simonhutch1611@gmail.com",
        secret_key: "12345",
        name: "Simon Hutchinson",
        role: "admin",
        created_at: "2025-02-12T23:29:50.095Z",
        updated_at: "2025-02-12T23:29:50.095Z"
      }
    ];

    Promise.all(
      seedData.map(user =>
        fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        }).then(res => res.json())
      )
    )
      .then(data => {
        console.log("Seeded users:", data);
        setSeeded(true);
      })
      .catch(err => console.error("Error seeding users:", err));
  }, []);

  // GET all users after seeding
  useEffect(() => {
    if (!seeded) return;
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
