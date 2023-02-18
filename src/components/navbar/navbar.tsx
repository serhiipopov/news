import { FC } from 'react';
import { Link } from 'react-router-dom';
import { strings } from '../../constants/strings';
import '../../index.css';

const Navbar: FC = () => {
  return (
    <nav className='navbar'>
      <Link className='link' to='/'>{strings.main}</Link>
      <Link className='link' to='/news'>{strings.news}</Link>
      <Link className='link' to='/profile'>{strings.profile}</Link>
    </nav>
  );
};

export default Navbar;
