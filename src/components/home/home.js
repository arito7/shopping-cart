import MainImg from './box.png';
import './home.css';
import { useNavigate } from 'react-router';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Welcome to the pixel store</h1>
      <h2>we sell pixelated items</h2>
      <img
        src={MainImg}
        alt="Man peeking"
        onClick={() => {
          navigate('/shop');
        }}
      />
      <p>open the box and see what we have to offer!</p>
    </div>
  );
};

export default Home;
