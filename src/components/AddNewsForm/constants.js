import * as Yup from 'yup';

const ADD_NEWS_TITLE = 'Add News';

const ADD_NEWS_VALUES = {
  title: '',
  content: '',
  picture: '',
  tags: '',
};
const ADD_NEWS_FIELDS = ['title', 'content', 'tags'];
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

const ADD_NEWS_SCHEMA = Yup.object().shape(addNewsValidate);

export {
  ADD_NEWS_TITLE,
  ADD_NEWS_VALUES,
  ADD_NEWS_FIELDS,
  ADD_NEWS_SCHEMA,
};
