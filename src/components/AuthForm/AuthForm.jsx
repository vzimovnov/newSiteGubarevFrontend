import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { Button, TextField } from '@mui/material';

import { authRequest } from '../../redux/actions/auth';
import BasicAlert from '../Alert/Alert';

import {
  LOGIN_TITLE,
  REGISTRATION_TITLE,
  REGISTRATION_VALUES,
  LOGIN_VALUES,
  LOGIN_FIELDS,
  REGISTRATION_FIELDS,
  LOGIN_SCHEMA,
  REGISTRATION_SCHEMA,
} from './constants';

import './AuthForm.css';

function LogIn() {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal.modalType);
  const { error } = useSelector((state) => state.auth);
  const isLoginModal = modalType === 'login';
  const currentFields = isLoginModal ? LOGIN_FIELDS : REGISTRATION_FIELDS;
  const initialValues = isLoginModal ? LOGIN_VALUES : REGISTRATION_VALUES;
  const currentTitle = isLoginModal ? LOGIN_TITLE : REGISTRATION_TITLE;
  const validationSchema = isLoginModal ? LOGIN_SCHEMA : REGISTRATION_SCHEMA;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (value) => {
      dispatch(authRequest(value));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <h1>{currentTitle}</h1>
      {currentFields.map(({ name, type }) => (
        <TextField
          className="text-field"
          fullWidth
          key={name}
          id={name}
          name={name}
          type={type}
          label={name}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          onChange={formik.handleChange}
          error={formik.touched[name] && !!formik.errors[name]}
          helperText={formik.touched[name] && formik.errors[name]}
        />
      ))}
      <Button className="button" color="primary" variant="contained" fullWidth type="submit">
        {modalType}
      </Button>
      {error && <BasicAlert severity="error" message={error} />}
    </form>
  );
}

export default memo(LogIn);
