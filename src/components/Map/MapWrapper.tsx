import { useState } from 'react';

import DeliveryAddressInput from './DeliveryAddressInput';
import MapComponent from './MapComponent';
import BackToHomeBtn from '../Buttons/BackToHomeBtn';

export default function MapWrapper() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [shouldSearch, setShouldSearch] = useState(false);

  const handleSearch = () => {
    setShouldSearch(true); // trigger the search
  };

  return (
    <div>
      <BackToHomeBtn />
      <DeliveryAddressInput
        origin={origin}
        destination={destination}
        setOrigin={setOrigin}
        setDestination={setDestination}
        onSearch={handleSearch}
      />
      <MapComponent
        origin={origin}
        destination={destination}
        shouldSearch={shouldSearch}
        setShouldSearch={setShouldSearch}
      />
    </div>
  );
}
