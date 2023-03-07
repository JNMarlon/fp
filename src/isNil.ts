type Nullable<T> = T extends null | undefined ? T : never;

const isNil = <T>(a: T): a is Nullable<T> => {
  if (a === undefined || a === null) {
    return true;
  }

  return false;
};

/*
 *
 *
 * nil is a representation of nothing.
 * Its underlying representation is JavaScript's null,
 * and is equal to JavaScript's undefined*/
export default isNil;
