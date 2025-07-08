import { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  InputAdornment,
  Grid,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LockIcon from '@mui/icons-material/Lock';

type Errors = {
  name?: string;
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
};

export default function PaymentPage() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const validateFields = () => {
    const newErrors: Errors = {};

    if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = 'Only letters and spaces allowed';
    }

    if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ''))) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      newErrors.expiry = 'Use MM/YY format';
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      newErrors.cvv = 'CVV must be 3 or 4 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateFields()) return;

    const payload = {
      name,
      cardNumber,
      expiry,
      cvv,
    };

    console.log('Sending JSON:', JSON.stringify(payload));
    // TODO: Send to backend
  };

  return (
    <Box maxWidth={600} mx="auto" mt={4} p={2} borderRadius={2} boxShadow={3}>
      <Typography variant="h5" mb={3}>
        Payment Details
      </Typography>

      <TextField
        fullWidth
        label="Name on Card"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
        margin="normal"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      <TextField
        fullWidth
        label="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        error={!!errors.cardNumber}
        helperText={errors.cardNumber}
        margin="normal"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <CreditCardIcon />
              </InputAdornment>
            ),
          },
        }}
      />
      <Box className="flex gap-4">
        <TextField
          fullWidth
          label="Expiry Date (MM/YY)"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          error={!!errors.expiry}
          helperText={errors.expiry}
          margin="normal"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayIcon />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          fullWidth
          label="CVV"
          type="password"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          error={!!errors.cvv}
          helperText={errors.cvv}
          margin="normal"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 3 }}
      >
        Submit Payment
      </Button>
    </Box>
  );
}
