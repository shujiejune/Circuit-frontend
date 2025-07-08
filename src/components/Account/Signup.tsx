import {
  Link,
  TextField,
  Button,
  Box,
  Typography,
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

export default function Signup() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    nickname: false,
    email: false,
    password: false,
    confirmPassword: false,
    mismatch: false,
  });

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const nicknameValid = nickname.trim().length > 0;
    const emailValid = emailRegex.test(email);
    const passwordValid = passwordRegex.test(password);
    const confirmValid = confirmPassword === password;

    setErrors({
      nickname: !nicknameValid,
      email: !emailValid,
      password: !passwordValid,
      confirmPassword: !confirmValid,
      mismatch: password !== confirmPassword,
    });

    return nicknameValid && emailValid && passwordValid && confirmValid;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      console.log('Signup with:', { nickname, email, password });
    }
  };

  return (
    <Box className="flex items-center justify-center min-h-screen">
      <ThemeProvider theme={theme}>
        <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg p-8">
          <div className="flex flex-col items-center justify-center gap-4 p-4 w-full max-w-lg">
            <Typography variant="h4" sx={{ color: '#3e5f1b' }}>
              Sign Up
            </Typography>

            <TextField
              label="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              error={errors.nickname}
              helperText={errors.nickname ? 'Nickname is required' : ''}
              fullWidth
              color="primary"
            />
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
            <TextField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={errors.confirmPassword}
              helperText={
                errors.confirmPassword
                  ? errors.mismatch
                    ? 'Passwords do not match'
                    : 'Confirm password is required'
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
                Sign Up
              </Button>
              <Typography>
                Already have an account?{' '}
                <Link
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  {' '}
                  Log In Here!
                </Link>
              </Typography>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </Box>
  );
}
