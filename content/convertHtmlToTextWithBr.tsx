/** @Util html 태그가 붙은 문자열을 줄바꿈 포함하여 순수 텍스트로 변경하는 유틸함수
 * ex) const htmlString = "<p>가나다라</p><p><br></p><p><strong>마바사</p>";
 * const result = convertHtmlToTextWithBr(htmlString);
 *
 * 가나다라
 *
 * 마바사
 */
export function convertHtmlToTextWithBr(html: string) {
  // 1. <br> 태그를 줄바꿈(\n)으로 대체
  let text = html.replace(/<br\s*\/?>/gi, '\n\n');

  // 2. 나머지 모든 HTML 태그 제거
  text = text.replace(/<\/?[^>]+(>|$)/g, '');

  return text;
}
