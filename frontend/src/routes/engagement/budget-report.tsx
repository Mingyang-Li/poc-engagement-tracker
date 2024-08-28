import { BudgetStatsCard } from '@/features/cards/budget-stats-card';
import {
  YYYY_MM_DD,
  getMostRecentWeekEnding,
  getSundays,
} from '@/services/common.service';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { List, ListItem, Card, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

const schema = z.object({
  engagementId: z.string(),
  weekEnding: z.date().default(new Date()).optional(),
});


const Page = () => {
  const weekEndings = getSundays(2024);

  const [selectedWeekEnding, setSelectedWeekEnding] = useState(
    getMostRecentWeekEnding({ weekEndings, startDate: new Date() }),
  );

  // const {} = useQuery()

  return (
    <div className={`flex`}>
      <Card className="w-96">
        <List>
          <Typography>Week Endings</Typography>
          {weekEndings?.map((date, _i) => (
            <ListItem
              key={_i}
              selected={date === selectedWeekEnding}
              onClick={() => setSelectedWeekEnding(date)}
            >
              {YYYY_MM_DD(date)}
            </ListItem>
          ))}
        </List>
      </Card>
      <BudgetStatsCard />
      <p>selected date: {YYYY_MM_DD(selectedWeekEnding)}</p>
    </div>
  );
};

export const Route = createFileRoute('/engagement/budget-report')({
  component: Page,
  validateSearch: (search: Record<string, unknown>) => {
    return schema.parse(search);
  },
});
