export type JosaOption = '이' | '가' | '이/가' | '을' | '를' | '을/를' | '으로';

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
    default:
      throw 'Invalid format!';
  }
};

export const addJosa = (word: string, josa: JosaOption) => {
  if (typeof josa === 'undefined') throw 'invalid format!';
  const formattedJosa = formats(word, josa);

  return formattedJosa;
};
