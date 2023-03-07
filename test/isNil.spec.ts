import isNil from "../src/isNil";

describe("isNullable", () => {
  it("should check if given value is `null` or `undefined`", () => {
    const r1 = isNil(null);
    expect(r1).toEqual(true);

    const r2 = isNil(undefined);
    expect(r2).toEqual(true);

    const r3 = isNil(3);
    expect(r3).toEqual(false);

    const r4 = isNil("testing!");
    expect(r4).toEqual(false);

    const r5 = isNil({});
    expect(r5).toEqual(false);

    const r6 = isNil(Symbol("symbol"));
    expect(r6).toEqual(false);

    const r7 = isNil(false);
    expect(r7).toEqual(false);
  });
});
