import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { COMPANY_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service | Tyler Tree Service',
  description: 'Terms of Service for Tyler Tree Service.',
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-24 max-w-4xl text-stone-800">
        <h1 className="text-4xl font-black mb-8 uppercase">Terms of Service</h1>
        <div className="prose prose-stone max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h3>1. Agreement to Terms</h3>
          <p>By accessing our website or using our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

          <h3>2. Service Estimates</h3>
          <p>All estimates provided by {COMPANY_NAME} are valid for 30 days unless otherwise stated. Estimates are based on the visual inspection of the site.</p>

          <h3>3. Payment</h3>
          <p>Payment is due upon completion of the work unless prior arrangements have been made.</p>

          <h3>4. Cancellation</h3>
          <p>We require at least 24 hours notice for cancellations. We reserve the right to charge a cancellation fee for missed appointments without notice.</p>

          <h3>5. Liability</h3>
          <p>{COMPANY_NAME} is fully licensed and insured. However, we are not responsible for damage to underground utilities that were not properly marked by the property owner or utility company.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
