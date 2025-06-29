import { Typography, Pagination } from '@mui/material';

import { useEffect, useState } from 'react';

import OrderSearchBar from '../components/Schedule/OrderSearchBar';
import FilterProducts from '../components/Schedule/FilterProducts';
import AvailableOrders from '../components/Schedule/AvailableOrders';
import CartSummary from '../components/Cart/CartSummary';

// Mock Data
const mockData = [
  {
    product_id: 1,
    name: 'Electric Pallet Jack',
    location: {
      warehouse: 'Bay Area Logistics Hub',
      address: '1234 Industrial Way, Fremont, CA 94538',
    },
    description: 'Heavy-duty pallet mover for large loads.',
    price: 299.99,
    stock: 12,
  },
  {
    product_id: 2,
    name: 'Autonomous Delivery Drone',
    location: {
      warehouse: 'LA Drone Dispatch Center',
      address: '4201 Aviation Blvd, Los Angeles, CA 90045',
    },
    description: 'Capable of 10km range with live GPS tracking.',
    price: 1249.0,
    stock: 5,
  },
  {
    product_id: 3,
    name: 'Cold Storage Box',
    location: {
      warehouse: 'Houston Cold Chain Facility',
      address: '8750 Westpark Dr, Houston, TX 77063',
    },
    description: 'Maintains -18°C, perfect for perishables.',
    price: 75.5,
    stock: 20,
  },
  {
    product_id: 4,
    name: 'Urban Delivery Robot',
    location: {
      warehouse: 'Brooklyn Fulfillment Depot',
      address: '33 Bushwick Ave, Brooklyn, NY 11206',
    },
    description: 'Sidewalk-capable autonomous delivery unit.',
    price: 899.99,
    stock: 8,
  },
  {
    product_id: 5,
    name: 'Solar Charging Kit',
    location: {
      warehouse: 'Phoenix Tech Storage',
      address: '1601 E Bell Rd, Phoenix, AZ 85022',
    },
    description: 'Charges robots with solar energy panels.',
    price: 159.95,
    stock: 14,
  },
  {
    product_id: 6,
    name: 'Heavy-Duty Packing Crate',
    location: {
      warehouse: 'Chicago Freight Warehouse',
      address: '301 W 55th St, Chicago, IL 60609',
    },
    description: 'Shock-resistant and stackable crates.',
    price: 49.99,
    stock: 32,
  },
  {
    product_id: 7,
    name: 'RFID Tag Scanner',
    location: {
      warehouse: 'Seattle Tech Distribution',
      address: '1122 E Pike St, Seattle, WA 98122',
    },
    description: 'Handheld scanner for inventory tracking.',
    price: 215.75,
    stock: 16,
  },
  {
    product_id: 8,
    name: 'Warehouse Lighting Kit',
    location: {
      warehouse: 'Denver Central Storage',
      address: '875 Kalamath St, Denver, CO 80204',
    },
    description: 'LED lighting setup for dark warehouse zones.',
    price: 139.0,
    stock: 9,
  },
  {
    product_id: 9,
    name: 'Smart Temperature Sensor',
    location: {
      warehouse: 'Miami Logistics Node',
      address: '1455 NW 107th Ave, Miami, FL 33172',
    },
    description: 'IoT-based sensor for real-time climate control.',
    price: 62.5,
    stock: 22,
  },
  {
    product_id: 10,
    name: 'Delivery Bin Locking Mechanism',
    location: {
      warehouse: 'Atlanta Distribution Yard',
      address: '2211 Roswell Rd, Marietta, GA 30062',
    },
    description: 'Secure lock system for mobile delivery bins.',
    price: 27.45,
    stock: 40,
  },
  {
    product_id: 11,
    name: 'Automated Shelf Mover',
    location: {
      warehouse: 'Boston Storage Innovations',
      address: '89 Seaport Blvd, Boston, MA 02210',
    },
    description: 'Mobile unit for shelf realignment in warehouses.',
    price: 472.5,
    stock: 6,
  },
  {
    product_id: 12,
    name: 'Compact Barcode Printer',
    location: {
      warehouse: 'Dallas Logistics Hub',
      address: '1999 Logistics Dr, Dallas, TX 75201',
    },
    description: 'Prints thermal barcodes on demand.',
    price: 119.99,
    stock: 25,
  },
  {
    product_id: 13,
    name: 'Remote Surveillance Pod',
    location: {
      warehouse: 'Las Vegas Surveillance Depot',
      address: '777 Fremont St, Las Vegas, NV 89101',
    },
    description: '360° camera pod for monitoring logistics centers.',
    price: 599.95,
    stock: 10,
  },
  {
    product_id: 14,
    name: 'Smart Forklift Adapter',
    location: {
      warehouse: 'St. Louis Equipment Warehouse',
      address: '422 Riverport Dr, Maryland Heights, MO 63043',
    },
    description: 'Upgrade any forklift to smart control.',
    price: 349.49,
    stock: 7,
  },
  {
    product_id: 15,
    name: 'Eco Pallet Wrap',
    location: {
      warehouse: 'Portland Eco Supply Chain',
      address: '150 Green Way, Portland, OR 97204',
    },
    description: 'Biodegradable stretch wrap for pallets.',
    price: 33.99,
    stock: 100,
  },
  {
    product_id: 16,
    name: 'RF Safety Vest',
    location: {
      warehouse: 'Philadelphia Worker Gear Depot',
      address: '2333 Liberty Ave, Philadelphia, PA 19103',
    },
    description: 'Reflective vest with RFID tagging system.',
    price: 42.5,
    stock: 35,
  },
  {
    product_id: 17,
    name: 'AI Traffic Coordinator',
    location: {
      warehouse: 'San Jose AI Command Center',
      address: '55 Silicon Dr, San Jose, CA 95110',
    },
    description: 'Coordinates robot traffic in busy warehouses.',
    price: 899.0,
    stock: 3,
  },
  {
    product_id: 18,
    name: 'Temperature Logging Tag',
    location: {
      warehouse: 'Austin Cold Storage',
      address: '909 Frost Ln, Austin, TX 78701',
    },
    description: 'Logs shipment temperature data over time.',
    price: 18.75,
    stock: 50,
  },
  {
    product_id: 19,
    name: 'Warehouse Floor Scanner',
    location: {
      warehouse: 'Salt Lake Smart Logistics',
      address: '1212 Depot Rd, Salt Lake City, UT 84101',
    },
    description: 'Scans floors for maintenance or inventory.',
    price: 289.0,
    stock: 4,
  },
  {
    product_id: 20,
    name: 'Battery Backup Module',
    location: {
      warehouse: 'Tampa Energy Solutions',
      address: '300 Clearwater Blvd, Tampa, FL 33602',
    },
    description: 'Power backup for robots and scanners.',
    price: 185.99,
    stock: 13,
  },
];

const ITEMS_PER_PAGE = 5;

export default function ScheduleDeliveryPage() {
  const [page, setPage] = useState(1);

  const [isLoaindg, setIsLoading] = useState(true);

  useEffect(() => {}, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const [cartItems, setCartItems] = useState([]);

  const paginatedData = mockData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="w-screen">
      <div className="flex flex-col">
        <div>
          <Typography>Schedule an Order</Typography>
        </div>
        <div className="mx-auto my-10">
          <OrderSearchBar></OrderSearchBar>
        </div>
        <div className="flex justify-between">
          <div className="w-2/10">
            <FilterProducts></FilterProducts>
          </div>
          <div className="w-5/10">
            <AvailableOrders orders={paginatedData} />
          </div>
          <div className="w-2/10">
            <CartSummary></CartSummary>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Pagination
            count={Math.ceil(mockData.length / ITEMS_PER_PAGE)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}
