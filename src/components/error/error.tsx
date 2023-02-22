import React, { FC } from 'react';
import { Typography } from '@mui/material';

interface ErrorProps {
  error: string | null;
}

const Error: FC<ErrorProps> = ({ error }) => {
  return (
    <>
      <Typography
        variant='h5'
        component='div'
        color='error'
        sx={{ alignItems: 'center' }}
      >
        {error}
      </Typography>
    </>
  );
};

export default Error;
