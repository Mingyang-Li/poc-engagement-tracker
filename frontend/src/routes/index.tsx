import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

const Page = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link to={`/engagement`}>
        <button>View engagements</button>
      </Link>
    </>
  );
};

export const Route = createFileRoute('/')({
  component: Page,
});
