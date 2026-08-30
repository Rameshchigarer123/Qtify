// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, InputBase, Button, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HeadphonesIcon from '@mui/icons-material/Headphones';

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#34C94B',
        height: '74px',
        justifyContent: 'center',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginLeft: '24px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3721/3721984.png"
              alt="logo"
              style={{ width: '28px', height: '28px' }}
            />
          </Box>
          <Typography       
            variant="h6"
            sx={{ color: '#000', fontWeight: 'bold' }}
          >
            Qtify
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: '4px',
            padding: '4px 12px',
            width: '400px',
          }}
        >
          <InputBase
            placeholder="Search a album of your choice"
            sx={{ flex: 1, fontSize: '14px' }}
          />
          <SearchIcon sx={{ color: '#888' }} />
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#34C94B',
            textTransform: 'none',
            borderRadius: '4px',
            fontFamily: 'Poppins, sans-serif',
            '&:hover': { backgroundColor: '#222' },
          }}
        >
          Give Feedback
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;