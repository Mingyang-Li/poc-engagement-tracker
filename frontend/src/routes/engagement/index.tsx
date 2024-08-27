import { createFileRoute } from '@tanstack/react-router';
import { animalNames } from '../../constants';

/** Need to render table n data in own component */
const Page = () => {
  const engagements = animalNames.map((animal) => `Project ${animal}`);

  return (
    <>
      <div>Engagement table page</div>
      {engagements?.map((item) => <p>{item}</p>)}
    </>
  );
};

export const Route = createFileRoute('/engagement/')({
  component: Page,
});
