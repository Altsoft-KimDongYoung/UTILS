import * as yup from 'yup';

import { SIZE } from '@/constants/file';
import { REG_EXP } from '@/constants/regex';

export const createSignupSchema = () => {
  return yup.object().shape({
    name: yup
      .string()
      .required('이름을 입력해주세요.')
      .matches(REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
    mobile: yup
      .string()
      .required('휴대폰번호를 입력해주세요.')
      .matches(REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
    nickname: yup
      .string()
      .required('닉네임을 입력해주세요.')
      .matches(REG_EXP.NICKNAME, '닉네임은 1 ~ 12글자 한글, 영문, 숫자만 입력 가능합니다.')
      .max(12, '12자 이하로 입력해주세요.'),
    loginId: yup
      .string()
      .required('아이디를 입력해주세요.')
      .matches(REG_EXP.ID, '아이디는 6 ~ 12글자 영문, 숫자만 입력 가능합니다.')
      .max(12, '12자 이하로 입력해주세요.'),
    password: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(REG_EXP.PASSWORD, '비밀번호는 8자 이상의 문자, 숫자, 특수문자만 입력 가능합니다.'),
    passwordConfirm: yup
      .string()
      .required('위의 비밀번호와 동일하게 입력해주세요.')
      .oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.'),
  });
};

export const SIGNUP_MEMBER_SCHEMA = createSignupSchema().shape({
  email: yup.string().email('이메일 형식이 아닙니다.'),
});

export const SIGNUP_BUSINESS_SCHEMA = createSignupSchema().shape({
  businessName: yup.string().required('상호명을 입력해주세요.'),
  businessNumber: yup
    .string()
    .required('사업자번호를 입력해주세요.')
    .matches(REG_EXP.BUSINESS_NUMBER, '올바른 사업자번호 형식이 아닙니다.'),
  openDt: yup.string().required('개업일자룰 입력해주세요.'),
  ownerName: yup.string().required('대표자명을 입력해주세요.'),
  businessContactNumber: yup
    .string()
    .required('전화번호를 입력해주세요.')
    .matches(REG_EXP.CONTACT_NUMBER, '올바른 전화번호 형식이 아닙니다.'),
  baseAddr: yup.string().required('사업자등록증 주소를 입력해주세요.'),
  homepageUrl: yup
    .string()
    .notRequired()
    .test('is-valid-url', 'URL은 http:// 또는 https://로 시작해야 합니다.', (value) => {
      if (!value) return true;
      return REG_EXP.HOMEPAGE_URL.test(value);
    })
    .url('올바른 URL 형식이 아닙니다.'),
  email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
  licenseImg: yup
    .mixed()
    .required('파일을 첨부해주세요.')
    .test('fileSize', `${SIZE.CONVERT.MAX_DOC_FILE_MB} 이하로 업로드해주세요.`, (value) => {
      if (value instanceof File || (value instanceof FileList && value.length > 0)) {
        const file = value instanceof File ? value : value[0];
        return file.size <= SIZE.MAX_DOC_FILE;
      }

      return false;
    }),
}) as yup.AnyObjectSchema;

export const SIGNUP_APARTMENT_SCHEMA = createSignupSchema().shape({
  email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
  organizationName: yup.string().required('아파트 단지명을 입력헤주세요.'),
  ownerName: yup.string().required('대표자명을 입력해주세요.'),
  contactNumber: yup
    .string()
    .required('관리소 전화번호를 입력해주세요.')
    .matches(REG_EXP.CONTACT_NUMBER, '올바른 전화번호 형식이 아닙니다.'),
  homepageUrl: yup
    .string()
    .notRequired()
    .test('is-valid-url', 'URL은 http:// 또는 https://로 시작해야 합니다.', (value) => {
      if (!value) return true;
      return REG_EXP.HOMEPAGE_URL.test(value);
    })
    .url('올바른 URL 형식이 아닙니다.'),
  employmentFile: yup
    .mixed()
    .required('파일을 첨부해주세요.')
    .test('fileSize', `${SIZE.CONVERT.MAX_DOC_FILE_MB} 이하로 업로드해주세요.`, (value) => {
      if (value instanceof File || (value instanceof FileList && value.length > 0)) {
        const file = value instanceof File ? value : value[0];
        return file.size <= SIZE.MAX_DOC_FILE;
      }

      return false;
    }),
}) as yup.AnyObjectSchema;

export const SIGNUP_GVMT_SCHEMA = createSignupSchema().shape({
  email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
  organizationName: yup.string().required('관공서명을 입력해주세요.'),
  contactNumber: yup
    .string()
    .required('관공서 연락처를 입력해주세요.')
    .matches(REG_EXP.CONTACT_NUMBER, '올바른 전화번호 형식이 아닙니다.'),
  contactName: yup.string().required('담당자명울 입력해주세요.'),
  employmentFile: yup
    .mixed()
    .required('파일을 첨부해주세요.')
    .test('fileSize', `${SIZE.CONVERT.MAX_DOC_FILE_MB} 이하로 업로드해주세요.`, (value) => {
      if (value instanceof File || (value instanceof FileList && value.length > 0)) {
        const file = value instanceof File ? value : value[0];
        return file.size <= SIZE.MAX_DOC_FILE;
      }

      return false;
    }),
}) as yup.AnyObjectSchema;

export const SIGNUP_LOCAL_NEWSPAPER_SCHEMA = createSignupSchema().shape({
  email: yup.string().required('이메일을 입력해주세요.').email('이메일 형식이 아닙니다.'),
  businessName: yup.string().required('사업자명을 입력해주세요.'),
  businessNumber: yup.string().required('사업자번호를 입력해주세요.'),
  openDt: yup.string().required('개업일자를 입력해주세요.'),
  ownerName: yup.string().required('대표자명을 입력해주세요.').max(15, '15자 이하로 입력해주세요.'),
  businessContactNumber: yup
    .string()
    .required('신문사 연락처를 입력해주세요.')
    .matches(REG_EXP.CONTACT_NUMBER, '올바른 전화번호 형식이 아닙니다.'),
  newspaperName: yup
    .string()
    .required('신문사명을 입력해주세요.')
    .max(24, '올바른 형식이 아닙니다.'),
  newspaperRegNumber: yup
    .string()
    .required('신문사 등록번호를 입력해주세요.')
    .max(24, '올바른 형식이 아닙니다.'),
  baseAddr: yup.string().required('사업자등록증 주소를 입력해주세요.'),
  homepageUrl: yup
    .string()
    .notRequired()
    .test('is-valid-url', 'URL은 http:// 또는 https://로 시작해야 합니다.', (value) => {
      if (!value) return true;
      return REG_EXP.HOMEPAGE_URL.test(value);
    })
    .url('올바른 URL 형식이 아닙니다.'),
  licenseImg: yup
    .mixed()
    .required('파일을 첨부해주세요.')
    .test('fileSize', `${SIZE.CONVERT.MAX_DOC_FILE_MB} 이하로 업로드해주세요.`, (value) => {
      if (value instanceof File || (value instanceof FileList && value.length > 0)) {
        const file = value instanceof File ? value : value[0];
        return file.size <= SIZE.MAX_DOC_FILE;
      }

      return false;
    }),
  employmentFile: yup
    .mixed()
    .required('파일을 첨부해주세요.')
    .test('fileSize', `${SIZE.CONVERT.MAX_DOC_FILE_MB} 이하로 업로드해주세요.`, (value) => {
      if (value instanceof File || (value instanceof FileList && value.length > 0)) {
        const file = value instanceof File ? value : value[0];
        return file.size <= SIZE.MAX_DOC_FILE;
      }

      return false;
    }),
}) as yup.AnyObjectSchema;
