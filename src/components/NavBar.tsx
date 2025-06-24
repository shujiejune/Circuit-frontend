import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h3>Dispatch & Delivery System</h3>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate('/');
          }}
        >
          Contact Us
        </Button>
        <Button
          onClick={() => {
            navigate('/');
          }}
        >
          Cart
        </Button>
        <Button
          onClick={() => {
            navigate('/');
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
