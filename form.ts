import { has, isEmpty, negate, pick, some } from 'lodash-es';

import { KeyOf, Many } from '@/types/common';

export const hasKey = <T extends object>(
  obj: T,
  key: string
): key is KeyOf<T> => {
  return has(obj, key);
};

export const hasEmptyValues = <T extends object, K extends KeyOf<T>>(
  obj: T,
  ...props: Array<Many<K>>
): boolean => some(pick(obj, ...props), isEmpty);

export const hasNotEmptyValues = <T extends object, K extends KeyOf<T>>(
  obj: T,
  ...props: Array<Many<K>>
): boolean => some(pick(obj, ...props), negate(isEmpty));

// FormData에 데이터를 추가하는 함수
export const appendFormData = (formData: FormData, data: any, prefix = '') => {
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (value instanceof Object && !(value instanceof File)) {
        appendFormData(formData, value, newKey);
      } else {
        formData.append(newKey, value);
      }
    }
  }
};
