import React, { memo } from 'react';

import './Loader.css';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loader() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress className="loader" />
    </Box>
  );
}

export default memo(Loader);
