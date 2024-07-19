export function convertLineBreaksToUnix(text: string): string {
  return text.replace(/\r\n/g, '\n');
}
