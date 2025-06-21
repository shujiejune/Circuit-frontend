import React from 'react';
import { TextField } from '@mui/material';

export default function DeliveryAddressInput() {
  return (
    <>
      <TextField id="outlined-basic" label="Start" variant="outlined" />
      <TextField id="outlined-basic" label="Destination" variant="outlined" />
    </>
  );
}
