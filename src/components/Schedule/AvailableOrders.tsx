import { Box, Typography, Button } from '@mui/material';

import type { ProductItem } from '../../types/product';
import QuantityControl from '../Cart/QuantityControl';

// import QuantityControl from '../Cart/QuantityControl';

interface AvailableOrdersProps {
  orders: ProductItem[];
}

export default function AvailableOrders({
  orders,
  onAddToCart,
  onRemoveFromCart,
}: AvailableOrdersProps) {
  return (
    <div className="">
      {orders.map((item) => {
        return (
          <Box
            key={item.product_id}
            className="bg-[#f9faf4] border-2 border-[#e5e5e5] rounded-xl p-4 mb-6 w-full h-[300px] flex flex-col justify-between"
          >
            <div className="flex tems-start justify-between mb-2">
              <Typography
                variant="subtitle1"
                fontWeight={600}
              >{`${item.name} `}</Typography>
              <Typography
                variant="subtitle1"
                fontWeight={600}
              >{`$${item.price}`}</Typography>
            </div>
            <div className="items-center justify-center">
              <Typography>{item.description}</Typography>
              <Typography>{`Item Location: ${item.location.warehouse}`}</Typography>
            </div>
            <div className="flex justify-end">
              <div className="w-[200px]">
                <QuantityControl quantity={item.stock} />
              </div>
            </div>
          </Box>
        );
      })}
    </div>
  );
}
