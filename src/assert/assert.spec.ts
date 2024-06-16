import { assert } from "./assert";

describe("assert", () => {
  it('should throw an error if the "condition" is not satisfied', () => {

    const STR_VAL = "string" as string;
    const STR_VAL_COMPARATOR = "not_string" as string;

    expect(() => assert(STR_VAL === STR_VAL_COMPARATOR)).toThrowError(Error);
    expect(() =>
      assert(STR_VAL === STR_VAL_COMPARATOR, new CustomError("wrong string"))
    ).toThrowError(CustomError);
  });

  it("should throw an error when provided string error message", () => {
    const BOOL_VAL = false;
    const ERR_MESSAGE = "String error message";
    expect(() => assert(BOOL_VAL, ERR_MESSAGE)).toThrowError(
      new CustomError(ERR_MESSAGE)
    );
  });
});

class CustomError extends Error {
  constructor(message?: string) {
    super(message);
  }
}
