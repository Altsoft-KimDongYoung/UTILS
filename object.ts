type ObjectKeys<T extends Record<PropertyKey, unknown>> = `${Exclude<
  keyof T,
  symbol
>}`;

const objectValues = <Type extends Record<PropertyKey, unknown>>(
  obj: Type
): Array<Type[ObjectKeys<Type>]> => {
  return Object.values(obj) as Array<Type[ObjectKeys<Type>]>;
};

const objectKeys = <Type extends Record<PropertyKey, unknown>>(
  obj: Type
): Array<ObjectKeys<Type>> => {
  return Object.keys(obj) as Array<ObjectKeys<Type>>;
};

const objectEntries = <Type extends Record<PropertyKey, unknown>>(
  obj: Type
): Array<[ObjectKeys<Type>, Type[ObjectKeys<Type>]]> => {
  return Object.entries(obj) as Array<
    [ObjectKeys<Type>, Type[ObjectKeys<Type>]]
  >;
};

export const object = {
  keys: objectKeys,
  values: objectValues,
  entries: objectEntries,
};
