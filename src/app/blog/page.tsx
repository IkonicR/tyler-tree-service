import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { getSortedPostsData } from '@/lib/blog';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tyler Tree Care Blog | Expert Advice & Local Guides',
  description: 'Expert tree care advice for Tyler homeowners. Learn about local pests, tree removal costs, and seasonal maintenance.',
};

export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans selection:bg-green-200 selection:text-green-900">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 uppercase">Tree Care Knowledge</h1>
            <p className="text-xl text-stone-600">
              Expert advice for Smith County homeowners. From ordinances to oak wilt, we cover it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full block">
                <article className="h-full border border-stone-200 bg-white transition-all duration-300 hover:border-green-600 hover:shadow-lg flex flex-col">
                  <div className="relative h-64 w-full bg-stone-100 border-b border-stone-100">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-stone-400 uppercase tracking-widest text-sm font-bold">No Image</div>
                    )}
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/5 transition-colors duration-300" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-green-700 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-2xl font-black text-stone-900 mb-4 leading-tight group-hover:text-green-700 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-stone-600 mb-8 line-clamp-3 leading-relaxed flex-1">
                      {post.description}
                    </p>
                    <div className="text-stone-900 font-bold text-sm uppercase tracking-widest border-b-2 border-stone-200 pb-1 self-start group-hover:border-green-600 transition-colors">
                      Read Article
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
