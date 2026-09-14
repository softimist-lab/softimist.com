import { createFileRoute } from '@tanstack/react-router'
import LegalPage from '#/components/LegalPage'
import { privacyPolicy } from '#/data/legal'

export const Route = createFileRoute('/privacy-policy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy | Softimist Limited' },
      { name: 'description', content: privacyPolicy.description },
    ],
  }),
  component: PrivacyPage,
})

function PrivacyPage() {
  return <LegalPage doc={privacyPolicy} />
}
