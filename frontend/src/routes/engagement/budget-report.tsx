import { BudgetStatsCard } from '@/features/cards/budget-stats-card';
import { YYYY_MM_DD, getSundays } from '@/services/common.service';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const schema = z.object({
  engagementId: z.string(),
  weekEnding: z.date().default(new Date()).optional(),
});

const Page = () => {
  const weekEndings = getSundays(2024);

  return (
    <div className={`flex`}>
      <div className={`flex flex-col-reverse`}>
        {weekEndings?.map((date) => <p>{YYYY_MM_DD(date)}</p>)}
      </div>

      <BudgetStatsCard />
    </div>
  );
};

export const Route = createFileRoute('/engagement/budget-report')({
  component: Page,
  validateSearch: (search: Record<string, unknown>) => {
    return schema.parse(search);
  },
});
