export function extractSurroundingText({
  text,
  keyword,
  length,
}: {
  text: string;
  keyword: string;
  length: number;
}) {
  try {
    const startIndex = text.indexOf(keyword);

    if (startIndex === -1) return text; // 키워드를 찾지 못한 경우 원본 텍스트 반환

    const keywordStart = startIndex;
    const keywordEnd = startIndex + keyword.length;

    // 앞쪽에 충분한 텍스트가 있는지 확인하고, 부족한 경우 뒤쪽에서 채움
    const availableStartLength = keywordStart;
    const neededStartLength = length;
    const actualStartLength = Math.min(neededStartLength, availableStartLength);

    // 뒤쪽에 충분한 텍스트가 있는지 확인하고, 부족한 경우 앞쪽에서 채움
    const availableEndLength = text.length - keywordEnd;
    const neededEndLength = length;
    const actualEndLength = Math.min(neededEndLength, availableEndLength);

    // 부족한 앞쪽 부분을 뒤에서 가져옴
    const startCompensation = neededStartLength - actualStartLength;
    const endCompensation = neededEndLength - actualEndLength;

    // 최종적으로 텍스트를 슬라이스하는 범위 설정
    const sliceStart = Math.max(
      keywordStart - actualStartLength - endCompensation,
      0
    );
    const sliceEnd = Math.min(
      keywordEnd + actualEndLength + startCompensation,
      text.length
    );

    // 지정된 범위의 텍스트를 슬라이스
    let extractedText = text.slice(sliceStart, sliceEnd);

    // 앞뒤의 특수문자 제거
    extractedText = extractedText.replace(/^[^\w가-힣]+|[^\w가-힣]+$/g, '');

    // 앞쪽에 더 많은 텍스트가 있는지 확인하여 ... 추가
    const prefix = sliceStart > 0 ? '... ' : '';

    // 지정된 범위의 텍스트를 반환
    return prefix + extractedText;
  } catch (e) {
    return text;
  }
}
