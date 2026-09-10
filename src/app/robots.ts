import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      // AI crawlers are welcome: the Club wants to be cited in AI answers.
      { userAgent: ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'], allow: '/' },
    ],
    sitemap: 'https://www.restaurantswhocare.com/sitemap.xml',
    host: 'https://www.restaurantswhocare.com',
  };
}
