import React, { FC, useState } from 'react';
import {Box, Button, Paper, Stack, TextField } from '@mui/material';
import { FormFields } from '../../types/form-fields';
import { strings } from '../../constants/strings';

const Login: FC = () => {
  const [formFields, setFormFields] = useState<FormFields>({
    userName: '',
    password: '',
  });

  const formHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormFields({...formFields, [id]: value});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('name', formFields.userName);
    localStorage.setItem('password', formFields.password);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      <Paper sx={{ p: 4, minWidth: '50%' }}  elevation={5}>
        <form onSubmit={handleSubmit}>
          <Stack direction='column' spacing={3}>
            <TextField
              id='userName'
              label='Name'
              type='text'
              variant='outlined'
              value={formFields.userName}
              onChange={formHandler}
              required
            />
            <TextField
              id='password'
              label='Password'
              type='password'
              variant='outlined'
              value={formFields.password}
              onChange={formHandler}
              required
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              size='large'
              sx={{maxWidth: 150}}
            >
              {strings.signIn}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}

export default Login;
