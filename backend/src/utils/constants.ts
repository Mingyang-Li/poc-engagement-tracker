export const budgetStatus = [
  `Over-budget`,
  `Under-budget`,
  `Not over-budget nor under-budget`,
] as const;
export type BudgetStatus = (typeof budgetStatus)[number];
