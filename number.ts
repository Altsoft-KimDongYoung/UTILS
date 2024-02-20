/* 숫자에 천 단위마다 콤마(,)를 추가하는 함수 */
export const numberWithCommas = (number: number) => {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};
