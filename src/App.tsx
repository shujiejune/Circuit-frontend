import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import DeliveryRoutingPage from './pages/DeliveryRoutingPage';
import CreateOrderPage from './pages/CreateOrderPage';
import PaymentPage from './pages/PaymentPage';
import NavBar from './components/NavBar';

// Delete for production
import DevelopmentTestBtns from './components/Buttons/DevelopmentTestBtns';
import ToCreateOrderBtn from './components/Buttons/ToCreateOrderBtn';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="w-screen">
      <div className="pb-10">
        <NavBar />
      </div>
      <div className="pt-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/deliveryrouting" element={<DeliveryRoutingPage />} />
          <Route path="/createorder" element={<CreateOrderPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
      <div>
        <DevelopmentTestBtns></DevelopmentTestBtns>
      </div>
    </div>
  );
}

export default App;
