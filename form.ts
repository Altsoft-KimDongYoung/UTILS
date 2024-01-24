import { has } from 'lodash-es';

import { KeyOf } from '@/types/common';

export const hasKey = <T extends object>(
  obj: T,
  key: string
): key is KeyOf<T> => {
  return has(obj, key);
};
