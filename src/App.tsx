import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import DeliveryRoutingPage from './pages/DeliveryRoutingPage';
import ScheduleDelivery from './pages/ScheduleDeliveryPage';
import NavBar from './components/NavBar';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deliveryrouting" element={<DeliveryRoutingPage />} />
        <Route path="/scheduledelivery" element={<ScheduleDelivery />} />
      </Routes>
    </>
  );
}

export default App;
