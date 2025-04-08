import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Automatically add an item
    fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Auto-added Item' })
    })
      .then((res) => res.json())
      .then(() => {
        // After adding, fetch the updated list of items
        return fetch('/api/items');
      })
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h1>Items</h1>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
}

export default App;
