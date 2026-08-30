import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get('https://qtify-backend.labs.crio.do/songs')
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching songs:', error);
      });
  }, []);

  return (
    <Box sx={{ padding: '24px', backgroundColor: '#121212' }}>
      <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', marginBottom: '16px' }}>
        Songs
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {songs.map((song) => (
          <Box
            key={song.id}
            sx={{
              width: '159px',
              backgroundColor: '#1E1E1E',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src={song.image}
              alt={song.title}
              style={{ width: '100%', height: '160px', objectFit: 'cover' }}
            />
            <Box sx={{ padding: '8px' }}>
              <Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold', fontSize: '13px' }}>
                {song.title}
              </Typography>
              <Typography variant="caption" sx={{ color: '#aaa' }}>
                {song.artists.join(', ')}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Songs;