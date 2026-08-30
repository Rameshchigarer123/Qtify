import React from 'react';
import { Card as MuiCard, CardMedia, CardContent, Chip, Typography, Box } from '@mui/material';

function Card({ image, title, followCount }) {
  return (
    <MuiCard
      sx={{
        width: '159px',
        height: '232px',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#1E1E1E',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ position: 'relative', height: '160px' }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        <Chip
          label={`${followCount} Follows`}
          size="small"
          sx={{
            position: 'absolute',
            bottom: 6,
            left: 6,
            backgroundColor: '#000',
            color: '#fff',
            fontSize: '10px',
            height: '20px',
          }}
        />
      </Box>

      <CardContent sx={{ padding: '8px', flex: 1 }}>
        <Typography variant="body2" sx={{ color: '#fff', fontWeight: 'bold', fontSize: '13px' }}>
          {title}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}

export default Card;