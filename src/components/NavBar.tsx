import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// import isTokenValid from '../utils/auth';
import { useAuth } from '../context/AuthContext';

export default function NavBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { isLoggedIn } = useAuth();

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path: string) => {
    setAnchorEl(null);
    navigate(path);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p x-4 py-4 ">
        <div className="whitespace-nowrap flex items-center gap-5">
          <img
            src="/circuit.png"
            alt="Circuit logo"
            className="h-12 w-auto"
          ></img>
          <Typography
            variant="h3"
            sx={{ color: '#3e5f1b', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Circuit
          </Typography>
        </div>

        {/* This div section is used to display full width navbar for screens larger than medium */}
        <div className="hidden md:flex space-x-4 whitespace-nowrap">
          <Button
            // variant="contained"
            disableElevation
            disableRipple
            disableFocusRipple
            size="large"
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: 'none', // default color
              color: '#000000', // text color
              '&:hover': {
                backgroundColor: '#e8f0e0',
              },
              '&:active': {
                backgroundColor: '',
              },
              '&.Mui-focusVisible': {
                boxShadow: 'none',
              },
              '&:focus': {
                outline: 'none',
              },
            }}
          >
            Contact Us
          </Button>

          {isLoggedIn ? (
            <Button
              disableElevation
              disableRipple
              disableFocusRipple
              size="large"
              onClick={() => navigate('/account')}
              sx={{
                backgroundColor: '', // default color
                color: '#000000', // text color
                '&:hover': {
                  backgroundColor: '#e8f0e0',
                },
                '&:active': {
                  backgroundColor: '',
                },
                '&.Mui-focusVisible': {
                  boxShadow: 'none',
                },
                '&:focus': {
                  outline: 'none',
                },
              }}
            >
              My Account
            </Button>
          ) : (
            <Button
              disableElevation
              disableRipple
              disableFocusRipple
              size="large"
              onClick={() => navigate('/login')}
              sx={{
                backgroundColor: '', // default color
                color: '#000000', // text color
                '&:hover': {
                  backgroundColor: '#e8f0e0',
                },
                '&:active': {
                  backgroundColor: '',
                },
                '&.Mui-focusVisible': {
                  boxShadow: 'none',
                },
                '&:focus': {
                  outline: 'none',
                },
              }}
            >
              Login / Signup
            </Button>
          )}
        </div>

        {/* This div section is used to display collapasble menu for navigation buttons for small screens */}
        <div className="md:hidden">
          <IconButton onClick={handleMenuClick} size="large" edge="end">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={() => handleMenuClose('/')}>Contact Us</MenuItem>
            <MenuItem onClick={() => handleMenuClose('/')}>Login</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
