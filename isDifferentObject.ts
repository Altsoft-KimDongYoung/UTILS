import { isDifferentArray } from '@/utils/isDifferentArray';

import { object } from './object';

export const isDifferentObject = <Type extends Record<PropertyKey, unknown>>(a: Type, b: Type) => {
  const aEntries = object.entries(a);
  const bEntries = object.entries(b);
  return isDifferentArray(aEntries, bEntries);
};
