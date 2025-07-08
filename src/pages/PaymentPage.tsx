import { Box, Button, Typography } from '@mui/material';

import PaymentSummary from '../components/Payment/PaymentSummary';
import PaymentOptions from '../components/Payment/PaymentOptions';

export default function PaymentPage() {
  const handlePayment = () => {
    // clear local storage
    // call api
  };

  return (
    <Box className="flex flex-col items-center justify-center">
      <div>
        <Typography variant="h3">Checkout</Typography>
      </div>
      <div className="flex">
        <div>
          <PaymentOptions />
        </div>
        <div>
          <PaymentSummary />
          <Button onClick={handlePayment}>Pay</Button>
        </div>
      </div>
    </Box>
  );
}
