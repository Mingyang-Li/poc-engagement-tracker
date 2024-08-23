/** from prisma model */
export class Enagagement {}

/** from prisma model */
export class Budget {
  phase: string;
  cost: number;
  budget: number;
}

export class BudgetReport {
  // overall info
  weekEnding: Date;
  engagementId: string;
  enagagement: Enagagement;

  // budget info for the week
  overallBudgetThisWeek: number;
  overallCostThisWeek: number;
  overallStatusThisWeek: number;
  budgetBreakdownThisWeek: Budget[];

  // budget info YTD
  overallBudgetYtd: number;
  overallCostYtd: number;
  overallStatusYtd: number;
  budgetBreakdownYtd: Budget[];
}
