import { range } from 'ramda';
import * as Random from 'random-js';

/**
 * Array of non-repeated random integers.
 * @param length Array length.
 * @param min Minimum possible value.
 * @param max Maximum possible value.
 * @param engine Random engine.
 */
export function randomUniqueArray(
    length: number,
    min: number,
    max: number,
    engine: Random.Engine = Random.engines.mt19937().autoSeed(),
): ReadonlyArray<number> {
    return Random.sample(engine, range(min, max), length);
