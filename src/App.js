import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Fetching items from /api/items...");
    fetch('/api/items')
      .then((res) => {
        console.log("Response status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        setItems(data);
      })
      .catch((err) => console.error("Fetch error:", err));
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
