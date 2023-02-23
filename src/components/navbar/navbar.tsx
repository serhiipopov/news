import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateAuth } from '../../store/reducers/auth/slice';
import ModalCustom from '../ui/modal/modal';
import LanguagesToggle from '../ui/languages-toggle/languages-toggle';
import Login from '../login/login';
import { Routes } from '../../constants/routes';
import '../../index.css';

const Navbar: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isAuth = useAppSelector(state => state.authReducer.isAuth);

  const toggle = () => setOpenModal(!openModal);
  const logout = () => {
    localStorage.removeItem('auth');
    dispatch(updateAuth(false));
  }

  return (
    <nav className='navbar'>
      <div>
        <Link className='link' to={Routes.main}>{t('headers.main')}</Link>
        <Link className='link' to={Routes.news}>{t('headers.news')}</Link>
        <Link className='link' to={Routes.profile}>{t('headers.profile')}</Link>
      </div>

      <Stack direction='row' spacing={2}>
        <LanguagesToggle />
        {!isAuth ?
          <Button variant='outlined' onClick={toggle}>
            {t('headers.login')}
          </Button>
          :
          <Button variant='outlined' onClick={logout}>
            {t('headers.logout')}
          </Button>
        }
      </Stack>

      <ModalCustom openModal={openModal} handleClose={toggle}>
        <Login setOpenModal={setOpenModal} />
      </ModalCustom>
    </nav>
  );
};

export default Navbar;
