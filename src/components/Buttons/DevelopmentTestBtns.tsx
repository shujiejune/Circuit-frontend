import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
// import { loginUser } from '../../api/authapi'; // adjust path as needed

export default function DevelopmentTestBtns() {
  const navigate = useNavigate();

  const { setIsLoggedIn } = useAuth();

  const handleLogin = async () => {
    // Assume login API returns a JWT token
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiZW1haWwiOiJ0ZXN0QGVtYWlsLmNvbSIsImV4cCI6MjAwMDAwMDAwMDB9.sflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    if (token) {
      localStorage.setItem('token', token);
      setIsLoggedIn(true); //  triggers the rerender for ProtectedRoute
      navigate('/');
    }
  };

  return (
    <div className="flex">
      <Button
        variant="contained"
        onClick={() => {
          navigate('/');
        }}
      >
        Back To Home
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          navigate('/createorder');
        }}
      >
        Create order
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          navigate('/deliveryrouting');
        }}
      >
        Delivery Routing
      </Button>

      <Button
        variant="contained"
        onClick={() => {
          navigate('/payment');
        }}
      >
        Payment
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          navigate('/trackorder');
        }}
      >
        TrackOrder
      </Button>
      <Button variant="contained" onClick={handleLogin}>
        Simulate Login
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          localStorage.removeItem('token'); // Simulate logout by removing the token
          setIsLoggedIn(false);
          navigate('/'); 
        }}
      >
        Simulate Logout
      </Button>
    </div>
  );
}
