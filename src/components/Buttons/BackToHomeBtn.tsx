import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function BackToHomeBtn() {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      onClick={() => {
        navigate('/');
      }}
    >
      Back To Home
    </Button>
  );
}
