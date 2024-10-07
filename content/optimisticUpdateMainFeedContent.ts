import { produce } from 'immer';

import { InfiniteData, QueryClient, QueryKey } from '@tanstack/react-query';

import { ApiResponse } from '@/types/common';
import { ContentDetailDto, ContentListResponse } from '@/types/domain';

import { convertHtmlToTextWithBr } from './convertHtmlToTextWithBr';

interface OptimisticUpdateParams {
  queryClient: QueryClient;
  queryKey: QueryKey;
  id: number;
  detailData?: ContentDetailDto;
}

/** @Utils 낙관적 업데이트  */
export const optimisticUpdateMainFeedContent = ({
  queryClient,
  queryKey,
  id,
  detailData,
}: OptimisticUpdateParams) => {
  queryClient.setQueryData<InfiniteData<ApiResponse<ContentListResponse>>>(queryKey, (oldData) => {
    if (!oldData) return oldData;

    return produce(oldData, (draft) => {
      draft.pages.forEach((page) => {
        const content = page.result.content.find((item) => item.contentId === Number(id));
        if (content && detailData) {
          content.contentRepresentFileUrl = detailData.contentRepresentFileUrl;
          content.contentTitle = detailData.contentTitle;
          content.contentBodyText = convertHtmlToTextWithBr(detailData.contentBody);
          content.contentReplyCount = detailData.contentReplyCount;
        }
      });
    });
  });
};
