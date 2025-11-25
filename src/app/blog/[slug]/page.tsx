import { Metadata } from 'next';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { getPostData, getSortedPostsData } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar, User } from 'lucide-react';
import { SITE_DOMAIN } from '@/lib/constants';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostData(slug);
  return {
    title: `${post.title} | Tyler Tree Service Blog`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostData(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image ? [`https://${SITE_DOMAIN}${post.image}`] : [],
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Tyler Tree Service',
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans selection:bg-green-200 selection:text-green-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      <article className="flex-1 pt-32 pb-24">
        {/* Article Header */}
        <header className="container mx-auto px-6 max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-green-700 mb-6 border-b border-green-200 pb-2">
             <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
             <span className="text-stone-300">|</span>
             <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author || 'Tyler Tree Service'}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-stone-900 mb-12 leading-none tracking-tight uppercase">
            {post.title}
          </h1>
          {post.image && (
            <div className="relative w-full h-[500px] border-b-4 border-green-700">
               <Image 
                 src={post.image}
                 alt={post.title}
                 fill
                 className="object-cover"
                 priority
               />
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="prose prose-lg prose-stone max-w-none 
            prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-stone-900 
            prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-green-600 prose-h2:pl-4
            prose-h3:text-xl prose-h3:font-bold prose-h3:text-stone-800 prose-h3:mt-8
            prose-p:text-stone-600 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:my-6 prose-li:text-stone-700 prose-li:marker:text-green-600 prose-li:font-medium
            prose-strong:text-stone-900 prose-strong:font-black
            prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:bg-orange-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:font-bold prose-blockquote:text-orange-900 prose-blockquote:rounded-r-lg
            prose-a:text-green-700 prose-a:font-bold prose-a:no-underline hover:prose-a:text-orange-600 hover:prose-a:underline transition-colors">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}