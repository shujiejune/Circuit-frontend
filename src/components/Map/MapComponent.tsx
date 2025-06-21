import { useState, useEffect } from 'react';

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';

const containerStyle = {
  width: '500px',
  height: '500px',
};

export default function MapComponent() {
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
            center={center}
            gestureHandling="auto"
            disableDefaultUI={false}
            // mapId={}
            // fullscreenControl={false}
          ></Map>
        </div>
      </APIProvider>
    </div>
  );
}

function Directions(){
  
}
