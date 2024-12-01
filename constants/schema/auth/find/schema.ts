import * as yup from 'yup';

import { REG_EXP } from '@/constants/regex';

export const createFindAccountSchema = () => {
  return yup.object().shape({
    name: yup
      .string()
      .required('이름을 입력해주세요.')
      .matches(REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
  });
};

export const FIND_ACCOUNT_MOBILE_SCHEMA = createFindAccountSchema().shape({
  mobile: yup
    .string()
    .required('휴대폰번호를 입력해주세요.')
    .matches(REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
});

export const FIND_ACCOUNT_EMAIL_SCHEMA = createFindAccountSchema().shape({
  email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
});

export const FIND_PASSWORD_MOBILE_SHCEMA = yup.object().shape({
  loginId: yup
    .string()
    .required('아이디를 입력해주세요.')
    .matches(REG_EXP.ID, '아이디는 6 ~ 12글자 영문, 숫자만 입력 가능합니다.')
    .max(12, '12자 이하로 입력해주세요.'),
  mobile: yup
    .string()
    .required('휴대폰번호를 입력해주세요.')
    .matches(REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(REG_EXP.PASSWORD, '비밀번호는 8자 이상의 문자, 숫자, 특수문자만 입력 가능합니다.'),
  passwordConfirm: yup
    .string()
    .required('비밀번호를 동일하게 입력해주세요.')
    .oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.'),
});

export const FIND_PASSWORD_EMAIL_SCHEMA = yup.object().shape({
  loginId: yup
    .string()
    .required('아이디를 입력해주세요.')
    .matches(REG_EXP.ID, '아이디는 6 ~ 12글자 영문, 숫자만 입력 가능합니다.')
    .max(12, '12자 이하로 입력해주세요.'),
  email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(REG_EXP.PASSWORD, '비밀번호는 8자 이상의 문자, 숫자, 특수문자만 입력 가능합니다.'),
  passwordConfirm: yup
    .string()
    .required('비밀번호를 동일하게 입력해주세요.')
    .oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.'),
});
