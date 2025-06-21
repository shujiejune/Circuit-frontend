import './App.css';
import MapComponent from './components/Map/MapComponent';
import DeliveryAddressInput from './components/Map/DeliveryAddressInput';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>TESTING</h1>
      <div>
        <DeliveryAddressInput />
        <MapComponent />
      </div>
    </>
  );
}

export default App;
