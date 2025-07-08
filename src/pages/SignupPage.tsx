import Signup from '../components/Account/Signup';

import { Box } from '@mui/material';

export default function SignupPage() {
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
      <Signup></Signup>
    </Box>
  );
}
