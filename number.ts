interface FormatHyphenValueProps {
  value: string;
  formatType: 'mobile' | 'businessNumber';
}

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

/** @Utils 핸드폰 번호에 하이픈을 붙여준다. */
export const formatHyphenPhoneNumber = (value: string) => {
  const rawPhone = value.replace(/-/g, '');
  let formattedPhone = '';

  if (rawPhone.length < 4) {
    formattedPhone = rawPhone;
  } else if (rawPhone.length < 8) {
    formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(3)}`;
  } else if (rawPhone.length < 11) {
    formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
      3,
      7
    )}-${rawPhone.slice(7)}`;
  } else {
    formattedPhone = `${rawPhone.slice(0, 3)}-${rawPhone.slice(
      3,
      7
    )}-${rawPhone.slice(7, 11)}`;
  }

  const displayPhone = formattedPhone.length > 0 ? formattedPhone : '';

  return displayPhone;
};

/** @@Utils 사업자등록번호에 하이픈을 붙여준다. */
export const formatHyphenBusinessNumber = (value: string) => {
  const rawNumber = value.replace(/-/g, '');
  let formattedNumber = '';

  if (rawNumber.length < 4) {
    formattedNumber = rawNumber;
  } else if (rawNumber.length < 6) {
    formattedNumber = `${rawNumber.slice(0, 3)}-${rawNumber.slice(3)}`;
  } else if (rawNumber.length < 10) {
    formattedNumber = `${rawNumber.slice(0, 3)}-${rawNumber.slice(
      3,
      5
    )}-${rawNumber.slice(5)}`;
  } else {
    formattedNumber = `${rawNumber.slice(0, 3)}-${rawNumber.slice(
      3,
      5
    )}-${rawNumber.slice(5, 10)}`;
  }

  const displayNumber = formattedNumber.length > 0 ? formattedNumber : '';

  return displayNumber;
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
