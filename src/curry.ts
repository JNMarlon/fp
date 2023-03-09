import type { Curry } from "./@type/@curry";

const curry = <F extends (...args: any[]) => any>(f: F): Curry<F> => {
  const arity = f.length; // number of args

  return (function resolver(...args: any[]) {
    const memory = [...args];

    return (...innerArgs: any[]) => {
      const local = [...memory, ...innerArgs];

      const next = local.length >= arity ? f : resolver;

      return next(...local);
    };
  })() as any;
};
export default curry;
