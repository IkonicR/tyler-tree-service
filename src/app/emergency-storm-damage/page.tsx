import { WithContext, Service } from 'schema-dts';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { RelatedServices } from '@/components/related-services';
import { JsonLd } from '@/components/json-ld';
import { Phone, ShieldCheck, Zap, Home, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_NAME, PHONE_HREF, PHONE_NUMBER } from '@/lib/constants';

export const metadata: Metadata = {
  title: '24/7 Emergency Tree Service Tyler | Storm Damage',
  description: '24/7 Emergency tree removal and storm damage cleanup in Tyler, TX. We handle trees on houses, cars, and driveways. Immediate response available.',
  alternates: {
    canonical: '/emergency-storm-damage',
  },
};

export default function EmergencyPage() {
  const serviceSchema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Emergency Tree Service',
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
    },
    areaServed: {
      '@type': 'City',
      name: 'Tyler',
    },
    description: '24/7 Emergency tree removal and storm damage cleanup.',
  };

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans selection:bg-red-200 selection:text-red-900">
      <JsonLd data={serviceSchema} />
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-stone-900">
          <div 
            className="absolute inset-0 z-0 bg-[url('/assets/tyler-emergency-hero-page.jpg')] bg-cover bg-center"
          >
             <div className="absolute inset-0 bg-red-950/80" />
          </div>
          
          <div className="container relative z-10 px-6 mx-auto text-center">
             <div className="inline-flex items-center gap-2 border border-red-500/50 bg-red-900/30 backdrop-blur-sm px-4 py-2 rounded-sm text-red-200 text-sm font-bold tracking-widest uppercase mb-8 animate-pulse">
              <Clock className="w-4 h-4" /> 24/7 Priority Dispatch
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase">
              Storm Damage <br /> <span className="text-red-500">Emergency</span>
            </h1>
            <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              If a tree is on your house, driveway, or power line, do not wait. We dispatch immediately to stabilize the situation and prevent further damage.
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold h-16 px-10 rounded-none uppercase tracking-wider shadow-red-900/50 shadow-lg">
              <Link href={PHONE_HREF}>
                Call Emergency Line <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* PRIORITIES (Dark Mode) */}
        <section className="bg-stone-900 text-white py-24">
           <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                 <div className="p-8 border border-stone-800 bg-stone-800/50">
                    <Home className="w-12 h-12 text-red-500 mb-6" />
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Tree on Structure</h3>
                    <p className="text-stone-400">We use cranes to lift the tree off your roof without causing secondary collapse. We can also install emergency tarps.</p>
                 </div>
                 <div className="p-8 border border-stone-800 bg-stone-800/50">
                    <Zap className="w-12 h-12 text-red-500 mb-6" />
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Blocked Access</h3>
                    <p className="text-stone-400">Clearing driveways and roads so emergency vehicles (and you) can get in and out safely.</p>
                 </div>
                 <div className="p-8 border border-stone-800 bg-stone-800/50">
                    <ShieldCheck className="w-12 h-12 text-red-500 mb-6" />
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Insurance Help</h3>
                    <p className="text-stone-400">We take photos, document the damage, and speak the language of insurance adjusters to help your claim.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* SAFETY WARNING */}
        <section className="py-24 bg-white text-center">
           <div className="container mx-auto px-6 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-8 uppercase">Safety First</h2>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed">
                 Do not attempt to remove storm debris near power lines. Electricity can arc through wet wood. Call Oncor to cut power, then call us.
              </p>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold h-16 px-12 rounded-none uppercase tracking-widest shadow-xl">
                 <Link href={PHONE_HREF}>
                    Call {PHONE_NUMBER} Now
                 </Link>
              </Button>
           </div>
        </section>
        <RelatedServices current="emergency" />
      </main>

      <Footer />
      
      {/* Sticky Mobile Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-16 text-lg rounded-none uppercase tracking-wider shadow-[0_-4px_10px_rgba(0,0,0,0.3)]">
          <Link href={PHONE_HREF}>
            <Phone className="mr-3 h-5 w-5" />
            Call Emergency Now
          </Link>
        </Button>
      </div>
    </div>
  );
}