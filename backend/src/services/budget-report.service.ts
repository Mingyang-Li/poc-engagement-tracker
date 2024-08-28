import { z } from 'zod';
import { BudgetReport } from '@/types/budget-report';
import { Result, err, ok } from 'neverthrow';
import { logger } from '@/utils/logger';
import { fromError } from 'zod-validation-error';
import * as f from '@ngneat/falso';
import { Budget, Engagement } from '@/generated';
import { BudgetStatus } from '@/utils/constants';
import { GetBudgetReportArgs } from '@/resolvers/budget-report.resolver';

const getbudgetStatus = (args: {
  cost: number;
  budget: number;
}): BudgetStatus => {
  const { cost, budget } = args;
  if (Number.isNaN(cost) || Number.isNaN(budget) || cost === budget) {
    return `Not over-budget nor under-budget`;
  }

  if (cost > budget) return `Over-budget`;

  return `Under-budget`;
};

export const findBudgetReportByWeekEnding = (
  args: GetBudgetReportArgs,
): Result<BudgetReport, Error> => {
  const { weekEnding } = args
  const validateInput = z.date().safeParse(weekEnding);

  if (validateInput.success === false) {
    const { message } = fromError(validateInput.error);
    logger.error(message);
    return err(new Error(message));
  }

  const engagement: Engagement = {
    id: f.randUuid(),
    name: `Project ${f.randAnimal()}`,
    engagementPartner: f.randFullName({ withAccents: false }),
    engagementManager: f.randFullName({ withAccents: false }),
  };

  const overallCostThisWeek = f.randNumber({
    precision: 10,
    min: 0,
    max: 15000,
  });
  const overallBudgetThisWeek = f.randNumber({
    precision: 10,
    min: 0,
    max: 15000,
  });
  const overallStatusThisWeek = getbudgetStatus({
    cost: overallCostThisWeek,
    budget: overallBudgetThisWeek,
  });

  const overallCostYtd = f.randNumber({
    precision: 10,
    min: 10000,
    max: 1000000,
  });
  const overallBudgetYtd = f.randNumber({
    precision: 10,
    min: 10000,
    max: 1000000,
  });
  const overallStatusYtd = getbudgetStatus({
    cost: overallCostYtd,
    budget: overallBudgetYtd,
  });

  const engagementPhases = Array.from(
    { length: 4 },
    () => `Phase ${f.randSkill()}`,
  );

  const budgetBreakdownThisWeek = engagementPhases?.map((phase) => {
    const item: Budget = {
      id: f.randUuid(),
      engagementId: engagement?.id,
      weekEnding: weekEnding,
      amount: f.randNumber({ precision: 10, min: 1000, max: 8000 }),
      phase,
    };
    return item;
  });

  const budgetBreakdownYtd = engagementPhases?.map((phase) => {
    const item: Budget = {
      id: f.randUuid(),
      engagementId: engagement?.id,
      weekEnding: weekEnding,
      amount: f.randNumber({ precision: 10, min: 10000, max: 1000000 }),
      phase,
    };
    return item;
  });

  const response: BudgetReport = {
    weekEnding: weekEnding,
    engagementId: engagement?.id,
    engagement,

    // budget report - current week
    overallCostThisWeek,
    overallBudgetThisWeek,
    overallStatusThisWeek,
    budgetBreakdownThisWeek,

    // budget report - YTD
    overallCostYtd,
    overallBudgetYtd,
    overallStatusYtd,
    budgetBreakdownYtd,
  };

  return ok<BudgetReport>(response);
};
