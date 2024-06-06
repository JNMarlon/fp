export function* range(
    start: number,
    end?: number,
    step = 1
): IterableIterator<number> {
    if (!end) return yield* range(0, start);
    while (start < end) {
        yield start;
        start += step;
    }
}
