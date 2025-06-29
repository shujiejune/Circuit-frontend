import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function DevelopmentTestBtns() {
  const navigate = useNavigate();
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
          navigate('/scheduledelivery');
        }}
      >
        Schedule Delivery
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          navigate('/deliveryrouting');
        }}
      >
        Delivery Routing
      </Button>
    </div>
  );
}
