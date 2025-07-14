import { Routes, Route } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoutes';

import './App.css';
import HomePage from './pages/HomePage';
import DeliveryRoutingPage from './pages/DeliveryRoutingPage';
import CreateOrderPage from './pages/CreateOrderPage';
import TrackOrdersPage from './pages/TrackOrdersPage';
import PaymentPage from './pages/PaymentPage';
import NavBar from './components/NavBar';

// Delete for production
import DevelopmentTestBtns from './components/Buttons/DevelopmentTestBtns';
import AccountPage from './pages/AccountPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountInformationPage from './pages/AccountInformationPage';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="w-screen bg-gray-50">
      <div className="pb-10">
        <NavBar />
      </div>
      <div className="pt-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          <Route
            path="/deliveryrouting"
            element={
              <ProtectedRoute>
                <DeliveryRoutingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/createorder"
            element={
              <ProtectedRoute>
                <CreateOrderPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trackorder"
            element={
              <ProtectedRoute>
                <TrackOrdersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/accountsummary"
            element={
              <ProtectedRoute>
                <AccountInformationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trackorders"
            element={
              <ProtectedRoute>
                <TrackOrdersPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <div>
        <DevelopmentTestBtns></DevelopmentTestBtns>
      </div>
    </div>
  );
}

export default App;
