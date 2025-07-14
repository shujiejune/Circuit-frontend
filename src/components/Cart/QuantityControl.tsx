import { Box, Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

export default function QuantityControl({ quantity }) {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(1);
  };

  const handleDelete = () => {
    setCount(0);
  };

  return (
    <Box className="w-full max-w-sm">
      <Box
        className=""
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          paddingX: 1.5,
          paddingY: 0.5,
        }}
      >
        {count === 0 ? (
          <Button
            onClick={addToCart}
            fullWidth
            variant="contained"
            disableRipple
            sx={{
              height: '100%',
              background: 'white',
              color: '#3e5f1b',
              border: '1px solid #e5e5e5',
              boxShadow: 'none',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: '#f5f5f5', // soft hover
                borderColor: '#3e5f1b',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              },
              '&:active': {
                backgroundColor: '#e5e5e5',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)',
                transform: 'scale(0.98)',
              },
              '&:focus': {
                outline: 'none',
              },
              '&.Mui-focusVisible': {
                outline: 'none',
              },
            }}
          >
            ADD TO CART
          </Button>
        ) : (
          <Box className="flex items-center w-full gap-2">
            <TextField
              type="number"
              label="Quantity"
              size="small"
              value={count}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (val >= 1 && val <= quantity) setCount(val);
              }}
              sx={{
                '& .MuiInputBase-root': {
                  height: 40,
                  fontSize: '0.9 rem',
                },
                '& .MuiInputLabel-root': {
                  fontSize: '0.9rem',
                  top: '-4px',
                },
              }}
              slotProps={{
                input: {
                  inputProps: {
                    min: 1, // set min value
                    max: quantity, // set max value
                  },
                },
              }}
              fullWidth
            />
            <Button
              onClick={handleDelete}
              color="error"
              variant="outlined"
              sx={{
                minWidth: '32px',
                height: '40px', // match with input
                padding: 0.5,
              }}
            >
              <DeleteIcon fontSize="small" />
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
