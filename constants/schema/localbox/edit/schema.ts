import * as yup from 'yup';

import { MAX_LENGTH } from '@/constants/input';
import { REG_EXP } from '@/constants/regex';

const SCHEMA = (schema: yup.AnyObjectSchema) => schema;

export const LOCALBOX_EDIT_SCHEMA = SCHEMA(
  yup.object().shape({
    nickname: yup
      .string()
      .required('닉네임을 입력해주세요.')
      .matches(
        REG_EXP.NICKNAME,
        `닉네임은 1 ~ ${MAX_LENGTH.NICKNAME}글자 한글, 영문, 숫자만 입력 가능합니다.`
      )
      .max(MAX_LENGTH.NICKNAME, `${MAX_LENGTH.NICKNAME}자 이하로 입력해주세요.`),
    localboxUnknownUrl: yup
      .string()
      .transform((value) => (!value ? null : value)) // 빈 문자열을 null로 변환
      .nullable()
      .matches(REG_EXP.HOMEPAGE_URL, 'URL은 http:// 또는 https://로 시작해야 합니다.')
      .matches(/^[a-zA-Z0-9\s:/.-]+$/, 'URL은 영문자만을 입력 가능합니다.'),
  })
);
