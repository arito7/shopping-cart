import './item.css';
import { setQty, getItem } from '../../data/data';
import { useState, useEffect } from 'react';
const Item = (props) => {
  const [item, setItem] = useState(props.item);

  const onQtyChange = (type) => {
    switch (type) {
      case 'add':
        setItem({ ...item, qty: item.qty + 1 });
        break;
      case 'minus':
        setItem((prevState) => {
          if (item.qty - 1 >= 0) {
            return { ...item, qty: item.qty - 1 };
          }
          return prevState;
        });
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    setQty(item.id, item.qty);
  }, [item]);

  return (
    <div className="item">
      <div className="item-img">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="item-detail">
        <h2>{item.name}</h2>
        <p className="price">Price: ${item.price}</p>
        <p>{item.description}</p>
      </div>
      <div className="purchase">
        <div className="quantity">
          <button
            className="qty-btn"
            onClick={() => {
              onQtyChange('minus');
            }}
          >
            -
          </button>
          <p>{item.qty}</p>
          <button
            className="qty-btn"
            onClick={() => {
              onQtyChange('add');
            }}
          >
            +
          </button>
        </div>
        <button className="add-to-cart">Add to Cart</button>
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default Item;
