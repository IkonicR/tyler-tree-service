import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { QuoteForm } from '@/components/quote-form';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_NAME, PHONE_HREF, PHONE_NUMBER, ADDRESS, SERVICE_AREA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Tyler Tree Service | Free Estimates',
  description: 'Contact us for a free tree service estimate in Tyler, TX. Call now or fill out our online form. Fast response for tree removal and trimming.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans selection:bg-green-200 selection:text-green-900">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION: Consistent with Home Page */}
        <section className="relative py-24 md:py-32 bg-stone-900 text-white overflow-hidden">
           <div className="absolute inset-0 bg-stone-950/80 z-0" />
           <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm text-stone-200 text-sm font-medium tracking-widest uppercase mb-6">
              <ShieldCheck className="w-4 h-4 text-green-500" /> Licensed & Insured
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase">
              Contact Us
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
              Get a free estimate for tree removal, trimming, or stump grinding. We respond to all inquiries within 24 hours.
            </p>
          </div>
        </section>

        <div className="bg-white py-20">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info - Styled to match "Local Guide" section */}
            <div className="space-y-12">
              <div>
                 <h2 className="text-3xl font-black text-stone-900 mb-6 uppercase tracking-tight">Get In Touch</h2>
                 <p className="text-stone-600 text-lg leading-relaxed">
                    Have a question about a tree? Need an emergency assessment? We are here to help homeowners in Jasper and Newton counties.
                 </p>
              </div>

              <div className="grid gap-8">
                <div className="flex items-start gap-6 p-6 bg-stone-50 border border-stone-100 rounded-lg hover:border-stone-200 transition-colors">
                  <div className="bg-green-100 p-3 rounded-full">
                     <Phone className="w-6 h-6 text-green-700 shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-900 uppercase tracking-wide mb-1">Phone</h3>
                    <p className="text-stone-500 text-sm mb-2 uppercase tracking-wider">Available 24/7 for Emergencies</p>
                    <a href={PHONE_HREF} className="text-2xl font-black text-stone-900 hover:text-green-600 transition-colors">{PHONE_NUMBER}</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-stone-50 border border-stone-100 rounded-lg hover:border-stone-200 transition-colors">
                  <div className="bg-orange-100 p-3 rounded-full">
                     <Clock className="w-6 h-6 text-orange-700 shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-900 uppercase tracking-wide mb-1">Hours</h3>
                    <div className="space-y-1">
                       <p className="text-stone-700 font-medium">Monday - Saturday: <span className="text-stone-500">7:00 AM - 7:00 PM</span></p>
                       <p className="text-stone-700 font-medium">Sunday: <span className="text-orange-600 font-bold">Emergency Service Only</span></p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-stone-50 border border-stone-100 rounded-lg hover:border-stone-200 transition-colors">
                  <div className="bg-stone-200 p-3 rounded-full">
                     <MapPin className="w-6 h-6 text-stone-700 shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-900 uppercase tracking-wide mb-1">Service Area</h3>
                    <p className="text-stone-600 leading-relaxed">{SERVICE_AREA} and surrounding areas in Jasper & Newton Counties.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section - Using the shared QuoteForm */}
            <div className="relative">
               <QuoteForm />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}