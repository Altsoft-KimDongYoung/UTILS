import { SIZE } from '@/constants/file';

type getFileSizeProps = {
  option?: 'limit';
  symbol?: string;
};

export const getFileSize = (
  bytes = 0,
  { option, symbol = '/' }: getFileSizeProps = {}
) => {
  if (!bytes) return `0MB${symbol}${SIZE.CONVERT.MAX_DOC_FILE_MB}`;

  const sufixes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const convertSize = `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;

  if (option === 'limit') {
    return `${convertSize}${symbol}${SIZE.CONVERT.MAX_DOC_FILE_MB}`;
  }
  return convertSize;
};
