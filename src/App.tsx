import { FC, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { updateAuth } from './store/reducers/auth/slice';
import { Main, Profile, News } from './pages';
import { Routes as EnumRoutes } from './constants/routes';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.authReducer.isAuth);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(updateAuth(true))
    }
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
