import React from 'react';

import { API_URL } from '@/constants/apiUrl';

import { getMetadata } from '../getMetadata';

export async function generateContentMetadata(contentId: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/${API_URL.CONTENT.DETAIL(contentId)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('콘텐츠 데이터를 불러오는 중 문제가 발생했습니다.');
    }

    const { result: contentData } = await response.json();
    const { contentTitle, contentBody, contentRepresentFileUrl } = contentData;

    return getMetadata({
      title: contentTitle,
      description: contentBody,
      ogImage: contentRepresentFileUrl,
    });
  } catch (error) {
    console.error('메타데이터 생성 중 오류 발생:', error);
    return getMetadata();
  }
}
