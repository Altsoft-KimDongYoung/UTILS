/** @Util 이미지 해상도 검사 함수 */
export const checkImageResolution = (
  img: HTMLImageElement,
  minWidth: number,
  minHeight: number
): boolean => {
  return img.width >= minWidth && img.height >= minHeight;
};

export const createImageObjectURL = (
  file: File,
  callback: (url: string) => void
) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    if (e.target?.result) {
      const img = new window.Image();
      img.onload = () => {
        callback(URL.createObjectURL(file));
      };
      img.src = e.target.result as string;
    }
  };

  reader.readAsDataURL(file);
};
