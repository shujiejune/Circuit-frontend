import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  createTheme,
  ThemeProvider,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3e5f1b',
    },
  },
});

export default function Orders({ orders }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Box className="w-full max-w-4xl mx-auto ">
        {orders.map((order) => (
          <Box
            key={order.id}
            sx={{
              mb: 2,
              p: 2,
              border: '1px solid #ccc',
              borderRadius: 2,
              backgroundColor: 'rgb(250,250,246)',
            }}
            className="shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <Box
              className="flex justify-between items-center mb-2"
              onClick={handleOpen}
              sx={{ cursor: 'pointer' }}
            >
              <Box className="flex flex-col items-start justify-center">
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Order ID: {order.id}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Status: {order.status}
                </Typography>
              </Box>
              <Box>
                <Button
                  onClick={handleOpen}
                  sx={{ color: 'white', backgroundColor: '#3e5f1b' }}
                >
                  Show Details
                </Button>
              </Box>
            </Box>

            {/* Modal Component */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  p: 4,
                }}
              >
                {/* Detailed Order Info */}
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Created At: {new Date(order.created_at).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Item Description: {order.item_description}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Item Weight: {order.item_weight_kg} kg
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Cost: ${order.cost.toFixed(2)}
                </Typography>
                {order.feedback_rating && (
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Feedback Rating: {order.feedback_rating}
                  </Typography>
                )}
                {order.feedback_comment && (
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Feedback Comment: {order.feedback_comment}
                  </Typography>
                )}
              </Box>
            </Modal>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
}
