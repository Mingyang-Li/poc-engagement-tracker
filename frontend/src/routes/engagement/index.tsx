import { createFileRoute } from '@tanstack/react-router';
import { animalNames } from '../../constants';
import { EngagementCard } from '@/features/cards/engagement-card';

/** Need to render table n data in own component */
const Page = () => {
  const engagements = animalNames.map((animal) => `Project ${animal}`);

  return (
    <>
      <div>Engagement table page</div>
      <div className={`flex gap-3`}>
        {engagements?.map((item) => <EngagementCard key={item} />)}
      </div>
    </>
  );
};

export const Route = createFileRoute('/engagement/')({
  component: Page,
});
