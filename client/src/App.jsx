import { useState, useEffect } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const API = 'http://localhost:3001/api/items';

export default function App() {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => { fetchItems(); }, []);

  async function fetchItems() {
    const res = await fetch(API);
    const data = await res.json();
    setItems(data);
  }

  async function createItem(item) {
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    fetchItems();
  }

  async function updateItem(id, item) {
    await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    setEditItem(null);
    fetchItems();
  }

  async function deleteItem(id) {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    fetchItems();
  }

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>My CRUD App</h1>
      <ItemForm
        onSubmit={editItem
          ? (data) => updateItem(editItem.id, data)
          : createItem}
        initialData={editItem}
        onCancel={() => setEditItem(null)}
      />
      <ItemList
        items={items}
        onEdit={setEditItem}
        onDelete={deleteItem}
      />
    </div>
  );
}