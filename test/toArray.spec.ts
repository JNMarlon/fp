import { range } from "../src/_internal/range";
import { toArray } from "../src/toArray";
import { toAsync } from "../src/_internal/toAsync";

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

      //const res = await Promise.allSettled(promises)
      /*
      * returns
      * {
        res2: [
          { status: 'fulfilled', value: 0 },
          { status: 'fulfilled', value: 1 },
          { status: 'fulfilled', value: 2 },
          { status: 'fulfilled', value: 3 },
          { status: 'fulfilled', value: 4 }
        ]
      }
*/
      const res = await Promise.all(promises);

      /*
       * returns
       *
       *{ res: [ 0, 1, 2, 3, 4 ] }
       *
       * */

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
