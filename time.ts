import dayjs from 'dayjs';

import assert from './assert';

/**
 * @Utils 문자열 형태의 날짜/시간을 받고 현재 시간/날짜와 계산하여
 * 형식에 맞는 문자열로 반환한다.
 * */
export const convertNewTextToDate = (date: string) => {
  const compareToDate = dayjs(date, 'YYYY.MM.DD HH:mm');
  const currentDate = dayjs();

  // assert(compareToDate.isValid(), '잘못된 날짜 형식입니다.');

  const diffInMinutes = currentDate.diff(compareToDate, 'minute');
  const diffInHours = currentDate.diff(compareToDate, 'hour');

  if (diffInMinutes < 1) {
    return '방금전';
  }

  if (diffInMinutes < 60) {
    return `${diffInMinutes}분전`;
  }

  if (diffInHours < 24) {
    return `${diffInHours}시간전`;
  }

  if (compareToDate.year() === currentDate.year()) {
    return compareToDate.format('MM.DD');
  }

  return compareToDate.format('YYYY.MM.DD');
};
