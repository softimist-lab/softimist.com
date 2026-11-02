import { detectCountry } from '#/server/detect-country'
import { marketForCountry } from '#/data/pricing'

/**
 * The market always comes from the CDN's country header, never from the URL:
 * Edushade offers each catalogue only in its own market, so a visitor who could
 * pick another one would be sent to a plan that signup refuses.
 */
export async function loadPricingMarket() {
  return { market: marketForCountry(await detectCountry()) }
}
