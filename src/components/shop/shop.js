import { getItems } from '../../data/data';
import './shop.css';
import Sidebar from './sidebar';
import { useEffect, useState } from 'react';
import Items from './items';
const Shop = () => {
  const [items, setItems] = useState(getItems());
  return (
    <div className="shop">
      <Sidebar items={items} />
      <Items items={items} />
    </div>
  );
};

export default Shop;
