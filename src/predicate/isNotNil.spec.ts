import { isNotNil } from "./index";

describe("isNotNil", () => {
  it("should check if given value is not `null` and `undefined`", () => {
    const r1 = isNotNil(null);
    expect(r1).toEqual(false);

    const r2 = isNotNil(undefined);
    expect(r2).toEqual(false);

    const r3 = isNotNil(3);
    expect(r3).toEqual(true);

    const r4 = isNotNil("testing!");
    expect(r4).toEqual(true);

    const r5 = isNotNil({});
    expect(r5).toEqual(true);

    const r6 = isNotNil(Symbol("symbol"));
    expect(r6).toEqual(true);

    const r7 = isNotNil(false);
    expect(r7).toEqual(true);
  });
});
