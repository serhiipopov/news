import { FC } from 'react';
import { Typography } from '@mui/material';

interface TitleProps {
  title: string;
  color: string;
}

const Title: FC<TitleProps> = ({ title, color }) => (
  <Typography
    variant='h1'
    component='h1'
    fontSize={42}
    color={color}
    sx={{ textAlign: 'center', mb: 4 }}
  >
    {title}
  </Typography>
);

export default Title;
