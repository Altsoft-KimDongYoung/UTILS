export function highlightText({
  text,
  keyword,
}: {
  text: string;
  keyword: string;
}) {
  // HTML 문자열로 변환
  const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
  const highlightedText = parts
    .map((part) =>
      part.toLowerCase() === keyword.toLowerCase()
        ? `<span style="font-weight: 900;">${part}</span>`
        : part
    )
    .join(''); // 배열을 다시 문자열로 합침

  return highlightedText;
}
