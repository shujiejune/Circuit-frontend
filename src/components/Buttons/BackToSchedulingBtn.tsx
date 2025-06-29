import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function BackToSchedulingBtn() {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      onClick={() => {
        navigate('/scheduledelivery');
      }}
    >
      Back to Scheduling
    </Button>
  );
}
