import { useState, useEffect } from 'react';

export default function ItemForm({ onSubmit, initialData, onCancel }) {
  const [form, setForm] = useState({ name: '', description: '' });

  useEffect(() => {
    if (initialData) setForm({ name: initialData.name, description: initialData.description });
    else setForm({ name: '', description: '' });
  }, [initialData]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit(form);
    setForm({ name: '', description: '' });
  }

  return (
    <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: 8, marginBottom: '1.5rem' }}>
      <h2>{initialData ? 'Edit Item' : 'Add Item'}</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        style={{ display: 'block', width: '100%', marginBottom: 8, padding: 8 }}
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        style={{ display: 'block', width: '100%', marginBottom: 8, padding: 8 }}
      />
      <button onClick={handleSubmit}>{initialData ? 'Update' : 'Create'}</button>
      {initialData && <button onClick={onCancel} style={{ marginLeft: 8 }}>Cancel</button>}
    </div>
  );
}