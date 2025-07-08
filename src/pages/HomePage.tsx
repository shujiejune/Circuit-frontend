import { Typography, Box } from '@mui/material';

export default function HomePage() {
  return (
    <Box>
      <Box>
        <Typography
          variant="h2"
          sx={{ color: '#3e5f1b', textAlign: 'center', marginTop: '20px' }}
        >
          Circuit: Where Smart Logistics Take Flight
        </Typography>
      </Box>
      <Box>
        <Typography>
          At Circuit, we’re reimagining last-mile delivery through intelligent
          automation. By combining the power of drones, ground robots, and
          real-time data, we provide fast, efficient, and flexible delivery
          solutions tailored to every order.
        </Typography>
        <Typography>
          Our dynamic pricing model considers distance, item size, machine type,
          and peak-hour demand to ensure transparency and fairness. Whether it’s
          a lightweight package soaring through the skies or a larger item
          rolling across the ground, Circuit selects the optimal route and
          vehicle for the job—so you get the best price and the fastest service.
        </Typography>
        <Typography>
          From quote to confirmation, Circuit streamlines logistics into a
          smarter, seamless experience.
        </Typography>
      </Box>
    </Box>
  );
}
