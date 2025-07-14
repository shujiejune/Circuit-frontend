import { useState, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  APIProvider,
  Map,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';

const containerStyle = {
  width: '1000px',
  height: '600px',
};

import {
  Box,
  Card,
  CardContent,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Divider,
} from '@mui/material';

export default function MapComponent({
  origin,
  destination,
  routes,
}: {
  origin: string;
  destination: string;
  routes: any[];
}) {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div style={containerStyle} className="flex flex-row">
          <Map
            defaultZoom={12}
            defaultCenter={center}
            gestureHandling="greedy"
            disableDefaultUI={false}
            // mapId={}
            streetViewControl={false}
            mapTypeControl={false}
            fullscreenControl={false}
          ></Map>
          <Directions
            origin={origin}
            destination={destination}
            backendRoutes={routes}
          />
        </div>
      </APIProvider>
    </div>
  );
}

function Directions({
  origin,
  destination,
  backendRoutes,
}: {
  origin: string;
  destination: string;
  backendRoutes?: any[];
}) {
  // Returns back an instance of the map (to give to directionRenderer)
  const map = useMap();
  const navigate = useNavigate();

  // Load library for access to directions service and renderer
  const routesLibrary = useMapsLibrary('routes');

  // Holds the routes fetched from the DirectionsService
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  // Takes care of multiple routes and selection between them
  const [routeIndex, setRouteIndex] = useState(0);
  // Loads components only when ready
  const [isReady, setIsReady] = useState(false);

  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(
    null
  );

  useEffect(() => {
    if (!routesLibrary || !map || !origin || !destination) return;
    console.log('origin:', origin);
    console.log('destination:', destination);
    console.log('routesLibrary:', routesLibrary);

    // Clear state before starting a new route search
    setRoutes([]);
    setRouteIndex(0);
    setIsReady(false);

    // Clear previous directions if any
    if (directionsRendererRef.current) {
      directionsRendererRef.current.setMap(null);
      directionsRendererRef.current = null;
    }

    const timer = setTimeout(() => {
      const directionsService = new routesLibrary.DirectionsService();
      const directionsRenderer = new routesLibrary.DirectionsRenderer({ map });
      directionsRendererRef.current = directionsRenderer;

      directionsService
        .route({
          origin,
          destination,
          travelMode: google.maps.TravelMode.DRIVING,
          provideRouteAlternatives: true,
        })
        .then((response) => {
          directionsRenderer.setDirections(response);
          setRoutes(response.routes);
          setIsReady(true);
        })
        .catch((err) => {
          console.error('Failed to fetch directions:', err);
        })
        .finally(() => {
          // finally
        });
    }, 200);
    return () => clearTimeout(timer);
  }, [origin, destination, routesLibrary, map]);

  console.log(routes);

  useEffect(() => {
    if (!directionsRendererRef.current) return;
    directionsRendererRef.current.setRouteIndex(routeIndex);
  }, [routeIndex]);

  const HandleChooseRoute = async () => {
    try {
      // CALL API to create order with selected route
      localStorage.setItem('selectedRoute', JSON.stringify(routes[routeIndex]));
      alert('Route confirmed!');
      navigate('/payment');
    } catch (e) {
      console.log('Error saving route:', e);
    } finally {
      // final
    }
  };

  if (!isReady || !routes.length)
    return (
      <Box sx={{ padding: 2 }}>
        <Typography>Loading directions...</Typography>
      </Box>
    );

  const selectedRoute = routes[routeIndex];
  const leg = selectedRoute?.legs[0];
  if (!leg) return null;

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'white',
        borderTop: '1px solid #ddd',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
        padding: 2,
        zIndex: 1000,
      }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🚚 Selected Route Summary
          </Typography>
          <div className="flex flex-col items-start justify-center">
            <Typography>
              <strong>Route:</strong> {selectedRoute.summary}
            </Typography>
            <Typography>
              {/* <strong>From:</strong> {leg.start_address} */}
              <strong>From:</strong> {leg.start_address.split(',')[0]}
            </Typography>
            <Typography>
              {/* <strong>To:</strong> {leg.end_address} */}
              <strong>To:</strong> {leg.end_address.split(',')[0]}
            </Typography>
            <Typography>
              <strong>Distance:</strong> {leg.distance?.text}
            </Typography>
            <Typography>
              <strong>Price:</strong> {backendRoutes[routeIndex]?.price} $
            </Typography>
            <Typography>
              <strong>Duration:</strong>{' '}
              {Math.round(
                backendRoutes[routeIndex]?.estimated_duration / 60000000000
              )}{' '}
              minutes
            </Typography>
          </div>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle1" gutterBottom>
            Choose a different route:
          </Typography>

          <RadioGroup
            value={routeIndex}
            onChange={(e) => setRouteIndex(Number(e.target.value))}
          >
            {routes.map((route, index) => (
              <FormControlLabel
                key={route.summary}
                value={index}
                control={<Radio />}
                label={route.summary}
              />
            ))}
          </RadioGroup>

          <Divider sx={{ my: 2 }} />

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={HandleChooseRoute}
            >
              Confirm Route
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
