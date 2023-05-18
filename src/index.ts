const ALL_BANKNOTES = [500, 200, 100, 50, 25, 20, 10, 5] as const;

type Banknote = (typeof ALL_BANKNOTES)[number];

export type Withdrawal = Partial<Record<Banknote, number>>;

const atm = (amount: number): Withdrawal => {
  return { 5: 1 };
};

export default atm;
