import atm, { Withdrawal } from ".";

test("", () => {
  const expected: Withdrawal = {
    5: 1,
  };
  expect(atm(5)).toEqual(expected);
});
