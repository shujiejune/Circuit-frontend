import { Button } from '@mui/material';

export default function BackToTopBtn() {
  return (
    <Button
      variant="outlined"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      sx={{
        color: '#3e5f1b',
        borderColor: '#3e5f1b',
        '&:hover': {
          backgroundColor: '#f9faf4',
          borderColor: '#3e5f1b',
        },
        '&:focus': {
          outline: 'none',
        },
        '&:focus-visible': {
          outline: 'none',
          boxShadow: 'none',
        },
      }}
    >
      Back to top
    </Button>
  );
}
