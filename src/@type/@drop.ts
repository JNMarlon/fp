import { Prepend } from "./@prepend";
import { Tail } from "./@tail";
import { Length } from "./@length";

export type Drop<N extends number, T extends any[], I extends any[] = []> = {
  0: Drop<N, Tail<T>, Prepend<I, any>>;
  1: T;
}[Length<I> extends N ? 1 : 0];
