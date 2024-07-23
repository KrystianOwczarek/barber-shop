import { MetadataRoute } from 'next'
 
export default function sitemap() {
  return [
    {
      url: 'https://barbershopraszkow.pl',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://barbershopraszkow.pl/rodo',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}