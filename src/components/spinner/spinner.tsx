import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
