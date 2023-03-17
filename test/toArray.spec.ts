import { toArray } from "../src/toArray";
import { isPromise } from "../src/promise";
import { range, toAsync } from "../src/internal/internal";

const promiseResolver = <T>(a: T) => Promise.resolve(a);

describe("toArray", () => {
  describe("sync", () => {
    it("should return 'Array<A>' when 'Iterable<A>' is given as argument  ", () => {
      const res = toArray(range(0, 5));
      expect(res).toEqual([0, 1, 2, 3, 4]);
    });

    it("should return 'Array<Promise<A>>' when 'Iterable<Promise<A>>' is given as an argument", async () => {
      const promises = toArray(
        Array.from(range(5)).map(promiseResolver)
      ) as any[];

      const res = await Promise.allSettled(promises);

      expect(res).toEqual([0, 1, 2, 3, 4]);
    });
  });

  describe("async", () => {
    it("should return 'Promise<Array<A>>' when 'AsyncIterable<A>' is given as an argument", async () => {
      const res = await toArray(toAsync(range(5)));
      expect(res).toEqual([0, 1, 2, 3, 4]);
    });
  });
});
