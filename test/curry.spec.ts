import curry from "../src/curry";

describe("curry", () => {
  it("should not change a unary function", () => {
    const unary = (a: number) => a + 3;
    const curried = curry(unary);
    expect(curried(3)).toBe(6);
  });

  it("given function should be curried", () => {
    const add = (a: number, b: number, c: number) => a + b + c;

    const curried = curry(add);
    expect(curried(1)(2)(3)).toBe(6);
    expect(curried(1, 2)(3)).toBe(6);
    expect(curried(1)(2, 3)).toBe(6);
    expect(curried(1, 2, 3)).toBe(6);
    expect(curried()(1, 2, 3)).toBe(6);
    expect(curried(1, 2)()(3)).toBe(6);
  });
});
