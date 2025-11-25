import { WithContext, Service } from 'schema-dts';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { RelatedServices } from '@/components/related-services';
import { JsonLd } from '@/components/json-ld';
import { Phone, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_NAME, PHONE_HREF, PHONE_NUMBER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Stump Grinding Tyler | Deep Root Removal',
  description: 'Complete stump removal and grinding services in Tyler. We grind stumps below grade so you can replant. Affordable and fast service.',
  alternates: {
    canonical: '/stump-grinding',
  },
};

export default function StumpGrindingPage() {
  const serviceSchema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Stump Grinding',
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
    },
    areaServed: {
      '@type': 'City',
      name: 'Tyler',
    },
    description: 'Professional stump grinding and removal services.',
  };

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans selection:bg-green-200 selection:text-green-900">
      <JsonLd data={serviceSchema} />
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-stone-900">
          <div 
            className="absolute inset-0 z-0 bg-[url('/assets/tyler-stump-grinding-machine.jpg')] bg-cover bg-center"
          >
             <div className="absolute inset-0 bg-stone-900/80" />
          </div>
          
          <div className="container relative z-10 px-6 mx-auto text-center">
             <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm text-stone-200 text-sm font-medium tracking-widest uppercase mb-8">
              <Shield className="w-4 h-4 text-green-500" /> Yard Reclamation
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase">
              Stump <br /> Removal
            </h1>
            <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Reclaim your lawn. We grind stumps 12 inches below grade, destroying the root ball and allowing you to plant grass immediately.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold h-16 px-10 rounded-none uppercase tracking-wider">
              <Link href={PHONE_HREF}>
                Get Grinding Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* THE PROCESS (Checkerboard) */}
        <section className="py-0">
           <div className="grid md:grid-cols-2 min-h-[600px]">
              <div className="bg-stone-100 flex items-center justify-center p-12 lg:p-24">
                 <div className="max-w-lg">
                    <div className="text-orange-600 font-bold uppercase tracking-widest mb-4 text-sm">Why Remove It?</div>
                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 leading-tight">STOP THE ROT</h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                       A rotting stump is a magnet for pests. Termites, carpenter ants, and beetles use old stumps as a "beachhead" to eventually invade your home.
                    </p>
                    <ul className="space-y-4">
                       <li className="flex items-center gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                          <span className="text-stone-800 font-medium">Prevents termite colonies</span>
                       </li>
                       <li className="flex items-center gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                          <span className="text-stone-800 font-medium">Removes tripping hazards</span>
                       </li>
                       <li className="flex items-center gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                          <span className="text-stone-800 font-medium">Allows for instant replanting</span>
                       </li>
                    </ul>
                 </div>
              </div>
              <div className="bg-[url('/assets/tyler-stump-grinding-machine.jpg')] bg-cover bg-center min-h-[400px]" />
           </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-green-950 text-center">
           <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase">Get Your Yard Back</h2>
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold h-16 px-12 rounded-none uppercase tracking-widest shadow-xl">
                 <Link href={PHONE_HREF}>
                    Call {PHONE_NUMBER}
                 </Link>
              </Button>
           </div>
        </section>
        <RelatedServices current="stump" />
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