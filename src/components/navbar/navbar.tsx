import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { updateAuth } from '../../store/reducers/auth/slice';
import ModalCustom from '../modal/modal';
import Login from '../login/login';
import { strings } from '../../constants/strings';
import { Routes } from '../../constants/routes'
import '../../index.css';

const Navbar: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const toggle = () => setOpenModal(!openModal);
  const logout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    dispatch(updateAuth(false));
  }

  return (
    <nav className='navbar'>
      <div>
        <Link className='link' to={Routes.main}>{strings.main}</Link>
        <Link className='link' to={Routes.news}>{strings.news}</Link>
        <Link className='link' to={Routes.profile}>{strings.profile}</Link>
      </div>

      <div>
          <Button variant='outlined' onClick={toggle}>
            {strings.logIn}
          </Button>
          <Button variant='outlined' onClick={logout}>
             {strings.logout}
          </Button>
      </div>


      <ModalCustom openModal={openModal} handleClose={toggle}>
        <Login setOpenModal={setOpenModal} />
      </ModalCustom>
    </nav>
  );
};

export default Navbar;
