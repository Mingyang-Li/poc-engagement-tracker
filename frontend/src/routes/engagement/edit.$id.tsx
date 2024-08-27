import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/engagement/edit/$id')({
  component: () => <div>Hello /engagement/edit/$id!</div>,
});
