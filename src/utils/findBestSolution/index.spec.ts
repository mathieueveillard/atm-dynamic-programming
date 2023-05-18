import findBestSolution from ".";

describe("Test of findBestSolution()", () => {
  test("", () => {
    expect(
      findBestSolution<number, number>({
        map: (i) => i + 1,
        compare: (i, j) => i - j,
      })([3, 1, 2, 0, 4])
    ).toEqual(1);
  });
});
