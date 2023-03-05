type Nullable<T> = T extends null | undefined ? T : never;

/**
 * Checks if the given value is `null` or `undefined`.
 *
 * @example
 * ```ts
 * isNullable(1); // false
 * isNullable('1'); // false
 * isNullable(undefined); // true
 * isNullable(null); // true
 * ```
 */
function isNil<T>(a: T): a is Nullable<T> {
  if (a === undefined || a === null) {
    return true;
  }

  return false;
}

/*
 *
 *
 * nil is a representation of nothing.
 * Its underlying representation is JavaScript's null,
 * and is equal to JavaScript's undefined*/
export default isNil;
