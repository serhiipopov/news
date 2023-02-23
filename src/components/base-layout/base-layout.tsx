import React, { FC } from 'react';
import { Box } from '@mui/material';
import Header from '../header/header';

interface BaseLayoutProps {
    children: React.ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box py={8} px={20}>
        {children}
      </Box>
    </>
  );
};

export default BaseLayout;
