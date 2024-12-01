import * as yup from 'yup';

import { REG_EXP } from '@/constants/regex';

export const SINAGE_DEVICE_REGISTER_SCHEMA = yup.object().shape({
  managerName: yup.string().required('담당자를 입력해주세요.'),
  managerMobile: yup
    .string()
    .required('담당자 연락처를 입력해주세요.')
    .matches(REG_EXP.PHONE_NUMBER, '유효하지 않은 연락처 형식입니다.'),
  managerEmail: yup
    .string()
    .email('유효하지 않은 이메일 형식입니다.')
    .required('이메일을 입력해주세요.'),
  visitAddr: yup.string().required('방문 주소를 입력해주세요.'),
  deviceSerialNum: yup.string().required('시리얼 번호를 입력해주세요.'),
  deviceName: yup.string().required('기기 등록명을 입력해주세요.'),
  // required 옵션이 없어 default 안넣어주면 string | undefined로 타입이 정의되어 default 넣어주었습니다.
  askExplanation: yup.string().default(''),
});

export const SIGNAGE_PROJECT_REGISTER_SCHEMA = yup.object().shape({
  projectName: yup.string().required('프로젝트명을 입력해주세요.'),
  ratio: yup.string().oneOf(['HOR_16_9', 'VER_9_16']).required('비율을 선택해주세요.'),
  contentId: yup
    .array()
    .of(yup.number())
    .min(1, '콘텐츠를 추가해주세요.')
    .required('콘텐츠를 추가해주세요.'),
  displayTime: yup.number().required('표시 시간을 선택해주세요.'),
});

export const SIGNAGE_PROJECT_EDIT_SCHEMA = yup.object().shape({
  projectName: yup.string().required('프로젝트명을 입력해주세요.'),
  contentId: yup
    .array()
    .of(yup.number())
    .min(1, '콘텐츠를 추가해주세요.')
    .required('콘텐츠를 추가해주세요.'),
  displayTime: yup.number().required('표시 시간을 선택해주세요.'),
});

export const SIGNAGE_RESERVE_REGISTER_SCHEMA = yup.object().shape({
  projectId: yup.number().positive('프로젝트를 선택해주세요.').required('프로젝트를 선택해주세요.'),
  reserveStartDt: yup
    .string()
    .required('예약날짜를 입력해주세요.')
    .min(1, '예약날짜를 입력해주세요.'),
  reserveEndDt: yup
    .string()
    .required('예약날짜를 입력해주세요.')
    .min(1, '예약날짜를 입력해주세요.'),
});

export const SIGNAGE_RESERVE_EDIT_SCHEMA = yup.object().shape({
  projectId: yup.number().positive('프로젝트를 선택해주세요.').required('프로젝트를 선택해주세요.'),
  reserveStartDt: yup
    .string()
    .required('예약날짜를 입력해주세요.')
    .min(1, '예약날짜를 입력해주세요.'),
  reserveEndDt: yup
    .string()
    .required('예약날짜를 입력해주세요.')
    .min(1, '예약날짜를 입력해주세요.'),
});

export const SIGNAGE_PROJECT_COPY_SCHEMA = yup.object().shape({
  projectName: yup.string().required('프로젝트명을 입력해주세요.'),
  contentId: yup
    .array()
    .of(yup.number())
    .min(1, '콘텐츠를 추가해주세요.')
    .required('콘텐츠를 추가해주세요.'),
  displayTime: yup.number().required('표시 시간을 선택해주세요.'),
  reserveStartDt: yup
    .string()
    .required('예약날짜를 입력해주세요.')
    .min(1, '예약날짜를 입력해주세요.'),
  reserveEndDt: yup
    .string()
    .required('예약날짜를 입력해주세요.')
    .min(1, '예약날짜를 입력해주세요.'),
});
