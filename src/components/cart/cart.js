import { getItems } from '../../data/data';
import { getOrder, getOrderTotal } from '../../data/order';
import './cart.css';
import { useNavigate } from 'react-router';

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-cart">
      <div className="head">
        <h2>Your cart is empty</h2>
      </div>
      <div className="body">
        <p>Go shop!</p>
        <button
          onClick={() => {
            navigate('/shop');
          }}
        >
          Take me to the store
        </button>
      </div>
    </div>
  );
};

const OrderSummary = (props) => {
  const { order, items } = props;
  return (
    <div className="order-summary">
      <table>
        <caption>
          <h2>Order Summary</h2>
        </caption>
        <colgroup>
          <col span="1" className="name-col" />
          <col span="3" className="num-cols" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {order.map((i) => {
            const item = items.find((item) => item.id === i.id);
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{i.qty}</td>
                <td>${item.price}</td>
                <td>${i.qty * item.price}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Order Total</td>
            <td>${getOrderTotal(items)}</td>
          </tr>
        </tfoot>
      </table>
      <button className="order-btn">Place Order</button>
    </div>
  );
};

const Cart = () => {
  const items = getItems();
  const order = getOrder();
  return (
    <div className="cart">
      {order.length ? (
        <OrderSummary items={items} order={order} />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
