import { createFileRoute } from '@tanstack/react-router'
import LegalPage from '#/components/LegalPage'
import { termsOfService } from '#/data/legal'

export const Route = createFileRoute('/terms-of-service')({
  head: () => ({
    meta: [
      { title: 'Terms of Service | Softimist Limited' },
      { name: 'description', content: termsOfService.description },
    ],
  }),
  component: TermsPage,
})

function TermsPage() {
  return <LegalPage doc={termsOfService} />
}
