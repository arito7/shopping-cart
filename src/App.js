import Header from './components/header/header';
import './App.css';

import { Outlet } from 'react-router';
import useOrder from './data/order';

function App() {
  const order = useOrder();
  return (
    <div className="App">
      <Header orderLength={order.getOrder().length} />
      <Outlet context={[order]} />
    </div>
  );
}

export default App;
