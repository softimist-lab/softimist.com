import { createServerFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'

/** Country headers set by the CDN in front of the app, checked in order. */
const COUNTRY_HEADERS = ['cf-ipcountry', 'x-vercel-ip-country', 'cloudfront-viewer-country', 'x-country-code'] as const

export const detectCountry = createServerFn({ method: 'GET' }).handler(async () => {
  for (const name of COUNTRY_HEADERS) {
    const value = getRequestHeader(name)?.trim().toUpperCase()
    // Cloudflare uses XX for unknown and T1 for Tor.
    if (value && /^[A-Z]{2}$/.test(value) && value !== 'XX' && value !== 'T1') return value
  }
  return null
})
