

export const ALO_APPS: Record<string, any> = {
  'alo-mobile': {
    image: '/images/alo-mobile.jpeg',
    alt: "alomobilectg's profile picture",
    title: 'Alo Mobile',
    value: 'alo-mobile'
  },
  'alo-trends': {
    image: '/images/alo-trends.jpeg',
    alt: "alotrends.co's profile picture",
    title: 'Alo Trends',
    value: 'alo-trends'
  },
  'alo-cases': {
    image: '/images/alo-cases.jpeg',
    alt: "alocases_co's profile picture",
    title: 'Alo Cases',
    value: 'alo-cases'
  },
}
export const ALO_IDS_SUPPORTED: string[] = JSON.parse(process.env.NEXT_PUBLIC_ALO_IDS ?? '')
export const ROUTES_LOGIN = [...ALO_IDS_SUPPORTED.map(alo => '/'+alo), '/']


export const DEFAULT_IMG = '/images/alo-mobile.jpeg'
export const DEFAULT_ALT = "alomobilectg's profile picture"

