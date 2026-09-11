import { Navigate, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/flipbook/$id')({
  component: LegacyFlipbookRedirect,
})

function LegacyFlipbookRedirect() {
  const { id } = Route.useParams()

  return <Navigate to="/magazine/$id" params={{ id }} replace />
}
