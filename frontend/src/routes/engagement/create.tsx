import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/engagement/create')({
  component: () => <div>Hello /engagement/create!</div>
})