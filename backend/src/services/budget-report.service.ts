import { z } from 'zod';
import {
  BudgetBreakdown,
  BudgetReport,
  BudgetReportPeriod,
} from '@/types/budget-report';
import { Result, err, ok } from 'neverthrow';
import { logger } from '@/utils/logger';
import { fromError } from 'zod-validation-error';
import * as f from '@ngneat/falso';
import { Engagement } from '@/generated';
import { GetBudgetReportArgs } from '@/resolvers/budget-report.resolver';

const getbudgetStatus = (args: { cost: number; budget: number }): string => {
  const { cost, budget } = args;
  if (Number.isNaN(cost) || Number.isNaN(budget) || cost === budget) {
    return `Not over-budget nor under-budget`;
  }

  if (cost > budget) return `Over-budget by $${Math.abs(cost - budget)}`;

  return `Under-budget by $${Math.abs(cost - budget)}`;
};

export const getBudgetReport = (
  args: GetBudgetReportArgs,
): Result<BudgetReport, Error> => {
  const { weekEnding } = args;
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

  const engagementPhases = Array.from(
    { length: 4 },
    () => `Phase - ${f.randBrand()}`,
  );

  const budgetBreakdownThisWeek: BudgetBreakdown[] = engagementPhases?.map(
    (phase) => {
      const cost = f.randNumber({ precision: 10, min: 1000, max: 8000 });
      const budget = f.randNumber({ precision: 10, min: 1000, max: 8000 });
      const status = getbudgetStatus({ cost, budget });

      const item: Required<BudgetBreakdown> = {
        engagementId: engagement?.id,
        phase,
        period: BudgetReportPeriod.THIS_WEEK,
        cost,
        budget,
        status,
      };
      return item;
    },
  );

  const budgetBreakdownYtd: BudgetBreakdown[] = engagementPhases?.map(
    (phase) => {
      const cost = f.randNumber({ precision: 10, min: 10000, max: 100000 });
      const budget = f.randNumber({ precision: 10, min: 10000, max: 100000 });
      const status = getbudgetStatus({ cost, budget });

      const item: Required<BudgetBreakdown> = {
        engagementId: engagement?.id,
        phase,
        period: BudgetReportPeriod.YTD,
        cost,
        budget,
        status,
      };
      return item;
    },
  );

  const overallCostThisWeek = budgetBreakdownThisWeek?.reduce(
    (totalCost, breakdown) => totalCost + (breakdown.cost || 0),
    0,
  );

  const overallBudgetThisWeek: number = budgetBreakdownThisWeek?.reduce(
    (totalCost, breakdown) => totalCost + (breakdown?.budget || 0),
    0,
  );

  const overallStatusThisWeek = getbudgetStatus({
    cost: overallCostThisWeek,
    budget: overallBudgetThisWeek,
  });

  const overallCostYtd = budgetBreakdownYtd?.reduce(
    (totalCost, breakdown) => totalCost + (breakdown.cost || 0),
    0,
  );
  const overallBudgetYtd = budgetBreakdownYtd?.reduce(
    (totalCost, breakdown) => totalCost + (breakdown.budget || 0),
    0,
  );
  const overallStatusYtd = getbudgetStatus({
    cost: overallCostYtd,
    budget: overallBudgetYtd,
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
