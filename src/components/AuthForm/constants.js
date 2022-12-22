import * as Yup from 'yup';

const LOGIN_TITLE = 'Login';
const REGISTRATION_TITLE = 'Registration';
const LOGIN_VALUES = {
  login: '',
  password: '',
};
const REGISTRATION_VALUES = {
  login: '',
  email: '',
  password: '',
};
const loginField = {
  name: 'login',
  type: 'text',
};
const passwordField = {
  name: 'password',
  type: 'password',
};
const nameField = {
  name: 'name',
  type: 'text',
};
const emailField = {
  name: 'email',
  type: 'email',
};
const LOGIN_FIELDS = [
  loginField,
  passwordField,
];
const REGISTRATION_FIELDS = [
  nameField,
  loginField,
  emailField,
  passwordField,
];

const loginValidate = {
  login: Yup.string()
    .min(3, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
};

const { login, password } = loginValidate;

const REGISTRATION_SCHEMA = Yup.object().shape({
  login,
  password,
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid Email')
    .required('Email Required'),
});

const LOGIN_SCHEMA = Yup.object().shape(loginValidate);

export {
  LOGIN_TITLE,
  REGISTRATION_TITLE,
  LOGIN_VALUES,
  REGISTRATION_VALUES,
  LOGIN_FIELDS,
  REGISTRATION_FIELDS,
  LOGIN_SCHEMA,
  REGISTRATION_SCHEMA,
};
