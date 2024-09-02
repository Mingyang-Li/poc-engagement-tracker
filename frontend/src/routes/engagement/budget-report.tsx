import { BudgetStatsCard } from '@/features/cards/budget-stats-card';
import {
  YYYY_MM_DD,
  getMostRecentWeekEnding,
  getSundays,
} from '@/services/common.service';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import {
  List,
  ListItem,
  Card,
  Typography,
  Spinner,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Query, QueryGetBudgetReportArgs } from '@/generated/graphql';

const schema = z.object({
  engagementId: z.string(),
  weekEnding: z.date().optional(),
});

export const GET_BUDGET_REPORT = gql`
  query GetBudgetReport($args: GetBudgetReportArgs!) {
    getBudgetReport(args: $args) {
      engagementId
      engagement {
        id
        engagementPartner
        engagementManager
        name
      }
      overallCostThisWeek
      overallBudgetThisWeek
      overallStatusThisWeek
      budgetBreakdownThisWeek {
        engagementId
        phase
        period
        cost
        budget
        status
      }
      overallCostYtd
      overallBudgetYtd
      overallStatusYtd
      budgetBreakdownYtd {
        engagementId
        phase
        period
        cost
        budget
        status
      }
    }
  }
`;

type WeekEndingsWithSelectionStatus = {
  date: Date;
  selected: boolean;
  disabled: boolean;
};

const Page = () => {
  const weekEndings = getSundays(2024).reverse();
  const [weekEndingsWithSelectionStatus, setWeekEndingsWithSelectionStatus] =
    useState<Array<WeekEndingsWithSelectionStatus>>(
      weekEndings?.map(
        (item): WeekEndingsWithSelectionStatus => ({
          date: item,
          selected: false,
          disabled: item > new Date() ? true : false,
        }),
      ),
    );

  const { engagementId, weekEnding } = Route.useSearch();

  const [selectedWeekEnding, setSelectedWeekEnding] = useState(
    getMostRecentWeekEnding({
      weekEndings,
      startDate: weekEnding ?? new Date(),
    }),
  );

  useEffect(() => {
    // Update the selected state of the ListItem when the selectedWeekEnding changes
    const updatedWeekEndings: WeekEndingsWithSelectionStatus[] =
      weekEndingsWithSelectionStatus.map(
        (item): WeekEndingsWithSelectionStatus => {
          return {
            ...item,
            selected: item?.date === selectedWeekEnding,
          };
        },
      );
    setWeekEndingsWithSelectionStatus(updatedWeekEndings);
  }, [selectedWeekEnding]);

  const { data, loading, error } = useQuery<Query, QueryGetBudgetReportArgs>(
    GET_BUDGET_REPORT,
    {
      variables: {
        args: {
          engagementId,
          weekEnding: selectedWeekEnding,
        },
      },
    },
  );

  if (error) {
    return <>Error: {error?.message}</>;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={`flex`}>
      <Card className={`w-96`}>
        <List>
          <Typography variant={`h4`}>Week Endings</Typography>
          {weekEndingsWithSelectionStatus?.map((item, _i) => (
            <ListItem
              key={_i}
              selected={item?.selected}
              disabled={item?.disabled}
              onClick={() => {
                setSelectedWeekEnding(item?.date);
              }}
            >
              {YYYY_MM_DD(item?.date)}
            </ListItem>
          ))}
        </List>
      </Card>

      {/* status this week */}
      <List>
        <Typography variant={`h3`}>Budget Breakdown (This week)</Typography>
        {data?.getBudgetReport?.budgetBreakdownThisWeek?.map((item) => {
          const { phase, cost, budget, status } = item;
          return (
            <BudgetStatsCard
              title={phase as string}
              cost={cost as number}
              budget={budget as number}
              status={status as string}
            />
          );
        })}
      </List>

      {/* status YTD */}
      <List>
        <Typography variant={`h3`}>Budget Breakdown (YTD)</Typography>
        {data?.getBudgetReport?.budgetBreakdownYtd?.map((item) => {
          const { phase, cost, budget, status } = item;
          return (
            <BudgetStatsCard
              title={phase as string}
              cost={cost as number}
              budget={budget as number}
              status={status as string}
            />
          );
        })}
      </List>
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
