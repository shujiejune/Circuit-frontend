import { useState, useEffect } from 'react';

import { Box } from '@mui/material';

export default function PaymentPage() {
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Call the order api with the order id and render
  }, []);
  return <Box>This is the summary</Box>;
}
