import euclidianDivision from "./utils/euclidianDivision";
import findBestSolution from "./utils/findBestSolution";
import sum from "./utils/sum";

const ALL_BANKNOTES = [500, 200, 100, 50, 25, 20, 10, 5] as const;

type Banknote = (typeof ALL_BANKNOTES)[number];

export type Withdrawal = Record<Banknote, number>;

export const EMPTY_WITHDRAWAL: Withdrawal = {
  500: 0,
  200: 0,
  100: 0,
  50: 0,
  25: 0,
  20: 0,
  10: 0,
  5: 0,
};

export const countNumberOfBanknotes = (withdrawal: Withdrawal): number => {
  return ALL_BANKNOTES.map((note) => withdrawal[note]).reduce(sum, 0);
};

const recursiveAtm =
  (notes: Banknote[]) =>
  (amount: number): Withdrawal => {
    if (notes.length === 0) {
      return EMPTY_WITHDRAWAL;
    }

    const serveWithdrawalWithNotesOfLowerValue = (note: Banknote, index: number): Withdrawal => {
      const remainingNotes = notes.slice(index + 1);
      const { quotient, remainder } = euclidianDivision({ numerator: amount, denominator: note });
      return {
        ...recursiveAtm(remainingNotes)(remainder),
        [note]: quotient,
      };
    };

    const sortByIncreasingNumberOfNotes = (w1: Withdrawal, w2: Withdrawal): number =>
      countNumberOfBanknotes(w1) - countNumberOfBanknotes(w2);

    const isBestWithdrawalForSure = (withdrawal: Withdrawal): boolean => countNumberOfBanknotes(withdrawal) === 1;

    return findBestSolution<Banknote, Withdrawal>({
      map: serveWithdrawalWithNotesOfLowerValue,
      compare: sortByIncreasingNumberOfNotes,
      accelerate: isBestWithdrawalForSure,
    })(notes);
  };

const atm = (amount: number): Withdrawal => recursiveAtm([...ALL_BANKNOTES])(amount);

export default atm;
