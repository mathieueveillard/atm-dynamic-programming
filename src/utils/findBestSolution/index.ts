type MappingFunction<U, V> = (u: U, index: number) => V;

type ComparisonFunction<V> = (v1: V, v2: V) => number;

type Input<U, V> = {
  map: MappingFunction<U, V>;
  compare: ComparisonFunction<V>;
};

const findBestSolution =
  <U, V>({ map, compare }: Input<U, V>) =>
  (values: U[]): V =>
    values.map(map).sort(compare)[0];

export default findBestSolution;
