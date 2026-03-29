import { createFileRoute } from '@tanstack/react-router'
import DrillingBookPage from '@/pages/DrillingBookPage'

export const Route = createFileRoute('/drilling-book')({
  component: DrillingBookPage,
})
