import { Box, Typography, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

export default function AccountPage() {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography>My Account</Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          navigate('/accountsummary');
        }}
      >
        Account Information
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          navigate('/orders');
        }}
      >
        Track Orders
      </Button>
    </Box>
  );
}
