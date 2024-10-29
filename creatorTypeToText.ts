import { LocalboxCreatorType } from '@/types/common';

export const creatorTypeToText = (localboxCreatorType: LocalboxCreatorType) => {
  switch (localboxCreatorType) {
    case 'LOCALBOX_BUSINESS':
      return '기업';

    case 'LOCALBOX_GVMT':
      return '관공서';

    case 'LOCALBOX_APARTMENT':
      return '아파트';

    case 'LOCALBOX_LOCAL_NEWSPAPER':
      return '신문사';

    default:
      return;
  }
};
