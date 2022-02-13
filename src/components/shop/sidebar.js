import './sidebar.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Sidebar = (props) => {
  const [items, setItems] = useState(props.items);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder=" Search"
        value={searchParams.get('filter') || ''}
        onChange={(e) => {
          let filter = e.target.value;
          if (filter) {
            setSearchParams({ ...searchParams, filter });
          } else {
            setSearchParams({ ...searchParams });
          }
        }}
      />
      <div className="categories">
        <ul>
          <li
            onClick={() => {
              setSearchParams(() => {
                delete searchParams.category;
                return searchParams;
              });
            }}
          >
            Clear Filters
          </li>
          {items
            .reduce((base, item) => {
              if (!base.includes(item.category)) {
                base.push(item.category);
              }
              return base;
            }, [])
            .map((category) => {
              return (
                <li
                  key={category}
                  onClick={() => {
                    setSearchParams({ ...searchParams, category });
                  }}
                >
                  {category}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
