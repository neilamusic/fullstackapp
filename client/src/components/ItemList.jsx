import ItemCard from './ItemCard';

export default function ItemList({ items, onEdit, onDelete }) {
  if (!items.length) return <p>No items yet. Add one above!</p>;
  return (
    <div>
      {items.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}