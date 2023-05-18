import euclidianDivision from "../euclidianDivision";

describe("Test of euclidianDivision()", () => {
  test("", () => {
    expect(euclidianDivision({ numerator: 5, denominator: 2 })).toEqual({ quotient: 2, remainder: 1 });
  });
});
