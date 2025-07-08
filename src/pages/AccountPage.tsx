import {
  Box,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

export default function AccountPage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3e5f1b',
      },
    },
  });

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <ThemeProvider theme={theme}>
        <Box className="flex flex-col items-center justify-center p-4 w-lg gap-10">
          <Typography>My Account</Typography>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              navigate('/accountsummary');
            }}
          >
            Account Information
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              navigate('/orders');
            }}
          >
            Track Orders
          </Button>
        </Box>
      </ThemeProvider>
    </div>
  );
}
