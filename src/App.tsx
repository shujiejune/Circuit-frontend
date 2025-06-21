import './App.css';
import Map from './components/Map/Map';
import DeliveryAddressInput from './components/Map/DeliveryAddressInput';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>TESTING</h1>
      <div>
        <DeliveryAddressInput />
        <Map />
      </div>
    </>
  );
}

export default App;
