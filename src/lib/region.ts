import { detectCountry } from '#/server/detect-country'
import { marketForCountry } from '#/data/pricing'

/** The visitor's market, from the CDN's country header. */
export async function loadPricingMarket() {
  return { market: marketForCountry(await detectCountry()) }
}
