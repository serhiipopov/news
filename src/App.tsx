import React, { FC, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from './hooks/redux';
import { Main, Profile, News } from './pages';
import { Routes as EnumRoutes } from './constants/routes';

const App: FC = () => {
  const isAuth = useAppSelector(state => state.authReducer.isAuth);

  useEffect(() => {
    localStorage.getItem('name');
    localStorage.getItem('password');
  }, []);

  return (
  <>
    <Routes>
      <Route path={EnumRoutes.main} element={<Main />} />
      <Route path={EnumRoutes.news} element={<News />} />
      <Route
        path={EnumRoutes.profile}
        element={isAuth ? <Profile /> : <Navigate to={EnumRoutes.main} />}
      />
    </Routes>
  </>
  );
}

export default App;
