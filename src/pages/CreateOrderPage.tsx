import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  TextField,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import dayjs from 'dayjs';

const mockData = [
  {
    id: 'a3c1e4f2-6b9a-4a2d-a74f-1f62f0e8c411',
    pickup_location: '123 Main Street, San Jose, CA',
    delivery_location: '456 Market Street, San Francisco, CA',
    price: 18.75,
    estimated_duration: 2700000000000,
  },
  {
    id: 'b4f7c290-f5a9-4b6a-9db3-c1e2af3f9c12',
    pickup_location: '123 Main Street, San Jose, CA',
    delivery_location: '456 Market Street, San Francisco, CA',
    price: 21.0,
    estimated_duration: 3000000000000,
  },
  {
    id: 'b4f7c290-f5a9-4b6a-9db3-c109341934901',
    pickup_location: '123 Main Street, San Jose, CA',
    delivery_location: '456 Market Street, San Francisco, CA',
    price: 35,
    estimated_duration: 3990000000000,
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#3e5f1b',
    },
  },
});

export default function CreateOrderPage() {
  const navigate = useNavigate();

  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');
  const [itemWeight, setItemWeight] = useState('');
  const [pickupDate, setPickupDate] = useState(dayjs());
  const [pickupTime, setPickupTime] = useState(dayjs().hour(8).minute(0)); // default to 08:00

  const [errors, setErrors] = useState({
    pickupAddress: false,
    dropoffAddress: false,
    itemWeight: false,
    pickupTime: false,
  });

  const validateFields = () => {
    const newErrors = {
      pickupAddress: !/^[a-zA-Z0-9\s,'-]{5,}$/.test(pickupAddress),
      dropoffAddress: !/^[a-zA-Z0-9\s,'-]{5,}$/.test(dropoffAddress),
      itemWeight: !/^\d+(\.\d{1,2})?$/.test(itemWeight),
      pickupTime:
        !(pickupTime && pickupTime.isValid()) ||
        pickupTime.hour() < 8 ||
        pickupTime.hour() >= 17,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    const combinedDateTime = pickupDate
      .hour(pickupTime.hour())
      .minute(pickupTime.minute());

    const payload = {
      pickupAddress,
      dropoffAddress,
      itemWeight,
      pickupTime: combinedDateTime.toISOString(),
    };

    console.log('Sending JSON:', JSON.stringify(payload));

    // API Call to get a quote calling '/orders/quote'
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const result = await response.json();
      console.log('Order created successfully:', result);
    } catch (error) {
      console.error('Failed to create order:', error);

      // Store result routes in localStorage to be used in map rendering
      if (localStorage.getItem('routeOptions')) {
        localStorage.removeItem('routeOptions');
      }
      localStorage.setItem('routeOptions', JSON.stringify(mockData));
    } finally {
      console.log('Request completed.');
      navigate('/deliveryrouting');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col items-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="flex flex-col items-center justify-center gap-4 p-4 w-full max-w-lg">
            <Typography variant="h4" sx={{ color: '#3e5f1b' }}>
              Create an Order
            </Typography>

            <TextField
              label="Pickup Address"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              error={errors.pickupAddress}
              fullWidth
              color="primary"
            />

            <TextField
              label="Dropoff Address"
              value={dropoffAddress}
              onChange={(e) => setDropoffAddress(e.target.value)}
              error={errors.dropoffAddress}
              fullWidth
              color="primary"
            />

            <TextField
              label="Item Weight"
              value={itemWeight}
              onChange={(e) => setItemWeight(e.target.value)}
              error={errors.itemWeight}
              fullWidth
              color="primary"
            />

            <DatePicker
              label="Pickup Date"
              value={pickupDate}
              onChange={(newDate) => setPickupDate(newDate)}
              renderInput={(params) => (
                <TextField {...params} fullWidth color="primary" />
              )}
              slotProps={{
                textField: { fullWidth: true },
              }}
            />

            <TimeField
              label="Pickup Time"
              value={pickupTime}
              onChange={(newTime) => setPickupTime(newTime)}
              format="HH:mm"
              fullWidth
              color="primary"
            />

            <Button variant="contained" onClick={handleSubmit}>
              Submit Order
            </Button>
          </div>
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}
