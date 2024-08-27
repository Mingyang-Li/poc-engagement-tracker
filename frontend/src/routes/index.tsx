import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

const Page = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link to={`/engagement`}>
        <button>View engagements</button>
      </Link>
      <h1 className="text-3xl font-bold bg-blue-500">Hello world!</h1>
    </>
  );
};

export const Route = createFileRoute('/')({
  component: Page,
});
