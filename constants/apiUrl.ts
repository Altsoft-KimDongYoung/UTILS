export const API_URL = {
  AUTH: {
    LOGIN: 'auth/login',
    LOGOUT: 'auth/logout',
    REFRESH_TOKEN: 'auth/refresh-token',
  },
  USER: {
    SEND_JOIN_MOBILE: 'user/send-join-mobile',
    SEND_JOIN_EMAIL: 'user/send-join-email',
    SEND_SMS_FOR_FIND_LOGIN_ID: 'user/send-sms-for-find-login-id',
    SEND_MAIL_FOR_FIND_LOGIN_ID: 'user/send-mail-for-find-login-id',
    SEND_SMS_RESET_PASSWORD: 'user/send-sms-reset-password',
    SEND_MAIL_RESET_PASSWORD: 'user/send-mail-reset-password',
    SEND_SMS_CHANGE_MOBILE: 'user/send-sms/change-mobile',
    SEND_MAIL_CHANGE_EMAIL: 'user/send-mail/change-email',
    JOIN_CONFIRM_MOBILE: 'user/join-confirm-mobile',
    JOIN_CONFIRM_EMAIL: 'user/join-confirm-email',
    FIND_LOGIN_ID_VIA_SMS_PIN_CODE: 'user/find-login-id-via-sms-pin-code',
    FIND_LOGIN_ID_VIA_MAIL_PIN_CODE: 'user/find-login-id-via-mail-pin-code',
    CONFIRM_SMS_CODE_FOR_RESET_PASSWORD: 'user/confirm-sms-code-for-reset-password',
    CONFIRM_MAIL_CODE_FOR_RESET_PASSWORD: 'user/confirm-mail-code-for-reset-password',
    CONFIRM_SMS_CHANGE_MOBILE: 'user/confirm-sms/change-mobile',
    CONFIRM_EMAIL_CHANGE_EMAIL: 'user/confirm-email/change-email',
    RESET_PASSWORD_AT_MOBILE_CERTIFY: 'user/reset-password-at-mobile-certify',
    RESET_PASSWORD_AT_MAIL_CERTIFY: 'user/reset-password-at-mail-certify',
    SIGNUP: 'user/signup',
    CHECK_DUPLICATE_LOGIN_ID: 'user/check-duplicate-login-id',
    MY_PROFILE: 'user/my-profile',
    CHECK_PASSWORD: 'user/check-password',
    PASSWORD: 'user/password',
    WITHDRAWAL: 'user/withdrawal',
    RANDOM_NICKNAME: 'user/random-nickname',
  },
  AREA: {
    POINT_MY_TOWN: 'area/point/my-town',
    ORGANIZATION_MY_TOWN: 'area/organization/my-town',
  },
  CONTENT: {
    FILE: 'content/file',
    VILLAGE_NEWS: 'content/village-news',
    RESIDENT_NEWS: 'content/resident-news',
    AD: 'content/ad',
    DISPLAY_AREA: 'content/display-area',
    MAIN_VILLAGE: 'content/main-village',
    MAIN_RESIDENT: 'content/main-resident',
    LIKE: 'content/like',
    DISLIKE: 'content/dislike',
    BOOKMARK: 'content/bookmark',
    BOOKMARK_MY_LOCALBOX_PAGE: 'content/bookmark/my-localbox-page',
    DETAIL: (contentId: number) => `content/${contentId}`,
    REPLY: {
      BASE: `content/reply`,
      ITEM: (contentsReplyId: number) => `content/reply/${contentsReplyId}`,
      LIKE: `content/reply/like`,
    },
    COUNT: 'content/count',
    RECENT_SEARCH_KEYWORD: `content/recent-search-keyword`,
    UPDATABLE_DELETABLE: (contentId: number) => `content/updatable-and-deletable/${contentId}`,
    TO_MIXED: {
      SIGNAGE: 'content/signage/to-mixed',
      MOBILE: 'content/mobile/to-mixed',
    },
    POSTING: 'content/posting',
    POSTING_DELETE: (contentId: number) => `content/posting/${contentId}`,
    DISPLAY_YN: 'content/display-yn',
  },
  CONTENT_TEMP: {
    BASE: 'content-temp',
    ITEM: (contentTempId: number) => `content-temp/${contentTempId}`,
    ITEMS: (contentTempIds: string | number) => `content-temp/${contentTempIds}`,
    VILLAGE_NEWS: 'content-temp/village-news',
    RESIDENT_NEWS: 'content-temp/resident-news',
    AD: 'content-temp/ad',
  },
  SIGNAGES: {
    SIGNAGE: {
      DEVICE: {
        SPEC: 'signage/device/spec',
        NAME_DUPLICATE_CHECK: 'signage/device/check-name',
        SERIAL_NUM_DUPLICATE_CHECK: 'signage/device/check-serial-num',
        REGISTER: 'signage/device/approval',
        APPROVED: 'signage/device/approved-device',
        DELETE: (deviceId: number) => `signage/device/${deviceId}`,
        PATCH_NAME: `signage/device/name`,
        RENDER_TYPE_PAGE: `signage/device/approval/localbox/display-can-type`,
      },
      GROUP: {
        PAID: 'signage/group/approved-pay',
        USE_REAPPLY_DEVICE_CAN_REGISTER: (groupId: number) =>
          `signage/device/group-can-reg/${groupId}`,
        REGISTER: 'signage/group/approval',
        APPLY_HISTORY: 'signage/group/approval/apply-history',
        NAME_DUPLICATE_CHECK: 'signage/group/check-name',
        RENDER_TYPE_PAGE: 'signage/group/approved/localbox/display-can-type',
        DETAIL: (groupId: number) => `signage/device/group/${groupId}`,
        DETAIL_INFO: (groupId: number) => `signage/group/${groupId}`,
        PATCH_NAME: 'signage/group/name',
        NOT_PAID: 'signage/group/approved-not-pay',
        DELETE_DECISION_IN_PROGRESS: (approvalId: number) =>
          `signage/group/not-approve/${approvalId}`,
        DECISION_IN_PROGRESS_DETAIL: (approvalId: string) => `signage/group/approval/${approvalId}`,
        WILL_PAY_DETAIL: (groupIds: string[]) =>
          `signage/group/will-pay?${groupIds.map((id) => `groupIds=${id}`).join('&')}`,
        APPLY_PAY: 'signage/group/apply-payment',
        CANCEL_PAY_DETAIL: (groupId: string) => `signage/group/cancel-pay/${groupId}`,
        CANCEL_PAY: (groupId: string) => `signage/group/cancel-payment/${groupId}`,
        DELETE: (groupId: number) => `signage/group/not-pay/${groupId}`,
        PATCH_DEFAULT_PROJECT: `signage/group/default-project`,
      },
    },
    PROJECT: {
      LIST: 'signage/project',
      NAME_DUPLICATE_CHECK: 'signage/project/check-name',
      CONTENT_CAN_REGISTER: 'content/project-can-reg',
      SIGNAGE_CONTENT_PREVIEW: (contentId: string) => `content/signage/${contentId}`,
      REGISTER: 'signage/project',
      PAID_GROUP_COUNT: 'signage/group/approved-pay/count',
      DELETE: (projectId: number) => `signage/project/${projectId}`,
      LIST_OF_GROUP_EXECUTE_PROJECT: (projectId: number) => `signage/project/group/${projectId}`,
      DETAIL: (projectId: string) => `signage/project/${projectId}`,
      LIST_OF_CONTENT_BELONG_PROJECT: (projectId: number) => `signage/project/content/${projectId}`,
      IS_UNIQUE_CONTENT: (contentId: number) => `signage/project/is-unique-content/${contentId}`,
    },
    RESERVE: {
      REGISTER: 'signage/reservation',
      RESERVATION_DATE_LIST: 'signage/reservation/day',
      RESERVATION_LIST: 'signage/reservation/project',
      DETAIL: (reservationId: number) => `signage/reservation/${reservationId}`,
      DELETE: (reservationId: number) => `signage/reservation/${reservationId}`,
      EDIT: `signage/reservation`,
      COPY: `signage/project/copy`,
    },
  },
  LOCALBOX: {
    DETAIL: (localboxId: number) => `localbox/${localboxId}`,
    MY: 'localbox/my',
    MY_TOWN: 'localbox/my-town',
    MY_CONTENT: 'localbox/my-content',
    YOUR_CONTENT: 'localbox/your-content',
    SUBSCRIPTION: 'localbox-subscription' /** ❌ 제거 예정 */,
    FOLLOW: 'localbox-follow',
    SUBSCRIPITION_MY: 'localbox-subscription/my',
    RECENT_VISIT_TOWN: 'localbox/recent-visit-town',
    RECENT_VISIT_TOWN_ID: (visitTownId: number) => `localbox/recent-visit-town/${visitTownId}`,
    CHILD_ORGANIZATION: 'localbox/child-organization',
    SIGNAGE_PIN_CODE: 'localbox/signage-pin-code',
    CONTENT_BEOP_PERCENTAGE: (localboxId: number) =>
      `localbox/content-beop-percentage/${localboxId}`,
    TOP_GROUP_CONTENT: 'localbox/top-group/content',
    DELETE_TOP_GROUP_CONTENT: (contentId: number) => `localbox/top-group/content/${contentId}`,
    TOP_GROUP_CONTENT_LIST: (localboxId: number) => `localbox/top-group/content/${localboxId}`,
    CHECK_BUSINESS: 'localbox/check-business',
    EXIST_ORGANIZATION_MANAGER: 'localbox/exist/organization-manager',
    INTRO: (targetLocalboxId: number) => `localbox/intro/${targetLocalboxId}`,
  },
  ORGANIZATION: {
    APARTMENT: '/organization/apartment',
    GVMT: '/organization/government',
    BANNER_CLICK: (bannerId: number) => `/api/banner/click/${bannerId}`,
    PARENT_HIERARCHY_LIST: '/organization/parent-hierarchy-list',
    PARENT_HIERARCHY_LIST_ID: (organizationId: number) =>
      `/organization/parent-hierarchy-list/${organizationId}`,
    INMYTOWN_CERTIFY_ORGANIZATION: 'organization/in-my-town/certify-organization',
    REQUEST_JOIN: (organizationId?: number) => `organization/req-join/${organizationId}`,
    REQUEST_JOIN_ADDRESS: 'organization/req-join/address',
  },
  BANNER: 'banner',
  BANNER_CLICK: (bannerId: number) => `/api/banner/click/${bannerId}`,
  COMPLAIN: {
    CONTENT: 'complain/content',
    CONTENT_REPLY: 'complain/content-reply',
    CONTENT_LOCALITY: 'complain/content-locality',
    CAN_CONTENT_LOCALITY: (contentId: number) => `complain/can/content-locality/${contentId}`,
  },
  NOTIFICATION: 'notification',
  NOTIFICATION_ID: (notificationId: number) => `notification/${notificationId}`,
  NOTIFICATION_PERMISSION: 'notification/permission',
  NOTICE: 'notice',
  NOTICE_ID: (noticeId: number) => `notice/${noticeId}`,
  QR: {
    MANAGEMENT_CERTIFY_TYPE: 'qr/management-certify-type',
    MANAGEMENT_CERTIFY_TYPE_ID: (localboxId: number) =>
      `qr/management-certify-type-id/${localboxId}`,
    MY_CERTIFY: 'qr/my-certify',
    MANAGEMENT_CERTIFY_IMAGE: 'qr/manage-certify-image',
    MANAGEMENT_CERTIFY_IMAGE_ID: (localboxId: number) => `qr/manage-certify-image-id/${localboxId}`,
    CERTIFY_JUMIN: 'qr/certify-jumin',
    CERTIFY_JUMIN_CERTIFY_ID: (certifyId: number) => `qr/certify-jumin/${certifyId}`,
    CAN_CERTIFT_JUMIN: 'qr/can/certify-jumin',
    EXIST_CERTIFY_JUMIN: `qr/exist/certify-jumin`,
  },
  MY: {
    CONTENT_BOX: {
      LIST: `localbox/locker`,
    },
    PAYMENT: {
      REGISTER: `payment/info`,
      CARD_LIST: `payment/info`,
      HISTORY: `payment/history`,
      DELETE: (paymentId: number) => `payment/info/${paymentId}`,
    },
  },
} as const;
