import React, { FC } from 'react';
import Header from '../header/header';

interface BaseLayoutProps {
    children: React.ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='bodyContainer'>
        {children}
      </div>
    </>
  );
};

export default BaseLayout;
