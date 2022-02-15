import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = (props) => {
  const { order, orderLength } = props;
  useEffect(() => {
    console.log('order changed: ', order);
  }, [order]);
  return (
    <header className="header">
      <h1>Pixel Store</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">
          Cart
          {orderLength ? (
            <span className="order-count">{orderLength}</span>
          ) : null}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
