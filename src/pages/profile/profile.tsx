import { FC, useEffect } from 'react';
import Login from '../../components/login/login';

const Profile: FC = () => {
  useEffect(() => {
    const name = localStorage.getItem('name');
    const password = localStorage.getItem('password');
    console.log(`Name: ${name}, Password: ${password}`);
  }, []);

  return (
    <>
      <Login />
    </>
  );
};

export default Profile;
