import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
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
export const BudgetStatsCard = () => {
  return (
    <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Tania Andrew
            </Typography>
            <div className="5 flex items-center gap-0">
              <RedCircleIcon />
              <GreenCircleIcon />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>test</Typography>
      </CardBody>
    </Card>
  );
};
