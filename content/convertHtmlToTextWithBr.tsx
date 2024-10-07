/** @Util html 태그가 붙은 문자열을 줄바꿈 포함하여 순수 텍스트로 변경하는 유틸함수
 * ex) const htmlString = "<p>가나다라</p><p><br></p><p><strong>마바사</p>";
 * const result = convertHtmlToTextWithBr(htmlString);
 *
 * 가나다라
 *
 * 마바사
 */

export function convertHtmlToTextWithBr(html: string) {
  // 1. <p><br></p> 태그를 줄바꿈(\n\n)으로 대체
  let text = html.replace(/<p>\s*<br\s*\/?>\s*<\/p>/gi, '\n');

  // 2. <p> 시작 태그를 제거
  text = text.replace(/<p>/gi, '');

  // 3. </p> 태그, </ul> 태그, </ol> 태그를 줄바꿈(\n)으로 대체
  text = text.replace(/<\/p>/gi, '\n');
  text = text.replace(/<\/ol>/gi, '\n');
  text = text.replace(/<\/ul>/gi, '\n');

  // 4. &nbsp;를 공백으로 변환
  text = text.replace(/&nbsp;/g, ' ');

  // 5. 나머지 모든 HTML 태그 제거
  text = text.replace(/<\/?[^>]+(>|$)/g, '');

  // 6. &lt;와 &gt;를 각각 <와 >로 변환
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');

  return text.trim();
}
