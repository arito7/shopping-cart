import { NavLink } from 'react-router-dom';
import './header.css';
import { MdShoppingCart } from 'react-icons/md';
const Header = () => {
  return (
    <header className="header">
      <h1>Pixel Store</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    </header>
  );
};

export default Header;
