import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '500px',
};

// Start Example: San Francisco
const center = {
  lat: 37.7749,
  lng: -122.4194,
};

export default function Map() {
  const key = import.meta.env.GOOGLE_MAPS_API_KEY;
  console.log(key);
  return (
    <div>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
}
