import { usePathname } from 'next/navigation';

/** @Utils pathname 중 원하는 Depth를 추출한다. */
export const getDepthPath = (path: string, depth: number) => {
  const segments = path.split('/').filter((path) => path);
  const depthSegment = segments[depth - 1] || path;

  return depthSegment;
};

/**
 * @Utils 현재 경로와 타겟 경로가 일치하는지 확인하는 함수
 * @returns 일치하면 true, 아니면 false
 */
export const isPathMatch = (targetPath: string) => {
  const pathname = usePathname();

  return pathname === targetPath;
};
