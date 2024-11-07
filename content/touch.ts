import { Touch } from 'react';

/** 두 터치포인트 사이의 직선 거리를 계산하는 함수 */
export const getLengthOfLine = (point1: Touch, point2: Touch) => {
  const middlePoint = {
    clientX: point2.clientX,
    clientY: point1.clientY,
  };

  const legX = Math.abs(middlePoint.clientX - point1.clientX);
  const legY = Math.abs(middlePoint.clientY - point2.clientY);

  return Math.sqrt(legX ** 2 + legY ** 2);
};

/** 두 터치포인트 사이의 중간 지점을 계산하는 함수 */
export const getMiddleOfLine = (point1: Touch, point2: Touch) => {
  return {
    clientX:
      Math.min(point2.clientX, point1.clientX) + Math.abs(point2.clientX - point1.clientX) / 2,
    clientY:
      Math.min(point2.clientY, point1.clientY) + Math.abs(point2.clientY - point1.clientY) / 2,
  };
};

/** 터치 포인트들이 화면 내에 있는지 확인하는 함수 */
export const isTouchesInsideRect = (touches: globalThis.TouchList, rect: DOMRect) => {
  return Array.prototype.every.call(
    touches,
    (touch) =>
      touch.clientX <= rect.right &&
      touch.clientX >= rect.left &&
      touch.clientY <= rect.bottom &&
      touch.clientY >= rect.top
  );
};

/** 화면에서 두 터치 포인트의 중간 좌표를 DOMRect 기준으로 계산하는 함수 */
export const getMiddleTouchOnScreen = (touches: globalThis.TouchList, rect: DOMRect) => {
  const middleTouch = getMiddleOfLine(touches[0], touches[1]);

  return {
    clientX: middleTouch.clientX - rect.left,
    clientY: middleTouch.clientY - rect.top,
  };
};

/** 특정 값을 최소와 최대값 사이로 제한하는 함수 */
export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(min, value), max);
};
