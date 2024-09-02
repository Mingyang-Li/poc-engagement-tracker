import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';

const RedCircleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-red-700"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
    </svg>
  );
};

const GreenCircleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-green-700"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
    </svg>
  );
};

export type BudgetStatsCardProps = {
  title: string;
  cost: number;
  budget: number;
  status: string;
};
export const BudgetStatsCard = (props: BudgetStatsCardProps) => {
  const { title, cost, budget, status } = props;

  const isOverBudget = cost - budget > 0 ? true : false;

  return (
    <Card shadow={false} className={`p-2 w-80 rounded-lg border-2`}>
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {title}
            </Typography>
            <div className="5 flex items-center gap-0">
              {isOverBudget ? <RedCircleIcon /> : <GreenCircleIcon />}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <div className={`flex justify-between`}>
          <Typography>Cost:</Typography>
          <Typography>${cost}</Typography>
        </div>

        <div className={`flex justify-between`}>
          <Typography>Budget:</Typography>
          <Typography>${budget}</Typography>
        </div>

        <div className={`flex justify-between`}>
          <Typography>Status:</Typography>
          <Typography>{status}</Typography>
        </div>
      </CardBody>
    </Card>
  );
};
