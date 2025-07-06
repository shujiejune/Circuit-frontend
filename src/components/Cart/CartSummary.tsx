import { Box, Typography } from '@mui/material';

export default function CartSummary() {
  return (
    <Box className="bg-[#f9faf4] border-2 border-[#e5e5e5] rounded-xl py-4 mb-4 flex justify-between items-start">
      <Box className="flex flex-col">
        <Box className="justify-start">
          <Typography>CartSummary</Typography>
        </Box>
      </Box>
    </Box>
  );
}
