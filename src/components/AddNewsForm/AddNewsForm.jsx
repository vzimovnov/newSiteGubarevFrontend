import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { Button, TextField } from '@mui/material';

import { addNewsRequest } from '../../redux/actions/addNews';
import BasicAlert from '../Alert/Alert';

import {
  ADD_NEWS_FIELDS,
  ADD_NEWS_VALUES,
  ADD_NEWS_TITLE,
  ADD_NEWS_SCHEMA,
} from './constants';

function AddNews() {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal.modalType);
  const error = useSelector((state) => state.auth.error);
  const [picture, setPicture] = useState();
  const isAddNewsModal = modalType === 'addNews';
  const currentFields = isAddNewsModal ? ADD_NEWS_FIELDS : null;
  const initialValues = isAddNewsModal ? ADD_NEWS_VALUES : null;
  const currentTitle = isAddNewsModal ? ADD_NEWS_TITLE : null;
  const validationSchema = isAddNewsModal ? ADD_NEWS_SCHEMA : null;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(addNewsRequest({ values, picture }));
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
      <input
        type="file"
        onChange={onChange}
      />
      <Button
        className="button"
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
      >
        {modalType}
      </Button>
      {error && <BasicAlert severity="error" message={error} />}
    </form>
  );
}

export default memo(AddNews);
