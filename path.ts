/** @Utils pathname 중 원하는 Depth를 추출한다. */
export const getDepthPath = (path: string, depth: number) => {
  const segments = path.split('/').filter((path) => path);
  const depthSegment = segments[depth - 1] || path;

  return depthSegment;
};
