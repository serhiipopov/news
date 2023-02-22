import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { updateAuth } from '../../store/reducers/auth/slice';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  TextField,
} from '@mui/material';
import { FormFields } from '../../types/form-fields';
import { LOGIN } from '../../__mocks__';
import { Routes } from '../../constants/routes';

interface LoginProps {
  setOpenModal: (state: boolean) => void;
}

const Login: FC<LoginProps> = ({ setOpenModal }) => {
  const [formFields, setFormFields] = useState<FormFields>({
    name: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const formHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormFields({...formFields, [id]: value});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formFields.name === LOGIN.name && formFields.password === LOGIN.password) {
      dispatch(updateAuth(true));
      setOpenModal(false);
      navigate(Routes.profile);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ p: 4, width: 400, }} elevation={5}>
        <form onSubmit={handleSubmit}>
          <Stack direction='column' spacing={3}>

            {errorMessage &&
              <Typography variant='h5' color='error'>
                {errorMessage}
              </Typography>
            }

            <TextField
              id='name'
              label='Name'
              variant='outlined'
              value={formFields.name}
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
              sx={{ maxWidth: 150 }}
            >
              {t('body.signIn')}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  )
}

export default Login;
