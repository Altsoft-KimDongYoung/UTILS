import dayjs from 'dayjs';

import assert from './assert';

/* 시간 계산 함수 */
export const timeFuc = (commentTime: string) => {
  const today = new Date();
  const timeValue = new Date(commentTime);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금 전';
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일 전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년 전`;
};

/**
 * @Utils 문자열 형태의 날짜/시간을 받고 현재 시간/날짜와 계산하여
 * 형식에 맞는 문자열로 반환한다.
 * */
export const convertNewTextToDate = (date: string) => {
  const compareToDate = dayjs(date, 'YYYY.MM.DD HH:mm');
  const currentDate = dayjs();

  assert(compareToDate.isValid(), '잘못된 날짜 형식입니다.');

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

  return compareToDate.format('YYYY.MM.DD');
};
