export type JosaOption = '이' | '가' | '이/가' | '을' | '를' | '을/를' | '으로' | '은' | '는';

const checkKorean = (word: string) => {
  const lastChar = word.charCodeAt(word.length - 1);
  const isThereLastChar = (lastChar - 0xac00) % 28;

  return Boolean(isThereLastChar);
};

const formats = (word: string, josa: JosaOption) => {
  switch (josa) {
    case '이':
    case '가':
    case '이/가':
      return checkKorean(word) ? '이' : '가';
    case '을':
    case '를':
    case '을/를':
      return checkKorean(word) ? '을' : '를';
    case '으로':
      return checkKorean(word) ? '으로' : '로';
    case '은':
    case '는':
      return checkKorean(word) ? '은' : '는';
    default:
      throw 'Invalid format!';
  }
};

/**
 * @Utils 단어와 조사를 붙여서 반환하거나, 조사만 반환하는 유틸함수
 * word - 조사와 함께할 단어
 * josa - 사용할 조사 옵션
 * isWithWord - true일 경우 단어+조사를 반환, false일 경우 조사만 반환
 * return -단어+조사 또는 조사만 반환
 */

export const getJosa = (word: string, josa: JosaOption) => {
  const formattedJosa = formats(word, josa);

  return formattedJosa;
};

export const addJosa = (word: string, josa: JosaOption) => {
  const josaValue = getJosa(word, josa);

  return `${word}${josaValue}`;
};
