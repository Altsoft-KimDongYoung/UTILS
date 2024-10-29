import { Metadata } from 'next';

import { convertHtmlToTextWithBr } from './content';

interface GenerateMetadataProps {
  title: string;
  description: string;
  ogImage?: string;
}

export function getMetadata(metadataProps?: GenerateMetadataProps) {
  const { title, description, ogImage } = metadataProps || {};

  const metadata: Metadata = {
    title: title || '온닫이',
    description: description || '우리동네에서 일어나는 소식들을 지금 만나보세요~',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      minimumScale: 1,
      maximumScale: 1,
      userScalable: false,
    },
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title: title || '온닫이',
      description:
        (description && convertHtmlToTextWithBr(description)) ||
        '우리동네에서 일어나는 소식들을 지금 만나보세요~',
      images: ogImage || '/images/share-image.png',
    },
    twitter: {
      title: title || '온닫이',
      description:
        (description && convertHtmlToTextWithBr(description)) ||
        '우리동네에서 일어나는 소식들을 지금 만나보세요~',
      images: ogImage || '/images/share-image.png',
    },
  };

  return metadata;
}
