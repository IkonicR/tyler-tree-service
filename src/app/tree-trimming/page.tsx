import { WithContext, Service } from 'schema-dts';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { RelatedServices } from '@/components/related-services';
import { JsonLd } from '@/components/json-ld';
import { Phone, Shield, Scissors, Sprout, Wind, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { COMPANY_NAME, PHONE_HREF, PHONE_NUMBER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tree Trimming & Pruning Tyler | Storm Prevention',
  description: 'Expert tree trimming and pruning in Tyler to improve tree health and safety. Prevent storm damage with crown thinning and deadwooding.',
  alternates: {
    canonical: '/tree-trimming',
  },
};

export default function TreeTrimmingPage() {
  const serviceSchema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tree Trimming',
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tyler',
        addressRegion: 'TX',
        postalCode: '75701',
        streetAddress: 'Tyler', 
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Tyler' },
      { '@type': 'City', name: 'Whitehouse' },
      { '@type': 'City', name: 'Lindale' },
    ],
    description: 'Professional tree trimming and pruning services.',
  };

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans selection:bg-green-200 selection:text-green-900">
      <JsonLd data={serviceSchema} />
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-stone-900">
          <div 
            className="absolute inset-0 z-0 bg-[url('/assets/tyler-trimming-hero-page.jpg')] bg-cover bg-center"
          >
             <div className="absolute inset-0 bg-stone-900/80" />
          </div>
          
          <div className="container relative z-10 px-6 mx-auto text-center">
             <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm text-stone-200 text-sm font-medium tracking-widest uppercase mb-8">
              <Scissors className="w-4 h-4 text-green-500" /> Health & Aesthetics
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase">
              Canopy <br /> Engineering
            </h1>
            <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              We don't just "cut branches." We engineer the tree's structure to withstand Tyler's winds, extending its life and protecting your home.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold h-16 px-10 rounded-none uppercase tracking-wider">
              <Link href={PHONE_HREF}>
                Schedule Trimming <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* THE METHOD (Checkerboard) */}
        <section className="py-0">
           <div className="grid md:grid-cols-2 min-h-[600px]">
              <div className="bg-white flex items-center justify-center p-12 lg:p-24">
                 <div className="max-w-lg">
                    <div className="text-green-600 font-bold uppercase tracking-widest mb-4 text-sm">The Science</div>
                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 leading-tight">WHY WE PRUNE</h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                       Trees in the Piney Woods grow tall and lean. Without pruning, they become "sails" that catch the wind, leading to failure. We also prune to prevent the spread of devastating diseases.
                    </p>
                    <div className="space-y-6">
                       <div>
                          <h3 className="font-bold text-xl text-stone-900 mb-2 flex items-center gap-2">
                             <Wind className="w-6 h-6 text-green-600" /> Crown Thinning
                          </h3>
                          <p className="text-stone-600 text-sm">Selectively removing inner branches to allow wind to flow <em>through</em> the tree, reducing storm stress by up to 40%.</p>
                       </div>
                       <div>
                          <h3 className="font-bold text-xl text-stone-900 mb-2 flex items-center gap-2">
                             <Sprout className="w-6 h-6 text-green-600" /> Deadwooding & Health
                          </h3>
                          <p className="text-stone-600 text-sm">Removing dead limbs that attract <strong>Pine Bark Beetles</strong> and provide an entry point for <strong>Hypoxylon Canker</strong>.</p>
                       </div>
                       <div>
                          <h3 className="font-bold text-xl text-stone-900 mb-2 flex items-center gap-2">
                             <Shield className="w-6 h-6 text-green-600" /> Clearance
                          </h3>
                          <p className="text-stone-600 text-sm">Creating safe distance between tree limbs and your roof, siding, or service lines to prevent abrasion and rodent access.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="bg-[url('/assets/tyler-trimming-detail.jpg')] bg-cover bg-center min-h-[400px]" />
           </div>
        </section>

        {/* NO TOPPING WARNING */}
        <section className="bg-stone-900 text-white py-24">
           <div className="container mx-auto px-6 text-center max-w-3xl">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">We Do NOT Top Trees</h2>
              <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                 "Topping" (cutting the top off a tree) is an outdated, harmful practice that creates weak regrowth and eventually kills the tree. If a company offers to top your tree, fire them. We only use ISA-approved reduction cuts.
              </p>
           </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white text-center border-t border-stone-100">
           <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-8 uppercase">Beautify Your Landscape</h2>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold h-16 px-12 rounded-none uppercase tracking-widest shadow-xl">
                 <Link href={PHONE_HREF}>
                    Get a Trimming Quote
                 </Link>
              </Button>
           </div>
        </section>
        <RelatedServices current="trimming" />
      </main>

      <Footer />
      
      {/* Sticky Mobile Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-16 text-lg rounded-none uppercase tracking-wider shadow-[0_-4px_10px_rgba(0,0,0,0.3)]">
          <Link href={PHONE_HREF}>
            <Phone className="mr-3 h-5 w-5" />
            Call for Estimate
          </Link>
        </Button>
      </div>
    </div>
  );
}