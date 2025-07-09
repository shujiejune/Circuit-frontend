import { Box, Typography } from '@mui/material';

import axios from 'axios';

import { useState, useEffect } from 'react';

const mockOrders = [
  {
    id: 'order-001',
    user_id: 'user-123',
    machine_id: 'drone-001',
    pickup_address_id: 'addr-001',
    dropoff_address_id: 'addr-002',
    pickup_address: {
      id: 'addr-001',
      user_id: 'user-123',
      label: 'Home',
      street_address: '123 Main St, Cityville',
      is_default: true,
      created_at: '2025-07-01T10:00:00Z',
      updated_at: '2025-07-01T10:00:00Z',
    },
    dropoff_address: {
      id: 'addr-002',
      user_id: 'user-123',
      label: 'Work',
      street_address: '456 Office Ave, Cityville',
      is_default: false,
      created_at: '2025-07-01T10:00:00Z',
      updated_at: '2025-07-01T10:00:00Z',
    },
    status: 'PENDING_PAYMENT',
    item_description: 'Laptop',
    item_weight_kg: 2.5,
    cost: 25.0,
    feedback_rating: null,
    feedback_comment: null,
    created_at: '2025-07-01T10:00:00Z',
    updated_at: '2025-07-01T10:00:00Z',
  },
  {
    id: 'order-002',
    user_id: 'user-123',
    machine_id: 'robot-002',
    pickup_address_id: 'addr-003',
    dropoff_address_id: 'addr-004',
    pickup_address: {
      id: 'addr-003',
      user_id: 'user-123',
      label: 'Warehouse',
      street_address: '789 Supply Rd',
      is_default: false,
      created_at: '2025-07-02T08:00:00Z',
      updated_at: '2025-07-02T08:00:00Z',
    },
    dropoff_address: {
      id: 'addr-004',
      user_id: 'user-123',
      label: 'Retail Store',
      street_address: '321 Shop Blvd',
      is_default: false,
      created_at: '2025-07-02T08:00:00Z',
      updated_at: '2025-07-02T08:00:00Z',
    },
    status: 'CONFIRMED',
    item_description: 'Mobile Phones',
    item_weight_kg: 5.0,
    cost: 40.0,
    feedback_rating: 4,
    feedback_comment: 'Delivered quickly',
    created_at: '2025-07-02T08:00:00Z',
    updated_at: '2025-07-02T10:00:00Z',
  },
  {
    id: 'order-003',
    user_id: 'user-123',
    machine_id: 'drone-003',
    pickup_address_id: 'addr-005',
    dropoff_address_id: 'addr-006',
    pickup_address: {
      id: 'addr-005',
      user_id: 'user-123',
      label: 'Warehouse B',
      street_address: '654 Logistics Pkwy',
      is_default: false,
      created_at: '2025-07-03T07:00:00Z',
      updated_at: '2025-07-03T07:00:00Z',
    },
    dropoff_address: {
      id: 'addr-006',
      user_id: 'user-123',
      label: 'Customer',
      street_address: '987 Delivery Ln',
      is_default: false,
      created_at: '2025-07-03T07:00:00Z',
      updated_at: '2025-07-03T07:00:00Z',
    },
    status: 'DELIVERED',
    item_description: 'Books',
    item_weight_kg: 3.2,
    cost: 18.5,
    feedback_rating: 5,
    feedback_comment: 'Excellent service',
    created_at: '2025-07-03T07:00:00Z',
    updated_at: '2025-07-03T12:00:00Z',
  },
  {
    id: 'order-004',
    user_id: 'user-123',
    machine_id: 'robot-004',
    pickup_address_id: 'addr-007',
    dropoff_address_id: 'addr-008',
    pickup_address: {
      id: 'addr-007',
      user_id: 'user-123',
      label: 'Factory',
      street_address: '100 Industrial Dr',
      is_default: false,
      created_at: '2025-07-04T09:00:00Z',
      updated_at: '2025-07-04T09:00:00Z',
    },
    dropoff_address: {
      id: 'addr-008',
      user_id: 'user-123',
      label: 'Repair Center',
      street_address: '200 Tech Blvd',
      is_default: false,
      created_at: '2025-07-04T09:00:00Z',
      updated_at: '2025-07-04T09:00:00Z',
    },
    status: 'CANCELLED',
    item_description: 'Server Rack',
    item_weight_kg: 12.0,
    cost: 60.0,
    feedback_rating: null,
    feedback_comment: null,
    created_at: '2025-07-04T09:00:00Z',
    updated_at: '2025-07-04T09:30:00Z',
  },
  {
    id: 'order-005',
    user_id: 'user-123',
    machine_id: 'drone-005',
    pickup_address_id: 'addr-009',
    dropoff_address_id: 'addr-010',
    pickup_address: {
      id: 'addr-009',
      user_id: 'user-123',
      label: 'Storage',
      street_address: '555 Storage Rd',
      is_default: false,
      created_at: '2025-07-05T11:00:00Z',
      updated_at: '2025-07-05T11:00:00Z',
    },
    dropoff_address: {
      id: 'addr-010',
      user_id: 'user-123',
      label: 'Library',
      street_address: '678 Library Ln',
      is_default: false,
      created_at: '2025-07-05T11:00:00Z',
      updated_at: '2025-07-05T11:00:00Z',
    },
    status: 'IN_PROGRESS',
    item_description: 'Documents',
    item_weight_kg: 1.1,
    cost: 12.0,
    feedback_rating: null,
    feedback_comment: null,
    created_at: '2025-07-05T11:00:00Z',
    updated_at: '2025-07-05T11:45:00Z',
  },
  {
    id: 'order-006',
    user_id: 'user-123',
    machine_id: 'robot-006',
    pickup_address_id: 'addr-011',
    dropoff_address_id: 'addr-012',
    pickup_address: {
      id: 'addr-011',
      user_id: 'user-123',
      label: 'Mall',
      street_address: '333 Shopping Plaza',
      is_default: false,
      created_at: '2025-07-06T10:00:00Z',
      updated_at: '2025-07-06T10:00:00Z',
    },
    dropoff_address: {
      id: 'addr-012',
      user_id: 'user-123',
      label: 'House',
      street_address: '789 Home St',
      is_default: true,
      created_at: '2025-07-06T10:00:00Z',
      updated_at: '2025-07-06T10:00:00Z',
    },
    status: 'DELIVERED',
    item_description: 'Groceries',
    item_weight_kg: 7.0,
    cost: 22.0,
    feedback_rating: 5,
    feedback_comment: 'Great delivery time',
    created_at: '2025-07-06T10:00:00Z',
    updated_at: '2025-07-06T12:00:00Z',
  },
  {
    id: 'order-007',
    user_id: 'user-123',
    machine_id: null,
    pickup_address_id: 'addr-013',
    dropoff_address_id: 'addr-014',
    pickup_address: {
      id: 'addr-013',
      user_id: 'user-123',
      label: 'Pharmacy',
      street_address: '911 Health St',
      is_default: false,
      created_at: '2025-07-07T08:00:00Z',
      updated_at: '2025-07-07T08:00:00Z',
    },
    dropoff_address: {
      id: 'addr-014',
      user_id: 'user-123',
      label: 'Apartment',
      street_address: '234 Elm St',
      is_default: false,
      created_at: '2025-07-07T08:00:00Z',
      updated_at: '2025-07-07T08:00:00Z',
    },
    status: 'PENDING_PAYMENT',
    item_description: 'Medicine',
    item_weight_kg: 0.8,
    cost: 10.0,
    feedback_rating: null,
    feedback_comment: null,
    created_at: '2025-07-07T08:00:00Z',
    updated_at: '2025-07-07T08:00:00Z',
  },
  {
    id: 'order-008',
    user_id: 'user-123',
    machine_id: 'drone-008',
    pickup_address_id: 'addr-015',
    dropoff_address_id: 'addr-016',
    pickup_address: {
      id: 'addr-015',
      user_id: 'user-123',
      label: 'Cafe',
      street_address: '444 Brew Ln',
      is_default: false,
      created_at: '2025-07-08T09:30:00Z',
      updated_at: '2025-07-08T09:30:00Z',
    },
    dropoff_address: {
      id: 'addr-016',
      user_id: 'user-123',
      label: 'Dorm',
      street_address: '555 Campus Way',
      is_default: false,
      created_at: '2025-07-08T09:30:00Z',
      updated_at: '2025-07-08T09:30:00Z',
    },
    status: 'CONFIRMED',
    item_description: 'Pastries',
    item_weight_kg: 0.5,
    cost: 8.0,
    feedback_rating: 4,
    feedback_comment: 'Tasty but a bit late',
    created_at: '2025-07-08T09:30:00Z',
    updated_at: '2025-07-08T10:15:00Z',
  },
  {
    id: 'order-009',
    user_id: 'user-123',
    machine_id: 'robot-009',
    pickup_address_id: 'addr-017',
    dropoff_address_id: 'addr-018',
    pickup_address: {
      id: 'addr-017',
      user_id: 'user-123',
      label: 'Printer Shop',
      street_address: '101 Copy Ave',
      is_default: false,
      created_at: '2025-07-09T11:00:00Z',
      updated_at: '2025-07-09T11:00:00Z',
    },
    dropoff_address: {
      id: 'addr-018',
      user_id: 'user-123',
      label: 'Client Office',
      street_address: '202 Client Rd',
      is_default: false,
      created_at: '2025-07-09T11:00:00Z',
      updated_at: '2025-07-09T11:00:00Z',
    },
    status: 'IN_PROGRESS',
    item_description: 'Flyers',
    item_weight_kg: 4.0,
    cost: 17.0,
    feedback_rating: null,
    feedback_comment: null,
    created_at: '2025-07-09T11:00:00Z',
    updated_at: '2025-07-09T11:20:00Z',
  },
];

async function fetchUserOrders(token, page = 1, limit = 10) {
  const res = await axios.get('/api/orders', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      page,
      limit,
    },
  });

  return res.data; // Contains { orders: [...], total: N }
}

import Orders from '../components/Account/Orders';

export default function TrackOrdersPage() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Make API CALL to fetch user orders from backend

    // Testing
    setOrders(mockOrders);
  }, []);

  return (
    <Box className="flex flex-col justify-center items-center py-8 px-auto ">
      <Box className="flex items-center justify-center mb-4 gap-10">
        <Typography variant="h4">My Orders</Typography>
        <Typography>x items</Typography>
      </Box>
      <Orders orders={orders}></Orders>
    </Box>
  );
}
