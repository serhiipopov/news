import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUserAsync } from '../../store/reducers/users/slice';
import Title from '../../components/title/title';
import Error from '../../components/error/error';
import UsersList from '../../components/users-list/users-list';
import Spinner from '../../components/spinner/spinner';

const Main: FC = () => {
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchUserAsync())
  }, [])

  return (
    <>
      <Title title={t('body.users')} />

      { isLoading && <Spinner /> }
      { error && <Error error={error} /> }

      <UsersList users={users} />
    </>
  );
};

export default Main;
