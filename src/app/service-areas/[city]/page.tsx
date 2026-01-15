import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { QuoteForm } from '@/components/quote-form';
import { Phone, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { PHONE_NUMBER } from '@/lib/constants';
import { TrackedPhoneLink, TrackedPhoneAnchor } from '@/components/tracked-phone-link';

// Data for our Service Areas (The Spokes)
const CITIES = {
  'whitehouse': {
    name: 'Whitehouse',
    zip: '75791',
    description: 'Expert tree care for Whitehouse homeowners. From the shores of Lake Tyler to the estates near the high school, we understand the local sandy soil and pine species.',
    landmarks: ['Whitehouse City Park', 'Lake Tyler', 'Wildcat Stadium'],
  },
  'lindale': {
    name: 'Lindale',
    zip: '75771',
    description: 'Protecting properties in Lindale from storm damage. We specialize in wind-proofing trees in open residential areas and clearing post-storm debris.',
    landmarks: ['Pickers Pavilion', 'I-20 Corridor', 'Lindale High School'],
  },
  'bullard': {
    name: 'Bullard',
    zip: '75757',
    description: 'Affordable tree removal and trimming in Bullard. We handle the unique challenges of older, mature Pecans and Oaks common in the area.',
    landmarks: ['American Freedom Museum', 'Bullard City Hall'],
  },
  'flint': {
    name: 'Flint',
    zip: '75762',
    description: 'Rural and residential tree services for Flint. Large lot clearing, hazardous removals near Lake Palestine, and fence-line trimming.',
    landmarks: ['The Villages Resort', 'Lake Palestine', 'FM 2493'],
  },
  'chapel-hill': {
    name: 'Chapel Hill',
    zip: '75707',
    description: 'Serving the rolling hills of Chapel Hill. We provide land clearing and pine management for large acreage properties.',
    landmarks: ['Chapel Hill High School', 'Highway 64 East'],
  },
  'noonday': {
    name: 'Noonday',
    zip: '75762',
    description: 'Local tree experts for Noonday. Fast response for storm damage and regular oak maintenance.',
    landmarks: ['Noonday City Hall', 'Highway 155'],
  },
  'chandler': {
    name: 'Chandler',
    zip: '75758',
    description: 'Tree services for the gateway to Lake Palestine. We handle lakeside tree safety and trimming.',
    landmarks: ['Winchester Park', 'Lake Palestine'],
  },
};

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = CITIES[city as keyof typeof CITIES];

  if (!data) {
    return { title: 'Page Not Found' };
  }

  return {
    title: `Tree Service ${data.name}, TX | Removal & Trimming`,
    description: `#1 Rated Tree Service in ${data.name}, TX (${data.zip}). Professional tree removal, trimming, and stump grinding near ${data.landmarks[0]}. Licensed & Insured.`,
    alternates: {
      canonical: `/service-areas/${city}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(CITIES).map((city) => ({
    city,
  }));
}

export default async function ServiceAreaPage({ params }: Props) {
  const { city } = await params;
  const data = CITIES[city as keyof typeof CITIES];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-32 bg-stone-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-stone-950/80 z-0" />
          {/* Decorative Background Image (Reused/Generic for now) */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/assets/tyler-tree-hero-main.jpg"
              alt={`Tree service in ${data.name}`}
              fill
              className="object-cover"
            />
          </div>

          <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm text-stone-200 text-sm font-medium tracking-widest uppercase mb-6">
              <MapPin className="w-4 h-4 text-green-500" /> Serving {data.name}, TX {data.zip}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase leading-tight">
              Tree Service in <br /> <span className="text-green-500">{data.name}</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              {data.description} Licensed, Insured, and Local.
            </p>
            <TrackedPhoneLink location="service-area-hero">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold h-16 px-10 rounded-none uppercase tracking-wider">
                Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </TrackedPhoneLink>
          </div>
        </section>

        <div className="bg-white py-20">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">

            {/* Local Context Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-stone-900 mb-6 uppercase tracking-tight">Why Choose Us in {data.name}?</h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  Unlike out-of-town storm chasers, we are rooted in the Tyler metro area. We know the specific challenges homeowners in <strong>{data.name}</strong> face, from the soil conditions near {data.landmarks[0]} to the wind patterns affecting mature trees.
                </p>
                <p className="text-stone-600 text-lg leading-relaxed">
                  We provide full-service arboriculture, not just "cutting down trees." Whether you are near {data.landmarks[1]} or the outskirts of town, our crew arrives on time, respects your property, and cleans up every twig.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="p-6 bg-stone-50 border border-stone-100 rounded-lg">
                  <h3 className="font-bold text-xl text-stone-900 mb-2">Fast Response in {data.zip}</h3>
                  <p className="text-stone-600">We have crews stationed nearby for rapid emergency response in {data.name}.</p>
                </div>
                <div className="p-6 bg-stone-50 border border-stone-100 rounded-lg">
                  <h3 className="font-bold text-xl text-stone-900 mb-2">Local Regulations</h3>
                  <p className="text-stone-600">We handle all necessary checks for working near city streets or utility lines in {data.name}.</p>
                </div>
              </div>

              <div className="pt-8 border-t border-stone-100">
                <h3 className="font-bold text-lg text-stone-900 uppercase mb-4">Services Available in {data.name}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Tree Removal', 'Stump Grinding', 'Tree Trimming', 'Emergency Storm Damage', 'Lot Clearing', 'Tree Health Assessment'].map((service) => (
                    <li key={service} className="flex items-center gap-2 text-stone-600">
                      <CheckCircle2 className="w-4 h-4 text-green-600" /> {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form Side */}
            <div className="relative">
              <div className="sticky top-32">
                <QuoteForm />
                <div className="mt-8 text-center">
                  <p className="text-stone-500 text-sm mb-2">Prefer to talk to a human?</p>
                  <TrackedPhoneAnchor location="service-area-sidebar" className="text-2xl font-black text-stone-900 hover:text-green-600 transition-colors block">
                    {PHONE_NUMBER}
                  </TrackedPhoneAnchor>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}