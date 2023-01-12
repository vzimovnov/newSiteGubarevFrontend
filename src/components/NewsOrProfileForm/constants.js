import * as Yup from 'yup';

const ADD_NEWS_TITLE = 'Add News';
const EDIT_USER_PROFILE_TITLE = 'Edit Profile';
const ADD_NEWS = 'Add News';
const EDIT_PROFILE = 'Edit Profile';

const ADD_NEWS_VALUES = {
  title: '',
  content: '',
  picture: '',
  tags: '',
};
const EDIT_USER_PROFILE_VALUES = {
  login: '',
};
const ADD_NEWS_FIELDS = ['title', 'content', 'tags'];
const EDIT_USER_PROFILE_FIELDS = ['login'];

const addNewsValidate = {
  title: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  content: Yup.string()
    .min(3, 'Too Short!')
    .max(255, 'Too Long!')
    .required('Required'),
  tags: Yup.string()
    .min(0, 'Too Short!')
    .max(100, 'Too Long!'),
};

const editUserProfileValidate = {
  login: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!'),
};

const ADD_NEWS_SCHEMA = Yup.object().shape(addNewsValidate);
const EDIT_USER_PROFILE_SCHEMA = Yup.object().shape(editUserProfileValidate);

export {
  ADD_NEWS,
  EDIT_PROFILE,
  ADD_NEWS_TITLE,
  EDIT_USER_PROFILE_TITLE,
  ADD_NEWS_VALUES,
  EDIT_USER_PROFILE_VALUES,
  ADD_NEWS_FIELDS,
  EDIT_USER_PROFILE_FIELDS,
  ADD_NEWS_SCHEMA,
  EDIT_USER_PROFILE_SCHEMA,
};
