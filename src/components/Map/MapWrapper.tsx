import { useState, useEffect } from 'react';

import MapComponent from './MapComponent';
import { Box, Typography } from '@mui/material';

export default function MapWrapper() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [routes, setRoutes] = useState<any>([]);

  useEffect(() => {
    const stored = localStorage.getItem('routeOptions');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setRoutes(parsed);
        if (parsed.length > 0) {
          setOrigin(parsed[0].pickup_location);
          setDestination(parsed[0].delivery_location);
        }
      } catch (e) {
        console.error('Failed to parse routeOptions:', e);
      }
    }
  }, []);

  return (
    <Box className="flex flex-col items-center justify-center p-4">
      <Typography variant="h3">Routing</Typography>
      <MapComponent origin={origin} destination={destination} routes={routes} />
    </Box>
  );
}
