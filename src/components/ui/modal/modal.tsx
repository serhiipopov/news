import React, { FC } from 'react';
import { Modal } from '@mui/material';

interface ModalProps {
  openModal: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const ModalCustom: FC<ModalProps> = ({
  openModal,
  handleClose,
  children
  }) => {
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <>
        {children}
      </>
    </Modal>
  );
};

export default ModalCustom;
