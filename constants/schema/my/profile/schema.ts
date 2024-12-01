import * as yup from 'yup';

import { SIZE } from '@/constants/file';
import { MAX_LENGTH } from '@/constants/input';
import { REG_EXP } from '@/constants/regex';
import { STEPS } from '@/constants/steps';

type MemberSteps = (typeof STEPS.MY.PROFILE_MEMBER)[number];
type BusinessSteps = (typeof STEPS.MY.PROFILE_BUSINESS)[number];
type ApartmentSteps = (typeof STEPS.MY.PROFILE_APARTMENT)[number];
type GvmtSteps = (typeof STEPS.MY.PROFILE_GVMT)[number];
type LocalNewspaperSteps = (typeof STEPS.MY.PROFILE_LOCAL_NEWSPAPER)[number];

const SCHEMA = <T extends string>(schema: Record<T, yup.AnyObjectSchema>) => schema;

export const MEMBER_PROFILE_SCHEMA = SCHEMA<MemberSteps>({
  info: yup.object().shape({}),
  'nickname-edit': yup.object().shape({
    nickname: yup
      .string()
      .required('닉네임을 입력해주세요.')
      .matches(
        REG_EXP.NICKNAME,
        `닉네임은 1 ~ ${MAX_LENGTH.NICKNAME}글자 한글, 영문, 숫자만 입력 가능합니다.`
      )
      .max(MAX_LENGTH.NICKNAME, `${MAX_LENGTH.NICKNAME}자 이하로 입력해주세요.`),
  }),
  'phoneNumber-auth': yup.object().shape({
    name: yup
      .string()
      .required('이름을 입력해주세요.')
      .matches(REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
    newPhoneNumber: yup
      .string()
      .required('휴대폰번호를 입력해주세요.')
      .matches(REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
  }),
  'phoneNumber-edit': yup.object().shape({}),
  'password-auth': yup.object().shape({
    currentPassword: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
  }),
  'password-edit': yup.object().shape({
    newPassword: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
    newPasswordConfirm: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .oneOf([yup.ref('newPassword'), ''], '비밀번호가 일치하지 않습니다.'),
  }),
  'email-auth': yup.object().shape({
    newEmail: yup
      .string()
      .required('이메일을 입력해주세요.')
      .matches(REG_EXP.EMAIL, '올바른 이메일 형식이 아닙니다.'),
  }),
  'email-edit': yup.object().shape({}),
});

export const BUSINESS_PROFILE_SCHEMA = SCHEMA<BusinessSteps>({
  info: yup.object().shape({
    homepageUrl: yup
      .string()
      .notRequired()
      .test('is-valid-url', 'URL은 http:// 또는 https://로 시작해야 합니다.', (value) => {
        if (!value) return true;
        return REG_EXP.HOMEPAGE_URL.test(value);
      })
      .url('올바른 URL 형식이 아닙니다.'),
    licenseFile: yup
      .mixed()
      .required('사업자등록증을 첨부해주세요.')
      .test('fileSize', `${SIZE.CONVERT.MAX_DOC_FILE_MB} 이하로 업로드해주세요.`, (value) => {
        if (value instanceof File || (value instanceof FileList && value.length > 0)) {
          const file = value instanceof File ? value : value[0];
          return file.size <= SIZE.MAX_DOC_FILE;
        }

        return false;
      }),
  }),
  'nickname-edit': yup.object().shape({
    nickname: yup
      .string()
      .required('닉네임을 입력해주세요.')
      .matches(
        REG_EXP.NICKNAME,
        `닉네임은 1 ~ ${MAX_LENGTH.NICKNAME}글자 한글, 영문, 숫자만 입력 가능합니다.`
      )
      .max(MAX_LENGTH.NICKNAME, `${MAX_LENGTH.NICKNAME}자 이하로 입력해주세요.`),
  }),
  'phoneNumber-auth': yup.object().shape({
    name: yup
      .string()
      .required('이름을 입력해주세요.')
      .matches(REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
    newPhoneNumber: yup
      .string()
      .required('휴대폰번호를 입력해주세요.')
      .matches(REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
  }),
  'phoneNumber-edit': yup.object().shape({}),
  'password-auth': yup.object().shape({
    currentPassword: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
  }),
  'password-edit': yup.object().shape({
    newPassword: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
    newPasswordConfirm: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .oneOf([yup.ref('newPassword'), ''], '비밀번호가 일치하지 않습니다.'),
  }),
  'email-auth': yup.object().shape({
    newEmail: yup
      .string()
      .required('이메일을 입력해주세요.')
      .matches(REG_EXP.EMAIL, '올바른 이메일 형식이 아닙니다.'),
  }),
  'email-edit': yup.object().shape({}),
});

export const APARTMENT_PROFILE_SCHEMA = SCHEMA<ApartmentSteps>({
  info: yup.object().shape({
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
      .required('임명장 또는 재직증명서를 첨부해주세요.')
      .test('fileSize', `${SIZE.CONVERT.MAX_DOC_FILE_MB} 이하로 업로드해주세요.`, (value) => {
        if (value instanceof File || (value instanceof FileList && value.length > 0)) {
          const file = value instanceof File ? value : value[0];
          return file.size <= SIZE.MAX_DOC_FILE;
        }

        return false;
      }),
  }),
  'nickname-edit': yup.object().shape({
    nickname: yup
      .string()
      .required('닉네임을 입력해주세요.')
      .matches(
        REG_EXP.NICKNAME,
        `닉네임은 1 ~ ${MAX_LENGTH.NICKNAME}글자 한글, 영문, 숫자만 입력 가능합니다.`
      )
      .max(MAX_LENGTH.NICKNAME, `${MAX_LENGTH.NICKNAME}자 이하로 입력해주세요.`),
  }),
  'phoneNumber-auth': yup.object().shape({
    name: yup
      .string()
      .required('이름을 입력해주세요.')
      .matches(REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
    newPhoneNumber: yup
      .string()
      .required('휴대폰번호를 입력해주세요.')
      .matches(REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
  }),
  'phoneNumber-edit': yup.object().shape({}),
  'password-auth': yup.object().shape({
    currentPassword: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
  }),
  'password-edit': yup.object().shape({
    newPassword: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
    newPasswordConfirm: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .oneOf([yup.ref('newPassword'), ''], '비밀번호가 일치하지 않습니다.'),
  }),
  'email-auth': yup.object().shape({
    newEmail: yup
      .string()
      .required('이메일을 입력해주세요.')
      .matches(REG_EXP.EMAIL, '올바른 이메일 형식이 아닙니다.'),
  }),
  'email-edit': yup.object().shape({}),
});

export const GVMT_PROFILE_SCHEMA = SCHEMA<GvmtSteps>({
  info: yup.object().shape({
    employmentFile: yup
      .mixed()
      .required('공무원 재직증명서를 첨부해주세요.')
      .test('fileSize', `${SIZE.CONVERT.MAX_DOC_FILE_MB} 이하로 업로드해주세요.`, (value) => {
        if (value instanceof File || (value instanceof FileList && value.length > 0)) {
          const file = value instanceof File ? value : value[0];
          return file.size <= SIZE.MAX_DOC_FILE;
        }

        return false;
      }),
  }),
  'nickname-edit': yup.object().shape({
    nickname: yup
      .string()
      .required('닉네임을 입력해주세요.')
      .matches(
        REG_EXP.NICKNAME,
        `닉네임은 1 ~ ${MAX_LENGTH.NICKNAME}글자 한글, 영문, 숫자만 입력 가능합니다.`
      )
      .max(MAX_LENGTH.NICKNAME, `${MAX_LENGTH.NICKNAME}자 이하로 입력해주세요.`),
  }),
  'phoneNumber-auth': yup.object().shape({
    name: yup
      .string()
      .required('이름을 입력해주세요.')
      .matches(REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
    newPhoneNumber: yup
      .string()
      .required('휴대폰번호를 입력해주세요.')
      .matches(REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
  }),
  'phoneNumber-edit': yup.object().shape({}),
  'password-auth': yup.object().shape({
    currentPassword: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
  }),
  'password-edit': yup.object().shape({
    newPassword: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
    newPasswordConfirm: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .oneOf([yup.ref('newPassword'), ''], '비밀번호가 일치하지 않습니다.'),
  }),
  'email-auth': yup.object().shape({
    newEmail: yup
      .string()
      .required('이메일을 입력해주세요.')
      .matches(REG_EXP.EMAIL, '올바른 이메일 형식이 아닙니다.'),
  }),
  'email-edit': yup.object().shape({}),
});

export const LOCAL_NEWSPAPER_PROFILE_SCHEMA = SCHEMA<LocalNewspaperSteps>({
  info: yup.object().shape({
    homepageUrl: yup
      .string()
      .notRequired()
      .test('is-valid-url', 'URL은 http:// 또는 https://로 시작해야 합니다.', (value) => {
        if (!value) return true;
        return REG_EXP.HOMEPAGE_URL.test(value);
      })
      .url('올바른 URL 형식이 아닙니다.'),

    licenseFile: yup
      .mixed()
      .required('사업자등록증을 첨부해주세요.')
      .test('fileSize', `${SIZE.CONVERT.MAX_DOC_FILE_MB} 이하로 업로드해주세요.`, (value) => {
        if (value instanceof File || (value instanceof FileList && value.length > 0)) {
          const file = value instanceof File ? value : value[0];
          return file.size <= SIZE.MAX_DOC_FILE;
        }

        return false;
      }),
    employmentFile: yup
      .mixed()
      .required('임명장 또는 재직증명서를 첨부해주세요.')
      .test('fileSize', `${SIZE.CONVERT.MAX_DOC_FILE_MB} 이하로 업로드해주세요.`, (value) => {
        if (value instanceof File || (value instanceof FileList && value.length > 0)) {
          const file = value instanceof File ? value : value[0];
          return file.size <= SIZE.MAX_DOC_FILE;
        }

        return false;
      }),
    serviceName: yup.string().required('신문사명을 입력해주세요.'),
  }),
  'nickname-edit': yup.object().shape({
    nickname: yup
      .string()
      .required('닉네임을 입력해주세요.')
      .matches(
        REG_EXP.NICKNAME,
        `닉네임은 1 ~ ${MAX_LENGTH.NICKNAME}글자 한글, 영문, 숫자만 입력 가능합니다.`
      )
      .max(MAX_LENGTH.NICKNAME, `${MAX_LENGTH.NICKNAME}자 이하로 입력해주세요.`),
  }),
  'phoneNumber-auth': yup.object().shape({
    name: yup
      .string()
      .required('이름을 입력해주세요.')
      .matches(REG_EXP.NAME, '올바른 이름 형식이 아닙니다.'),
    newPhoneNumber: yup
      .string()
      .required('휴대폰번호를 입력해주세요.')
      .matches(REG_EXP.PHONE_NUMBER, '올바른 휴대폰번호 형식이 아닙니다.'),
  }),
  'phoneNumber-edit': yup.object().shape({}),
  'password-auth': yup.object().shape({
    currentPassword: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
  }),
  'password-edit': yup.object().shape({
    newPassword: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(REG_EXP.PASSWORD, '올바른 비밀번호 형식이 아닙니다.'),
    newPasswordConfirm: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .oneOf([yup.ref('newPassword'), ''], '비밀번호가 일치하지 않습니다.'),
  }),
  'email-auth': yup.object().shape({
    newEmail: yup
      .string()
      .required('이메일을 입력해주세요.')
      .matches(REG_EXP.EMAIL, '올바른 이메일 형식이 아닙니다.'),
  }),
  'email-edit': yup.object().shape({}),
});
