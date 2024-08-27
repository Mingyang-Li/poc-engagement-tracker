import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const schema = z.object({
  engagementId: z.string(),
  weekEnding: z.date().default(new Date()).optional(),
});

export const Route = createFileRoute('/engagement/budget-report')({
  component: () => <div>Hello /engagement/budget-report!</div>,
  validateSearch: (search: Record<string, unknown>) => {
    return schema.parse(search);
  },
});
