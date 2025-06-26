import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path: string) => {
    setAnchorEl(null);
    navigate(path);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4 ">
        <div className="whitespace-nowrap">
          <Typography
            variant="h6"
            sx={{ color: '#3e5f1b' }}
            onClick={() => navigate('/')}
          >
            Dispatch & Delivery Management
          </Typography>
        </div>

        {/* This div section is used to display full width navbar for screens larger than medium */}
        <div className="hidden md:flex space-x-4 whitespace-nowrap">
          <Button
            // variant="contained"
            disableElevation
            disableRipple
            disableFocusRipple
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

          <Button
            disableElevation
            disableRipple
            disableFocusRipple
            onClick={() => navigate('/')}
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
            Cart
          </Button>

          <Button
            disableElevation
            disableRipple
            disableFocusRipple
            onClick={() => navigate('/')}
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
            Login
          </Button>
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
            <MenuItem onClick={() => handleMenuClose('/')}>Cart</MenuItem>
            <MenuItem onClick={() => handleMenuClose('/')}>Login</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
