import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import MapPage from './pages/RoutingPage';
import ScheduleDelivery from './pages/ScheduleDelivery';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/scheduledelivery" element={<ScheduleDelivery />} />
      </Routes>
    </>
  );
}

export default App;
