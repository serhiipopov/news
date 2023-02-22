import { FC } from 'react';
import { Typography } from '@mui/material';

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => (
  <Typography
    variant='h1'
    component='h1'
    fontSize={42}
    color='grey'
    sx={{ textAlign: 'center', mb: 4 }}
  >
    {title}
  </Typography>
);

export default Title;
