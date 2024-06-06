/**
 * 인자가 null 또는 undefined 인지 확인
 *
 * @param {unknown} a - 값이 null 혹은 undefined 인지 확인할 인자.
 * @returns {boolean} - 인자의 값이 null 혹은 undefined이면 'true'를 반환하고, 그외에는 `false`를 반환.
 *
 * @example
 *  const nullVal = null;
 *  const undefinedVal = undefined;
 *  const numVal = 42;
 *  const nullResult = isNil(nullVal); // true
 *  const undefinedResult = isNil(undefinedVal); // true
 *  const numResult = isNil(numVal); // false
 * **/

export const isNil = (a: unknown): a is null | undefined => {
  return a === null || a === undefined;
};
