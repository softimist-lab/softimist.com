import { createFileRoute } from '@tanstack/react-router'
import LegalPage from '#/components/LegalPage'
import { refundPolicy } from '#/data/legal'

export const Route = createFileRoute('/refund-policy')({
  head: () => ({
    meta: [
      { title: 'Refund & Cancellation Policy | Softimist Limited' },
      { name: 'description', content: refundPolicy.description },
    ],
  }),
  component: RefundPage,
})

function RefundPage() {
  return <LegalPage doc={refundPolicy} />
}
