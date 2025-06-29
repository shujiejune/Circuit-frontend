import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import DeliveryRoutingPage from './pages/DeliveryRoutingPage';
import ScheduleDelivery from './pages/ScheduleDeliveryPage';
import NavBar from './components/NavBar';
// Delete for production
import DevelopmentTestBtns from './components/Buttons/DevelopmentTestBtns';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="pb-10">
        <NavBar />
      </div>
      <div className="pt-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/deliveryrouting" element={<DeliveryRoutingPage />} />
          <Route path="/scheduledelivery" element={<ScheduleDelivery />} />
        </Routes>
      </div>
      <div>
        <DevelopmentTestBtns></DevelopmentTestBtns>
      </div>
    </>
  );
}

export default App;
