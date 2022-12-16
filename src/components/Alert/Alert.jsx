import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export default function BasicAlert({ message, severity }) {
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
