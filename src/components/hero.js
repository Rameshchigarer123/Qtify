import React from 'react';
import { Box, Typography } from '@mui/material';


function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        height: '270px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 60px',
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{ color: '#fff', fontWeight: 'bold', marginBottom: '8px' }}
        >
          100 Thousand Songs, ad-free
        </Typography>
        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'normal' }}>
          Over thousands podcast episodes
        </Typography>
      </Box>

      <img
        src="https://cdn-icons-png.flaticon.com/512/3721/3721984.png"
        alt="headphones"
        style={{ width: '150px', height: '150px' }}
      />
    </Box>
  );
}

export default Hero;