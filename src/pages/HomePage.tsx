import {
  Typography,
  Box,
  Button,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3e5f1b',
      },
    },
  });

  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          height: '800px',
          width: '100%',
          backgroundImage: 'url(/banner3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="flex flex-col justify-start items-center pt-15"
      >
        <Typography
          variant="h1"
          sx={{
            color: '#3e5f1b',
            textAlign: 'center',
            marginTop: '20px',
            fontWeight: 'bold',
          }}
        >
          Circuit
        </Typography>
        <Typography variant="h3"> Where Smart Logistics Take Flight</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: '#f9f9f9',
          py: 8,
          px: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 4,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            paddingX: '10%',
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: 'left', fontWeight: 'bold', mb: 4 }}
          >
            About Us:
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 3, color: '#333', textAlign: 'justify' }}
          >
            At{' '}
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Circuit
            </Box>
            , we’re reimagining last-mile delivery through intelligent
            automation. By combining the power of drones, ground robots, and
            real-time data, we provide fast, efficient, and flexible delivery
            solutions tailored to every order.
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 3, color: '#333', textAlign: 'justify' }}
          >
            Our dynamic pricing model considers distance, item size, machine
            type, and peak-hour demand to ensure transparency and fairness.
            Whether it’s a lightweight package soaring through the skies or a
            larger item rolling across the ground,{' '}
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Circuit
            </Box>{' '}
            selects the optimal route and vehicle for the job—so you get the
            best price and the fastest service.
          </Typography>
          <Typography variant="h6" sx={{ color: '#333', textAlign: 'justify' }}>
            From quote to confirmation,{' '}
            <Box component="span" sx={{ fontWeight: 'bold' }}>
              Circuit
            </Box>{' '}
            streamlines logistics into a smarter, seamless experience.
          </Typography>
        </Box>
      </Box>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: '#f9f9f9',
            py: 2,
            px: 2,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              padding: 4,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '12px',
              paddingX: '5%',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: 'left', fontWeight: 'bold', mb: 4 }}
              >
                Ready to Experience Smart Delivery?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'left',
                  maxWidth: '700px',
                  mb: 4,
                }}
              >
                Placing an order with Circuit is simple. Just enter your pickup
                and drop-off locations, describe your package, and we’ll
                instantly recommend the most efficient and affordable delivery
                method—by drone or ground robot.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ display: 'block' }}
                onClick={() => navigate('/createorder')}
              >
                Get a Quote
              </Button>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <img
                src="/banner4.png"
                alt="drone delivery illustration"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                }}
              />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
}
