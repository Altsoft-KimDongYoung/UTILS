import * as yup from 'yup';

export const createMobileSchema = () => {
  return yup.object().shape({
    title: yup
      .string()
      .required('콘텐츠 제목을 입력해주세요.')
      .max(30, '글자수를 초과 하였습니다.'),
    body: yup.string().required('내용을 입력해주세요.'),
    bodyText: yup.string().required('내용을 입력해주세요.').max(2001, ' '),
  });
};

export const createSignageSchema = () => {
  return yup.object().shape({
    title: yup
      .string()
      .required('콘텐츠 제목을 입력해주세요.')
      .max(30, '글자수를 초과 하였습니다.'),
    summary: yup.string().required('내용을 입력해주세요.').max(216, ' '),
  });
};

export const MOBILE_CONTENT_SCHEMA = createMobileSchema();

export const SIGNAGE_CONTENT_SCHEMA = createSignageSchema();

export const MIXED_CONTENT_SCHEMA = createMobileSchema().shape({
  summary: yup.string().required('내용을 입력해주세요.').max(216, ' '),
});
