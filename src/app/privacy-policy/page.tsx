import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { COMPANY_NAME, ADDRESS, PHONE_NUMBER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tyler Tree Service',
  description: 'Privacy Policy for Tyler Tree Service. How we handle your data.',
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-24 max-w-4xl text-stone-800">
        <h1 className="text-4xl font-black mb-8 uppercase">Privacy Policy</h1>
        <div className="prose prose-stone max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h3>1. Introduction</h3>
          <p>{COMPANY_NAME} ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.</p>

          <h3>2. Information We Collect</h3>
          <p>We collect information you provide directly to us, such as when you request a quote or contact us. This includes:</p>
          <ul>
            <li>Name</li>
            <li>Phone Number</li>
            <li>Email Address</li>
            <li>Property Address (for estimates)</li>
          </ul>

          <h3>3. How We Use Your Information</h3>
          <p>We use your information solely to provide tree care services, estimates, and communicate with you regarding your project. We do not sell your data to third parties.</p>

          <h3>4. Data Security</h3>
          <p>We implement reasonable security measures to protect your personal information.</p>

          <h3>5. Contact Us</h3>
          <p>If you have questions about this policy, please contact us at:</p>
          <p>
            <strong>{COMPANY_NAME}</strong><br/>
            {ADDRESS}<br/>
            {PHONE_NUMBER}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
