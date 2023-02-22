import React, { FC } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import { IUser } from '../../types/user';

interface UserProps {
  user: IUser;
}

const User: FC<UserProps> = ({ user }) => {
  const { email, company, name, phone, address } = user;
  const { city, suite, street } = address;

  return (
    <Grid item md={4}>
      <Card variant='elevation' elevation={8} sx={{ p: 5 }}>
        <Typography variant='h6' component='h6' color='blue'>{name}</Typography>
        <Typography variant='overline' component='div' color='indigo'>{city}</Typography>
        <Typography variant='caption' component='div'>{`${street} ${suite}`}</Typography>
        <Typography variant='caption' component='div'>{email}</Typography>
        <Typography variant='caption' component='div'>{phone}</Typography>
        <Typography variant='caption' component='div'>{company.name}</Typography>
      </Card>
    </Grid>
  );
};

export default User;
