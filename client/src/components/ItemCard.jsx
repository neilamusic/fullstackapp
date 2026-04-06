export default function ItemCard({ item, onEdit, onDelete }) {
    return (
      <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: '1rem', marginBottom: 8 }}>
        <h3 style={{ margin: '0 0 4px' }}>{item.name}</h3>
        <p style={{ margin: '0 0 12px', color: '#555' }}>{item.description}</p>
        <small style={{ color: '#999' }}>{new Date(item.created_at).toLocaleDateString()}</small>
        <div style={{ marginTop: 8 }}>
          <button onClick={() => onEdit(item)}>Edit</button>
          <button onClick={() => onDelete(item.id)} style={{ marginLeft: 8, color: 'red' }}>Delete</button>
        </div>
      </div>
    );
  }