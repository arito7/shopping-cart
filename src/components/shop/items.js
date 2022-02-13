import Item from './item';
import { useSearchParams } from 'react-router-dom';
import './items.css';

const Items = (params) => {
  const { items } = params;
  const [searchParams] = useSearchParams();
  return (
    <div className="items">
      <p>
        Showing: <span>{searchParams.get('category') || 'All'}</span>{' '}
        {searchParams.get('category') ? 'category' : 'categories'}
      </p>
      {items
        .filter((item) => {
          let filter = searchParams.get('filter');
          if (filter) {
            let name = item.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          }
          return true;
        })
        .filter((item) => {
          let category = searchParams.get('category');
          if (category) {
            return item.category === category;
          }
          return true;
        })
        .map((item) => (
          <Item key={item.id} item={item} />
        ))}
    </div>
  );
};

export default Items;
