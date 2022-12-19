import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function BasicAlert({ message, severity }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>{message}</Alert>
    </Stack>
  );
}

BasicAlert.propTypes = {
  message: PropTypes.string,
  severity: PropTypes.string,
}.isRequired;

export default memo(BasicAlert);
