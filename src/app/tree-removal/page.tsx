import { WithContext, LocalBusiness } from 'schema-dts';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { RelatedServices } from '@/components/related-services';
import { JsonLd } from '@/components/json-ld';
import { AlertTriangle, Home, Zap, Ruler, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_NAME, PHONE_HREF, PHONE_NUMBER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Hazardous Tree Removal Tyler, TX | Precision Takedowns',
  description: 'Expert tree removal service in Tyler. We safely remove large, hazardous, and storm-damaged trees using cranes and rigging. Zero-impact lawn protection.',
  alternates: {
    canonical: '/tree-removal',
  },
  openGraph: {
    title: 'Tree Removal Tyler, TX | Expert Takedowns & Crane Service',
    description: 'Safe, licensed tree removal in Tyler, TX. We handle hazardous pines, oaks near houses, and complex rigging. Free estimates.',
    url: 'https://tylertreeremoval.com/tree-removal',
    siteName: 'Tyler Tree Service',
    locale: 'en_US',
    type: 'website',
  },
};

export default function TreeRemovalPage() {
  const arboristSchema: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: COMPANY_NAME,
    url: 'https://tylertreeservice.com',
    telephone: PHONE_NUMBER,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tyler',
      addressRegion: 'TX',
      postalCode: '75701',
      streetAddress: 'Tyler', 
    },
    areaServed: [
      { '@type': 'City', name: 'Tyler' },
      { '@type': 'City', name: 'Whitehouse' },
      { '@type': 'City', name: 'Lindale' },
    ],
    // @ts-expect-error - serviceType is valid for LocalBusiness
    serviceType: 'Tree Removal',
  };

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans selection:bg-green-200 selection:text-green-900">
      <JsonLd data={arboristSchema} />
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-stone-900">
          <div 
            className="absolute inset-0 z-0 bg-[url('/assets/tyler-removal-hero-page.jpg')] bg-cover bg-center"
          >
             <div className="absolute inset-0 bg-stone-900/80" />
          </div>
          
          <div className="container relative z-10 px-6 mx-auto text-center">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm text-stone-200 text-sm font-medium tracking-widest uppercase mb-8">
              <AlertTriangle className="w-4 h-4 text-orange-500" /> Dangerous & Complex Removals
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase">
              Surgical <br /> Tree Removal
            </h1>
            <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              We specialize in the difficult jobs. Removing massive Pines over houses, navigating power lines, and zero-impact rigging in tight spaces.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold h-16 px-10 rounded-none uppercase tracking-wider">
              <Link href={PHONE_HREF}>
                Get Removal Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* THE PROBLEM (Checkerboard) */}
        <section className="py-0">
           <div className="grid md:grid-cols-2 min-h-[600px]">
              <div className="bg-stone-100 flex items-center justify-center p-12 lg:p-24">
                 <div className="max-w-lg">
                    <div className="text-orange-600 font-bold uppercase tracking-widest mb-4 text-sm">The Risk</div>
                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 leading-tight">THE DANGER OF WAITING</h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                       A dead tree isn't just ugly; it's a ticking time bomb. In Texas, one ice storm or high-wind event can turn a standing dead Oak into a roof-crushing liability.
                    </p>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                       We see it every year: homeowners wait until "next season," only to pay 10x more for emergency removal after it falls on their garage.
                    </p>
                    <div className="p-6 bg-white border-l-4 border-orange-500 shadow-sm">
                       <h3 className="font-bold text-lg text-stone-900 mb-2">Visual Warning Signs:</h3>
                       <ul className="space-y-2 text-stone-600 text-sm">
                          <li>• Pitch tubes (popcorn-shaped sap) on the trunk</li>
                          <li>• Deep vertical cracks in the trunk</li>
                          <li>• Fungus (mushrooms) growing at the base</li>
                          <li>• Dead branches in the upper canopy ("Stagheading")</li>
                       </ul>
                    </div>
                 </div>
              </div>
              <div className="bg-[url('/assets/tyler-removal-danger.jpg')] bg-cover bg-center min-h-[400px]" />
           </div>
        </section>

        {/* PRICING & FACTORS (Dark Mode) */}
        <section className="bg-stone-900 text-white py-24">
           <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase">What Determines the Cost?</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {/* Factor 1 */}
                 <div className="bg-stone-800/50 p-8 border border-stone-700 hover:border-green-500 transition-colors">
                    <Ruler className="w-10 h-10 text-green-500 mb-6" />
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Height & Size</h3>
                    <p className="text-stone-400 leading-relaxed">
                       Volume matters. A 100ft Oak generates tons of biomass that must be rigged down, chipped, and hauled away.
                    </p>
                 </div>
                 
                 {/* Factor 2 */}
                 <div className="bg-stone-800/50 p-8 border border-stone-700 hover:border-green-500 transition-colors">
                    <Home className="w-10 h-10 text-green-500 mb-6" />
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Accessibility</h3>
                    <p className="text-stone-400 leading-relaxed">
                       Can we get a bucket truck to it? Or do we have to climb it manually? Rear-yard trees with narrow gates cost more.
                    </p>
                 </div>

                 {/* Factor 3 */}
                 <div className="bg-stone-800/50 p-8 border border-stone-700 hover:border-green-500 transition-colors">
                    <Zap className="w-10 h-10 text-green-500 mb-6" />
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Targets</h3>
                    <p className="text-stone-400 leading-relaxed">
                       "Targets" are things under the tree (pool, house, power line). High-risk targets require slower, more technical rigging.
                    </p>
                 </div>

                 {/* Factor 4 */}
                 <div className="bg-stone-800/50 p-8 border border-stone-700 hover:border-green-500 transition-colors">
                    <AlertTriangle className="w-10 h-10 text-green-500 mb-6" />
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Stability</h3>
                    <p className="text-stone-400 leading-relaxed">
                       Is it safe to climb? If a tree is too rotten, we may need a crane to remove it safely, which adds equipment costs.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-green-950 text-center">
           <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase">Don't risk your roof.</h2>
              <p className="text-xl text-green-200/80 mb-10 max-w-2xl mx-auto">
                 We provide free safety assessments. We'll tell you honestly if it needs to go or if it can be saved.
              </p>
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold h-16 px-12 rounded-none uppercase tracking-widest shadow-xl">
                 <Link href={PHONE_HREF}>
                    Call {PHONE_NUMBER} Now
                 </Link>
              </Button>
           </div>
        </section>

        <RelatedServices current="removal" />
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
