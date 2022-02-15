import { getItems } from '../../data/data';
import './shop.css';
import Sidebar from './sidebar';
import Items from './items';
import { useOutletContext } from 'react-router';
const Shop = () => {
  const [order] = useOutletContext();
  const items = getItems();
  return (
    <div className="shop">
      <Sidebar items={items} />
      <Items items={items} order={order} />
    </div>
  );
};

export default Shop;
