import Login from '../components/Account/Login';

import { Box } from '@mui/material';

export default function LoginPage() {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundImage: 'url(/banner5.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Login></Login>
    </Box>
  );
}
