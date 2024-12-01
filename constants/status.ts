/**
 * TODO: 다른 도메인에서 아래 상태값들을 사용할 필요가 없는 경우,
 * 삭제가 필요합니다.
 * -> 로그인/회원가입/회원 정보 페이지 구현시 학인 예정입니다.
 */
export const SIGNUP_APPROVAL_STATUS = {
  WAITING: 'waiting',
  REJECT: 'reject',
  BLACKLIST: 'blacklist',
} as const;

/**
 * TODO: 다른 도메인에서 아래 상태값들을 사용할 필요가 없는 경우,
 * 삭제가 필요합니다.
 * -> 로그인/회원가입/회원 정보 페이지 구현시 학인 예정입니다.
 */
export const SIGNUP_APPROVAL_STATUS_LABEL = {
  WAITING: '승인 대기',
  REJECT: '반려',
  BLACKLIST: '이용중지',
} as const;

export const WITHDRAWAL_REASONS = {
  PURPOSE_DELETE_PRIVACY_INFO: {
    value: 'PURPOSE_DELETE_PRIVACY_INFO',
    label: '사생활 기록 삭제 목적',
  },
  RESTRICTION_USE_DUE_SANCTIONS: {
    value: 'RESTRICTION_USE_DUE_SANCTIONS',
    label: '제재조치로 이용제한됨',
  },
  PRIVACY_INFO_CONCERNS: {
    value: 'PRIVACY_INFO_CONCERNS',
    label: '개인정보 및 보안 우려',
  },
  SERVICE_INCONVENIENCE: {
    value: 'SERVICE_INCONVENIENCE',
    label: '서비스 기능 불편',
  },
  SIMILAR_SERVICE_IN_THE_OTHER_BRANDS: {
    value: 'SIMILAR_SERVICE_IN_THE_OTHER_BRANDS',
    label: '타브랜드의 유사서비스 이용',
  },
  LACK_MEMBERSHIP_BENEFITS: {
    value: 'LACK_MEMBERSHIP_BENEFITS',
    label: '회원 혜택 부족',
  },
  DONT_KNOW_HOW_USE: {
    value: 'DONT_KNOW_HOW_USE',
    label: '사용 방법을 모르겠음',
  },
  OTHER: {
    value: 'OTHER',
    label: '기타',
  },
} as const;

export const PUSH_MESSAGE_STATUS = {
  SIGNAGE_AUTH_CODE_ARRIVE: 'SIGNAGE_AUTH_CODE_ARRIVE',
  SIGNAGE_AUTH_COMPLETE: 'SIGNAGE_AUTH_COMPLETE',
  NOTIFICATION_ARRIVE: 'NOTIFICATION_ARRIVE', // '알림 도착',
  NOTICE_ARRIVE: 'NOTICE_ARRIVE', // '공지사항 도착',
  LOCALBOX_ARRIVE: 'LOCALBOX_ARRIVE', // '유저가 로컬박스 영역에 도착'
} as const;
