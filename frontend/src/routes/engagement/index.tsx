import { createFileRoute } from '@tanstack/react-router';
import { animalNames } from '../../constants';
import { EngagementCard } from '@/features/cards/engagement-card';
import { Engagement } from '@/generated/graphql';

/** Need to render table n data in own component */
const Page = () => {
  const engagements: Partial<Engagement>[] = animalNames.map((animal, _i) => {
    const item: Partial<Engagement> = {
      id: _i.toString(),
      name: `Project ${animal}`,
      engagementPartner: `Partner ${_i}`,
      engagementManager: `Manager ${_i}`,
    };
    return item;
  });

  return (
    <>
      <div>Engagement table page</div>
      <div className={`flex gap-3`}>
        {engagements?.map((item) => (
          <EngagementCard
            key={item?.id}
            id={item?.id}
            name={item?.name}
            engagementManager={item?.engagementManager}
            engagementPartner={item?.engagementPartner}
          />
        ))}
      </div>
    </>
  );
};

export const Route = createFileRoute('/engagement/')({
  component: Page,
});
