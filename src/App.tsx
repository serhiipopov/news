import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { updateAuth, updateLoading } from './store/reducers/auth/slice';
import PrivateRoute from './components/private-route/private-route';
import { Main, Profile, News, Error } from './pages';
import { Routes as EnumRoutes } from './constants/routes';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, isLoading } = useAppSelector(state => state.authReducer);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(updateAuth(true))
    }
    dispatch(updateLoading())
  }, []);

  if (isLoading) {
    return <></>
  }

  return (
    <Routes>
      <Route path={EnumRoutes.main} element={<Main />} />
      <Route path={EnumRoutes.news} element={<News />} />
      <Route
        path={EnumRoutes.profile}
        element={
          <PrivateRoute isAuth={isAuth}>
            <Profile />
          </PrivateRoute>}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
