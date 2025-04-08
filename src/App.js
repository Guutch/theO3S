import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <h1>Items from Backend</h1>
      {items.length ? (
        <ul>
          {items.map(item => <li key={item._id}>{item.name}</li>)}
        </ul>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
}

export default App;
