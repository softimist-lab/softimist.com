import { useNavigate } from '@tanstack/react-router'
import { Globe } from 'lucide-react'
import { pricingRegions } from '#/data/pricing'
import type { PricingRegion } from '#/types'

export default function RegionSwitcher({ region }: { region: PricingRegion }) {
  const navigate = useNavigate()

  return (
    <label className="inline-flex items-center gap-2 rounded-xl border border-(--line) bg-(--surface-strong) px-3 py-2 text-sm text-(--ink-soft)">
      <Globe size={15} className="text-(--ink-muted)" />
      <span className="sr-only">Pricing region</span>
      <select
        value={region.code}
        onChange={(e) =>
          navigate({
            to: '.',
            search: (prev: Record<string, unknown>) => ({ ...prev, country: e.target.value }),
            replace: true,
          } as never)
        }
        className="cursor-pointer bg-transparent font-medium text-(--ink) outline-none"
      >
        {pricingRegions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name} ({option.currency})
          </option>
        ))}
      </select>
    </label>
  )
}
