import { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tylermotreeservice.com'
  
  // Core Pages
  const routes = [
    '',
    '/tree-removal',
    '/stump-grinding',
    '/tree-trimming',
    '/emergency-storm-damage',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic Service Area Pages
  const cities = ['webb-city', 'carl-junction', 'carterville', 'oronogo']
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/service-areas/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9, // High priority for local SEO
  }))

  // Dynamic Blog Posts
  const posts = getSortedPostsData()
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...cityRoutes, ...blogRoutes]
}
