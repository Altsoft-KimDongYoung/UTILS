import { produce } from 'immer';

import { InfiniteData, QueryClient, QueryKey } from '@tanstack/react-query';

import { ApiResponse } from '@/types/common';
import { ContentListResponse } from '@/types/domain';

interface OptimisticUpdateParams {
  queryClient: QueryClient;
  queryKey: QueryKey;
  id: number;
  isLike?: boolean;
  isDisLike?: boolean;
  isBookmark?: boolean;
}

/** @Utils 낙관적 업데이트  */

export const optimisticUpdate = ({
  queryClient,
  queryKey,
  id,
  isLike,
  isDisLike,
  isBookmark,
}: OptimisticUpdateParams) => {
  queryClient.setQueryData<InfiniteData<ApiResponse<ContentListResponse>>>(queryKey, (oldData) => {
    if (!oldData) return oldData;

    return produce(oldData, (draft) => {
      draft.pages.forEach((page) => {
        const content = page.result.content.find((item) => item.contentId === Number(id));
        if (content) {
          if (isLike !== undefined) {
            content.contentLikeCount += isLike ? -1 : 1;
            content.contentLikeYn = !isLike;
            content.contentNotLikeYn = false;
          }

          if (isDisLike !== undefined) {
            if (!isDisLike && content.contentLikeYn) content.contentLikeCount -= 1;

            content.contentLikeYn = false;
            content.contentNotLikeYn = !isDisLike;
          }

          if (isBookmark !== undefined) {
            content.contentBookmarkYn = !isBookmark;
          }
        }
      });
    });
  });
};
