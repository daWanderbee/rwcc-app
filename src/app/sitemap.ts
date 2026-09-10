import type { MetadataRoute } from 'next';

// ponytail: one-page site, one URL. Add member/city pages here when they exist.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.restaurantswhocare.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
