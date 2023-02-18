import { FC } from 'react';
import Navbar from '../navbar/navbar';
import '../../index.css';

const Header: FC = () => {
  return (
    <header className='header'>
      <Navbar />
    </header>
  );
};

export default Header;
