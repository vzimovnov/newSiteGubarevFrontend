import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { Button, TextField } from '@mui/material';

import { editUserProfileRequested } from '../../redux/actions/editUserProfile';
import { addNewsRequest } from '../../redux/actions/addNews';
import BasicAlert from '../Alert/Alert';

import {
  ADD_NEWS,
  EDIT_PROFILE,
  ADD_NEWS_FIELDS,
  EDIT_USER_PROFILE_FIELDS,
  ADD_NEWS_VALUES,
  ADD_NEWS_TITLE,
  EDIT_USER_PROFILE_TITLE,
  ADD_NEWS_SCHEMA,
  EDIT_USER_PROFILE_SCHEMA,
  EDIT_USER_PROFILE_VALUES,
} from './constants';

import './NewsOrProfileForm.css';

function NewsOrProfileForm() {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal.modalType);
  const userEditError = useSelector((state) => state.users.editUserProfileError);
  const [picture, setPicture] = useState();
  const isAddNewsModal = modalType === 'addNews';
  const currentFields = isAddNewsModal ? ADD_NEWS_FIELDS : EDIT_USER_PROFILE_FIELDS;
  const initialValues = isAddNewsModal ? ADD_NEWS_VALUES : EDIT_USER_PROFILE_VALUES;
  const currentTitle = isAddNewsModal ? ADD_NEWS_TITLE : EDIT_USER_PROFILE_TITLE;
  const validationSchema = isAddNewsModal ? ADD_NEWS_SCHEMA : EDIT_USER_PROFILE_SCHEMA;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (isAddNewsModal) {
        dispatch(addNewsRequest({ values, picture }));
      } else {
        dispatch(editUserProfileRequested({ values, picture }));
      }
    },
  });
  const onChange = (event) => {
    setPicture(event.target.files[0]);
  };
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <h1>{currentTitle}</h1>
      {currentFields.map((item) => (
        <TextField
          className="text-field"
          fullWidth
          key={item}
          id={item}
          name={item}
          type={item}
          label={item}
          onBlur={formik.handleBlur}
          value={formik.values[item]}
          onChange={formik.handleChange}
          error={formik.touched[item] && !!formik.errors[item]}
          helperText={formik.touched[item] && formik.errors[item]}
        />
      ))}
      <Button
        className="input-button"
        color="primary"
        variant="contained"
        fullWidth
      >
        <input
          className="change-picture"
          type="file"
          onChange={onChange}
        />
      </Button>
      <Button
        disabled={!(formik.dirty) && !picture}
        className="button"
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
      >
        {isAddNewsModal ? ADD_NEWS : EDIT_PROFILE}
      </Button>
      {userEditError && <BasicAlert severity="error" message={userEditError} />}
    </form>
  );
}

export default memo(NewsOrProfileForm);
