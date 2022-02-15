import './item.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Item = (props) => {
  const navigate = useNavigate();
  const { item, order } = props;
  const [qty, setQty] = useState(() => {
    const temp = order.getOrder().find((i) => i.id === item.id);
    if (temp) {
      return temp.qty;
    }
    return 0;
  });
  const [addCartBtnText, setAddCartBtnText] = useState('Add to Cart');
  const [btnState, setBtnState] = useState(false);
  const onQtyChange = (type) => {
    switch (type) {
      case 'add':
        setQty(qty + 1);
        break;
      case 'minus':
        setQty((prevState) => {
          if (prevState - 1 >= 0) {
            return prevState - 1;
          }
          return prevState;
        });
        break;
      default:
        return;
    }
  };

  const onAddtoCart = (e) => {
    if (order.addToCart(item.id, qty)) {
      setBtnState(true);
      e.target.textContent = 'Added!';
    }
  };

  const onBuyNow = (e) => {
    if (qty > 0) {
      if (order.addToCart(item.id, qty)) {
        navigate('/cart');
      }
    }
  };
  useEffect(() => {
    if (qty && order.containsItem(item.id)) {
      setAddCartBtnText('Update Qty');
      setBtnState(false);
    }
  }, [qty]);

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
          <input
            type="number"
            min="0"
            step="1"
            value={qty}
            onChange={(e) => {
              setBtnState(!btnState);
              if (e.target.value) {
                setQty(parseInt(e.target.value));
              } else {
                setQty(0);
              }
              e.target.value = qty;
            }}
          />
          <button
            className="qty-btn"
            onClick={() => {
              onQtyChange('add');
            }}
          >
            +
          </button>
        </div>
        <button
          disabled={btnState}
          className="add-to-cart"
          onClick={onAddtoCart}
        >
          {addCartBtnText}
        </button>
        <button onClick={onBuyNow} className="buy-now">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Item;
