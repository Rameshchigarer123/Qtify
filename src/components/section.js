import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import Card from './Card';

function Section() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get('https://qtify-backend.labs.crio.do/albums/top')
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  return (
    <Box sx={{ padding: '24px', backgroundColor: '#121212' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
          Top Albums
        </Typography>
        <Typography variant="body2" sx={{ color: '#4CAF50', cursor: 'pointer' }}>
          Collapse
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {albums.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            followCount={album.follows}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Section;