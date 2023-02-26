import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUserAsync } from '../../store/reducers/users/slice';
import Title from '../../components/ui/title/title';
import Error from '../../components/ui/error/error';
import UsersList from '../../components/users-list/users-list';
import Spinner from '../../components/ui/spinner/spinner';

const Main: FC = () => {
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const countUsers = users.length;

  useEffect(() => {
    dispatch(fetchUserAsync())
  }, [])

  return (
    <>
      <Title title={t('body.users')} color='grey' />

      { isLoading && <Spinner /> }
      { error && <Error error={error} /> }
      { !error && !countUsers && !isLoading && <Title title={t('body.noUsers')} /> }

      <UsersList users={users} />
    </>
  );
};

export default Main;
