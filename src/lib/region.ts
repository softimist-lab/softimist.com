import { detectCountry } from '#/server/detect-country'
import { resolveRegion } from '#/data/pricing'

/** `?country=XX` overrides the country detected from the CDN request headers. */
export async function loadPricingRegion(country: string | undefined) {
  const detected = country ? null : await detectCountry()
  return { region: resolveRegion(country ?? detected ?? undefined) }
}

export function validateCountrySearch(search: Record<string, unknown>) {
  return typeof search.country === 'string' && /^[a-z]{2,4}$/i.test(search.country)
    ? search.country.toUpperCase()
    : undefined
}
