import { isBoolean } from "./isBoolean";

describe("isBoolean", () => {
  it.each([undefined, null, 1, "1", Symbol("1"), () => null])(
    "given non-boolean, then should return false",
    (a) => {
      expect(isBoolean(a)).toEqual(false);
    }
  );
  it("given boolean, then should return true", () => {
    expect(isBoolean(true)).toEqual(true);
    expect(isBoolean(false)).toEqual(true);
  });
});
