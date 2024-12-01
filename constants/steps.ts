export const COMMON_STEPS = {
  AUTH: {
    SIGNUP_COMMON: [
      'terms',
      'phone-auth-request',
      'phone-auth-confirm',
      'email-auth',
      'location',
      'localbox',
    ] as const,
    FIND_ACCOUNT_MOBILE_COMMON: ['mobile-input', 'mobile-auth', 'complete'] as const,
    FIND_ACCOUNT_EMAIL_COMMON: ['email-input', 'email-auth', 'complete'] as const,
    FIND_PASSWORD_MOBILE_COMMON: [
      'mobile-input',
      'mobile-auth',
      'change-password',
      'complete',
    ] as const,
    FIND_PASSWORD_EMAIL_COMMON: [
      'email-input',
      'email-auth',
      'change-password',
      'complete',
    ] as const,
  },
  MY: {
    PROFILE_COMMON: [
      'info',
      'nickname-edit',
      'phoneNumber-auth',
      'phoneNumber-edit',
      'password-auth',
      'password-edit',
      'email-edit',
      'email-auth',
    ] as const,
  },
  VILLAGES: {
    CONTENT_COMMON: ['expose', 'form', 'complete'] as const,
  },
  RESIDENTS: {
    SIGNAGE_EDITOR_COMMON: ['crop', 'edit', 'complete'] as const,
    MOBILE_CONTENT_COMMON: ['mobile_form', 'complete'] as const,
    SIGNAGE_CONTENT_COMMON: ['signage_form'] as const,
    MIXED_CONTENT_COMMON: ['mix_mobile_form', 'mix_signage_form'] as const,
  },
  ADS: {
    SIGNAGE_EDITOR_COMMON: ['crop', 'edit', 'complete'] as const,
    MOBILE_CONTENT_COMMON: ['mobile_form', 'complete'] as const,
    SIGNAGE_CONTENT_COMMON: ['signage_form'] as const,
    MIXED_CONTENT_COMMON: ['mix_mobile_form', 'mix_signage_form'] as const,
  },
} as const;

export const STEPS = {
  AUTH: {
    SIGNUP_MEMBER: [...COMMON_STEPS.AUTH.SIGNUP_COMMON, 'complete'] as const,
    SIGNUP_BUSINESS: [
      ...COMMON_STEPS.AUTH.SIGNUP_COMMON,
      'business-info',
      'business-address',
      'approving',
    ] as const,
    SIGNUP_APARTMENT: [...COMMON_STEPS.AUTH.SIGNUP_COMMON, 'apartment-info', 'approving'] as const,
    SIGNUP_GVMT: [...COMMON_STEPS.AUTH.SIGNUP_COMMON, 'gvmt-info', 'approving'] as const,
    SIGNUP_LOCAL_NEWSPAPER: [
      ...COMMON_STEPS.AUTH.SIGNUP_COMMON,
      'localNewspaper-info',
      'localNewspaper-address',
      'approving',
    ] as const,
    FIND_ACCOUNT_MOBILE: [...COMMON_STEPS.AUTH.FIND_ACCOUNT_MOBILE_COMMON] as const,
    FIND_ACCOUNT_EMAIL: [...COMMON_STEPS.AUTH.FIND_ACCOUNT_EMAIL_COMMON] as const,
    FIND_PASSWORD_MOBILE: [...COMMON_STEPS.AUTH.FIND_PASSWORD_MOBILE_COMMON] as const,
    FIND_PASSWORD_EMAIL: [...COMMON_STEPS.AUTH.FIND_PASSWORD_EMAIL_COMMON] as const,
  },
  MY: {
    PROFILE_MEMBER: [...COMMON_STEPS.MY.PROFILE_COMMON] as const,
    PROFILE_BUSINESS: [...COMMON_STEPS.MY.PROFILE_COMMON] as const,
    PROFILE_APARTMENT: [...COMMON_STEPS.MY.PROFILE_COMMON] as const,
    PROFILE_GVMT: [...COMMON_STEPS.MY.PROFILE_COMMON] as const,
    PROFILE_LOCAL_NEWSPAPER: [...COMMON_STEPS.MY.PROFILE_COMMON] as const,
    WITHDRAW: ['warning', 'feedback'] as const,
    QR_CERTIFY: ['certify-info', 'qr-scan'],
    SUB_CONTENT_INSERT: ['paste', 'select-content', 'display-time'] as const,
  },
  VILLAGES: {
    CONTENT_REGISTER: [...COMMON_STEPS.VILLAGES.CONTENT_COMMON] as const,
    CONTENT_EDIT: [...COMMON_STEPS.VILLAGES.CONTENT_COMMON] as const,
  },
  RESIDENTS: {
    MOBILE_REGISTER: [...COMMON_STEPS.RESIDENTS.MOBILE_CONTENT_COMMON] as const,
    SIGNAGE_REGISTER: [
      ...COMMON_STEPS.RESIDENTS.SIGNAGE_CONTENT_COMMON,
      ...COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON,
    ] as const,
    MIXED_REGISTER: [
      ...COMMON_STEPS.RESIDENTS.MIXED_CONTENT_COMMON,
      ...COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON,
    ] as const,
    MOBILE_EDIT: [...COMMON_STEPS.RESIDENTS.MOBILE_CONTENT_COMMON] as const,
    SIGNAGE_EDIT: [
      ...COMMON_STEPS.RESIDENTS.SIGNAGE_CONTENT_COMMON,
      ...COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON,
    ] as const,
    MIXED_EDIT: [
      ...COMMON_STEPS.RESIDENTS.MIXED_CONTENT_COMMON,
      ...COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON,
    ] as const,
    MAIN_ADD_REGISTER: [
      'init_setting',
      'main_Form',
      ...COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON,
    ] as const,
    SIGNAGE_ADD_REGISTER: [
      'init_setting',
      'signage_Form',
      ...COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON,
    ] as const,
  },
  ADS: {
    MOBILE_REGISTER: [...COMMON_STEPS.ADS.MOBILE_CONTENT_COMMON] as const,
    SIGNAGE_REGISTER: [
      ...COMMON_STEPS.ADS.SIGNAGE_CONTENT_COMMON,
      ...COMMON_STEPS.ADS.SIGNAGE_EDITOR_COMMON,
    ] as const,
    MIXED_REGISTER: [
      ...COMMON_STEPS.ADS.MIXED_CONTENT_COMMON,
      ...COMMON_STEPS.ADS.SIGNAGE_EDITOR_COMMON,
    ] as const,
    MOBILE_EDIT: [...COMMON_STEPS.ADS.MOBILE_CONTENT_COMMON] as const,
    SIGNAGE_EDIT: [
      ...COMMON_STEPS.ADS.SIGNAGE_CONTENT_COMMON,
      ...COMMON_STEPS.ADS.SIGNAGE_EDITOR_COMMON,
    ] as const,
    MIXED_EDIT: [
      ...COMMON_STEPS.ADS.MIXED_CONTENT_COMMON,
      ...COMMON_STEPS.ADS.SIGNAGE_EDITOR_COMMON,
    ] as const,
    MAIN_ADD_REGISTER: ['main_Form', ...COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON] as const,
    SIGNAGE_ADD_REGISTER: [
      'init_setting',
      'signage_form',
      ...COMMON_STEPS.RESIDENTS.SIGNAGE_EDITOR_COMMON,
    ] as const,
  },
} as const;
