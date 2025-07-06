import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function ContinueToRoutingBtn() {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      onClick={() => {
        navigate('/createorder');
      }}
    >
      Create an Order
    </Button>
  );
}
