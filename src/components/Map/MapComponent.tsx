import { useState, useEffect, useRef } from 'react';

import {
  APIProvider,
  Map,
  // AdvancedMarker,
  // Pin,
  // InfoWindow,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';

const containerStyle = {
  width: '1000px',
  height: '600px',
};

export default function MapComponent({
  origin,
  destination,
  shouldSearch,
  setShouldSearch,
}: {
  origin: string;
  destination: string;
  shouldSearch: boolean;
  setShouldSearch: (val: boolean) => void;
}) {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <div style={containerStyle}>
          <Map
            defaultZoom={12}
            defaultCenter={center}
            gestureHandling="greedy"
            disableDefaultUI={false}
            // mapId={}
            fullscreenControl={false}
          >
            <Directions
              origin={origin}
              destination={destination}
              shouldSearch={shouldSearch}
              setShouldSearch={setShouldSearch}
            />
          </Map>
        </div>
      </APIProvider>
    </div>
  );
}

function Directions({
  origin,
  destination,
  shouldSearch,
  setShouldSearch,
}: {
  origin: string;
  destination: string;
  shouldSearch: boolean;
  setShouldSearch: (val: boolean) => void;
}) {
  // Returns back an instance of the map (to give to directionRenderer)
  const map = useMap();

  // Load library for access to directions service and renderer
  const routesLibrary = useMapsLibrary('routes');
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);

  // Takes care of multiple routes and selection between them
  const [routeIndex, setRouteIndex] = useState(0);

  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(
    null
  );

  useEffect(() => {
    if (!shouldSearch || !routesLibrary || !map || !origin || !destination)
      return;

    // Clear state before starting a new route search
    setRoutes([]);
    setRouteIndex(0);

    // Clear previous directions if any
    if (directionsRendererRef.current) {
      directionsRendererRef.current.setMap(null);
      directionsRendererRef.current = null;
    }

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
      })
      .catch((err) => {
        console.error('Failed to fetch directions:', err);
      })
      .finally(() => {
        setShouldSearch(false);
      });
  }, [shouldSearch, origin, destination, routesLibrary, map, setShouldSearch]);

  console.log(routes);

  useEffect(() => {
    if (!directionsRendererRef.current) return;
    directionsRendererRef.current.setRouteIndex(routeIndex);
  }, [routeIndex]);

  if (!routes.length) return null;

  const selectedRoute = routes[routeIndex];
  const leg = selectedRoute?.legs[0];
  if (!leg) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        maxWidth: '300px',
      }}
    >
      <h2>{selectedRoute.summary}</h2>
      <p>
        {leg.start_address.split(',')[0]} to {leg.end_address.split(',')[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <h2>Other Routes:</h2>
      <ul>
        {routes.map((route, index) => {
          return (
            <li key={route.summary}>
              <button onClick={() => setRouteIndex(index)}>
                {route.summary}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
