import { Query } from '@tanstack/react-query';

/** @Utils 'villages'와 'villageLists'가 포함된 쿼리 키를 찾음  */
export const findMatchedVillageQueries = (queries: Query[]) => {
  return queries.filter((query) => {
    const keyPart = query.queryKey[2];

    if (typeof keyPart === 'object' && keyPart !== null) {
      const hasLongitude = 'displayLongitude' in keyPart;
      const hasLatitude = 'displayLatitude' in keyPart;
      const hasSize = 'size' in keyPart;

      if (hasLongitude && hasLatitude && hasSize)
        return query.queryKey[0] === 'villages' && query.queryKey[1] === 'villageLists';
    }

    return false;
  });
};
