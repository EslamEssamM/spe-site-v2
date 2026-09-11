import { createFileRoute } from '@tanstack/react-router'
import FlipbookPage from '@/pages/FlipbookPage'
// @ts-ignore
export const Route = createFileRoute('/magazine/$id')({
  component: FlipbookPage,
})
