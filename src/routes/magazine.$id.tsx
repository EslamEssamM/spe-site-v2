import { createFileRoute } from '@tanstack/react-router'
import MagazinePage from '@/pages/MagazinePage'
// @ts-ignore
export const Route = createFileRoute('/magazine/$id')({
  component: MagazinePage,
})
