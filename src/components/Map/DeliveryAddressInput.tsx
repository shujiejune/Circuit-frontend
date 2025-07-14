// import { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function DeliveryAddressInput({
  origin,
  destination,
  setOrigin,
  setDestination,
  onSearch,
}: {
  origin: string;
  destination: string;
  setOrigin: (val: string) => void;
  setDestination: (val: string) => void;
  onSearch: () => void;
}) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Origin"
        variant="outlined"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Destination"
        variant="outlined"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <Button variant="outlined" onClick={onSearch}>
        Search
      </Button>
    </>
  );
}
