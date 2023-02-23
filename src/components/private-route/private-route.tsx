import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { Routes } from '../../constants/routes';

interface PrivateRouteProps {
  children: React.ReactNode;
  isAuth: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, isAuth }) => {
  return <> { isAuth ? children : <Navigate to={Routes.main} /> } </>
}


export default PrivateRoute;
