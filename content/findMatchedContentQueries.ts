import { Query } from '@tanstack/react-query';

import { PATH } from '@/constants/path';

interface GetMatchedQueriesParams {
  userPath: string;
  prevPath?: string;
  contentId?: number;
  queries: Query[];
}

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

export const findMatchedResidentsQueries = (queries: Query[]) => {
  return queries.filter((query) => {
    const keyPart = query.queryKey[2];

    if (typeof keyPart === 'object' && keyPart !== null) {
      const hasSize = 'size' in keyPart;

      if (hasSize)
        return query.queryKey[0] === 'residents' && query.queryKey[1] === 'residentLists';
    }

    return false;
  });
};

/** userPath에 따라 매칭된 쿼리를 반환하는 함수 */
export const getMatchedQueries = ({
  userPath,
  prevPath,
  contentId,
  queries,
}: GetMatchedQueriesParams) => {
  if (contentId && userPath === PATH.VILLAGES.DETAIL(contentId) && prevPath === PATH.VILLAGES.ROOT)
    return findMatchedVillageQueries(queries);
  if (
    contentId &&
    userPath === PATH.RESIDENTS.DETAIL(contentId) &&
    prevPath === PATH.RESIDENTS.ROOT
  )
    return findMatchedResidentsQueries(queries);
  if (userPath === PATH.VILLAGES.ROOT) return findMatchedVillageQueries(queries);
  if (userPath === PATH.RESIDENTS.ROOT) return findMatchedResidentsQueries(queries);

  return [];
};
