import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="flex ">
      <div>
        <Typography>Dispatch & Delivery System</Typography>
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
