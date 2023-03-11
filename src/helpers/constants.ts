

export const ALO_APPS: Record<string, any> = {
  'alo-mobile': {
    image: 'https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-19/326500843_481214920868220_2909157582924248465_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.feoh1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=zpNsbbv9DecAX_sZGql&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDEWSesvnNPCaTp3DvSlfs7YJ5V8dC3xnctu8jJA9H01A&oe=640BEF70&_nc_sid=8fd12b',
    alt: "alomobilectg's profile picture"
  },
  'alo-trends': {
    image: 'https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-19/140128724_705994896772785_358407318703679639_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.feoh1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=5Fst73TVVZYAX-dxBGz&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA7lC0qdybvD7pkHSohYmecTI9hxZFwDeHNqLrzV9ZDVw&oe=640C3657&_nc_sid=8fd12b',
    alt: "alotrends.co's profile picture"
  },
  'alo-cases': {
    image: 'https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-19/273175733_728508584805497_1129300155544973587_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.feoh1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Y9wGfvQnRAIAX_91vz-&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBA4AYAAnr1dNJhZy3WQilfl55kbdtd8BSbThk145fyIQ&oe=640CFFC1&_nc_sid=8fd12b',
    alt: "alocases_co's profile picture"
  },
}
export const ALO_IDS_SUPPORTED: string[] = JSON.parse(process.env.NEXT_PUBLIC_ALO_IDS ?? '')
export const ROUTES_LOGIN = [...ALO_IDS_SUPPORTED.map(alo => '/'+alo), '/']


export const DEFAULT_IMG = 'https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-19/326500843_481214920868220_2909157582924248465_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.feoh1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=zpNsbbv9DecAX_sZGql&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDEWSesvnNPCaTp3DvSlfs7YJ5V8dC3xnctu8jJA9H01A&oe=640BEF70&_nc_sid=8fd12b'
export const DEFAULT_ALT = "alomobilectg's profile picture"

