import { createFileRoute } from '@tanstack/react-router'
import LegalPage from '#/components/LegalPage'
import { deliveryPolicy } from '#/data/legal'

export const Route = createFileRoute('/delivery-policy')({
  head: () => ({
    meta: [
      { title: 'Service Delivery Policy | Softimist Limited' },
      { name: 'description', content: deliveryPolicy.description },
    ],
  }),
  component: DeliveryPage,
})

function DeliveryPage() {
  return <LegalPage doc={deliveryPolicy} />
}
