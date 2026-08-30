import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import Card from './Card';

function Section({ title, apiUrl }) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error('Error fetching albums:', error);
      });
  }, [apiUrl]);

  const visibleAlbums = showAll ? albums : albums.slice(0, 8);

  return (
    <Box sx={{ padding: '24px', backgroundColor: '#121212' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#4CAF50', cursor: 'pointer' }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Collapse' : 'Show all'}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {visibleAlbums.map((album) => (
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