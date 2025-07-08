import {
  Link,
  Typography,
  TextField,
  Button,
  Box,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3e5f1b',
    },
  },
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: false, password: false });

  const navigate = useNavigate();

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // min 8 characters, letters & numbers
    const emailValid = emailRegex.test(email);
    const passwordValid = passwordRegex.test(password);
    setErrors({ email: !emailValid, password: !passwordValid });
    return emailValid && passwordValid;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      console.log('Login successful with:', { email, password });
    }
  };

  return (
    <Box className="flex items-center justify-center min-h-screen">
      <ThemeProvider theme={theme}>
        <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg p-8">
          <div className="flex flex-col items-center justify-center gap-4 p-4 w-full max-w-lg">
            <Typography variant="h4" sx={{ color: '#3e5f1b' }}>
              Login
            </Typography>

            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              helperText={errors.email ? 'Invalid email address' : ''}
              fullWidth
              color="primary"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              helperText={
                errors.password
                  ? 'Password must be at least 8 characters and include a number'
                  : ''
              }
              fullWidth
              color="primary"
            />
            <div className="flex flex-col">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Login
              </Button>
              <Typography>
                Don't have an account yet?{' '}
                <Link
                  //   href=""
                  onClick={() => {
                    navigate('/signup');
                  }}
                >
                  {' '}
                  Sign Up Here!
                </Link>
              </Typography>
            </div>
            <div>
              <Button>PLACE HOLDER FOR GOOGLE OAUTH</Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </Box>
  );
}
