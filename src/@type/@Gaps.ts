import { Cast } from "./@cast";

export type CleanGaps<O extends any[]> = {
  [K in keyof O]: NonNullable<O[K]>;
};

export type Gaps<L extends any[]> = Cast<
  CleanGaps<{ [K in keyof L]?: L[K] }>,
  any[]
>;
