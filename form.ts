import { every, has, isEmpty, negate, pick, some } from 'lodash-es';

import { KeyOf, Many } from '@/types/common';

export const hasKey = <T extends object>(obj: T, key: string): key is KeyOf<T> => {
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

export const hasEmptyArray = <T>(arr: T[]): boolean => every(arr, (value) => value === '');

// FormData에 데이터를 추가하는 함수
export const appendFormData = (formData: FormData, data: any, prefix = '') => {
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (value === null || value === undefined) {
        continue;
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          const arrayKey = `${newKey}[${index}]`;
          formData.append(arrayKey, item);
        });
      } else if (value instanceof FileList) {
        value.length > 0 && formData.append(newKey, value[0]);
      } else if (value instanceof File) {
        formData.append(newKey, value);
      } else if (value instanceof Object) {
        appendFormData(formData, value, newKey);
      } else {
        formData.append(newKey, value);
      }
    }
  }
};
