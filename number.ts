/* 숫자에 천 단위마다 콤마(,)를 추가하는 함수 */
export const numberWithCommas = (number: number) => {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

/* 숫자를 K, M 과 같은 suffix로 축약하는 함수 */
export const formatNumberWithSuffix = (number: number) => {
  const million = 1000000;
  const thousand = 1000;

  const format = (number: number, suffix: string) => {
    const parts = number.toString().split('.');

    const firstDecimal = parts[1]?.[0] || null;
    const quotient = parts[0];
    const hasDecimal = parts.length > 1;
    const isFirstDecimalZero = firstDecimal === '0';
    const isQuotientThreeDigits = quotient.length === 3;

    const decimal =
      hasDecimal && !isFirstDecimalZero && !isQuotientThreeDigits
        ? '.' + firstDecimal
        : '';
    return quotient + decimal + suffix;
  };

  if (number >= million) return format(number / million, 'm');

  if (number >= thousand) return format(number / thousand, 'k');

  return number.toString();
};

export const convertSuffixToNum = (value: string) => {
  const extractedNum = parseFloat(value);
  const extractedNumToStr = extractedNum.toString();

  if (isNaN(extractedNum)) {
    return NaN;
  }

  // 문자열에서 단위 추출 (숫자를 제외한 부분)
  const suffix = value.replace(extractedNumToStr, '').trim().toLowerCase();

  // 단위에 따라 숫자 변환
  switch (suffix) {
    case 'km':
      return extractedNum * 1000;
    case 'm':
      return extractedNum;
    default:
      // 알 수 없는 단위인 경우 처리
      return NaN;
  }
};
