import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import { toggleModal } from '../../redux/actions/modal';
import AuthForm from '../AuthForm/AuthForm';
import CLOSE from './constants';
import AddNewsForm from '../AddNewsForm/AddNewsForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function BasicModal() {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal.modalType);
  const isOpen = useSelector((state) => state.modal.isOpen);

  const isAuth = modalType === 'login' || modalType === 'signUp';
  const isAddNews = modalType === 'addNews';
  const handleClose = () => {
    dispatch(toggleModal(false));
  };
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal" sx={{ ...style }}>
        {isAuth && <AuthForm />}
        {isAddNews && <AddNewsForm />}
        <Button onClick={handleClose}>{CLOSE}</Button>
      </Box>
    </Modal>
  );
}

export default memo(BasicModal);
