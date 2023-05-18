import atm, { EMPTY_WITHDRAWAL, Withdrawal, countNumberOfBanknotes } from ".";

describe("Test of atm()", () => {
  test("It should deliver a single banknote", () => {
    const expected: Withdrawal = {
      ...EMPTY_WITHDRAWAL,
      5: 1,
    };
    expect(atm(5)).toEqual(expected);
  });

  test("It should deliver a single banknote", () => {
    const expected: Withdrawal = {
      ...EMPTY_WITHDRAWAL,
      10: 1,
    };
    expect(atm(10)).toEqual(expected);
  });

  test("It should deliver many identical banknotes", () => {
    const expected: Withdrawal = {
      ...EMPTY_WITHDRAWAL,
      500: 2,
    };
    expect(atm(1000)).toEqual(expected);
  });

  test("It should deliver many banknotes (no dynamic programming required)", () => {
    const expected: Withdrawal = {
      ...EMPTY_WITHDRAWAL,
      500: 1,
      200: 2,
    };
    expect(atm(900)).toEqual(expected);
  });

  test("It should deliver many banknotes (dynamic programming required)", () => {
    const expected: Withdrawal = {
      ...EMPTY_WITHDRAWAL,
      20: 2,
    };
    expect(atm(40)).toEqual(expected);
  });

  test("[Control] It should deliver many banknotes (dynamic programming required)", () => {
    const expected: Withdrawal = {
      ...EMPTY_WITHDRAWAL,
      50: 1,
      10: 1,
    };
    expect(atm(60)).toEqual(expected);
  });
});

describe("Test of countNumberOfBanknotes()", () => {
  test("Empty withdrawal", () => {
    const withdrawal: Withdrawal = {
      ...EMPTY_WITHDRAWAL,
    };
    expect(countNumberOfBanknotes(withdrawal)).toEqual(0);
  });

  test("One banknote only", () => {
    const withdrawal: Withdrawal = {
      ...EMPTY_WITHDRAWAL,
      5: 1,
    };
    expect(countNumberOfBanknotes(withdrawal)).toEqual(1);
  });

  test("Many identical banknotes", () => {
    const withdrawal: Withdrawal = {
      ...EMPTY_WITHDRAWAL,
      5: 2,
    };
    expect(countNumberOfBanknotes(withdrawal)).toEqual(2);
  });

  test("Many banknotes", () => {
    const withdrawal: Withdrawal = {
      ...EMPTY_WITHDRAWAL,
      200: 2,
      5: 1,
    };
    expect(countNumberOfBanknotes(withdrawal)).toEqual(3);
  });
});
