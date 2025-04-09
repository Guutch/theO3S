import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [added, setAdded] = useState(false);

  // POST a new item to /api/newitems
  useEffect(() => {
    fetch('/api/newitems', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "Test Item",
        description: "This is a test description"
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Added new item:", data);
        setAdded(true);
      })
      .catch(err => console.error("POST error:", err));
  }, []);

  // GET all newitems after adding a new document
  useEffect(() => {
    if (!added) return; // wait until a new item is added
    fetch('/api/newitems')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched new items:", data);
        setItems(data);
      })
      .catch(err => console.error("GET error:", err));
  }, [added]);

  return (
    <div>
      <h1>New Items</h1>
      {items.length ? (
        <ul>
          {items.map(item => (
            <li key={item._id}>{item.name}: {item.description}</li>
          ))}
        </ul>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
}

export default App;
