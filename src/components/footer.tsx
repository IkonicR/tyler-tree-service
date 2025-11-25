import Link from "next/link";
import { Trees, Phone, Mail, MapPin, Facebook, Instagram, ShieldCheck } from "lucide-react";
import { COMPANY_NAME, PHONE_NUMBER, PHONE_HREF, ADDRESS, SERVICE_AREA } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-white/10 font-sans">
      {/* Top Bar: Brand & CTA */}
      <div className="container mx-auto px-6 py-16 grid lg:grid-cols-4 gap-12 border-b border-white/5">
        {/* Brand Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-green-700 p-2 rounded-sm">
               <Trees className="h-6 w-6 text-white" />
            </div>
            <span className="font-black text-2xl text-white tracking-tight uppercase">{COMPANY_NAME}</span>
          </div>
          <p className="text-sm leading-relaxed text-stone-400">
            Tyler's premier tree care specialists. We combine heavy industrial capability with arboricultural science to protect your property and ecosystem.
          </p>
          <div className="flex gap-4 pt-2">
            <Link href="#" className="bg-stone-900 p-2 rounded-full hover:bg-green-700 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="bg-stone-900 p-2 rounded-full hover:bg-green-700 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-6">Services</h3>
          <ul className="space-y-4 text-sm">
            <li><Link href="/tree-removal" className="hover:text-green-400 transition-colors">Hazardous Tree Removal</Link></li>
            <li><Link href="/tree-trimming" className="hover:text-green-400 transition-colors">Structural Trimming</Link></li>
            <li><Link href="/stump-grinding" className="hover:text-green-400 transition-colors">Stump Grinding</Link></li>
            <li><Link href="/blog" className="hover:text-green-400 transition-colors">Tree Care Blog</Link></li>
            <li><Link href="/emergency-storm-damage" className="hover:text-green-400 transition-colors text-red-400 font-medium">24/7 Storm Emergency</Link></li>
          </ul>
        </div>

        {/* Service Areas (SEO Rich) */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-6">Service Areas</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm text-stone-400">
            <li><Link href="/" className="hover:text-green-400 transition-colors">Tyler, TX</Link></li>
            <li><Link href="/service-areas/whitehouse" className="hover:text-green-400 transition-colors">Whitehouse</Link></li>
            <li><Link href="/service-areas/lindale" className="hover:text-green-400 transition-colors">Lindale</Link></li>
            <li><Link href="/service-areas/flint" className="hover:text-green-400 transition-colors">Flint</Link></li>
            <li><Link href="/service-areas/bullard" className="hover:text-green-400 transition-colors">Bullard</Link></li>
            <li><span className="hover:text-stone-200 cursor-default opacity-50">Chapel Hill (Coming Soon)</span></li>
            <li><span className="hover:text-stone-200 cursor-default opacity-50">Noonday (Coming Soon)</span></li>
            <li><span className="hover:text-stone-200 cursor-default opacity-50">Hideaway (Coming Soon)</span></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-widest mb-6">Contact Us</h3>
          <ul className="space-y-6 text-sm">
            <li className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase font-bold text-stone-500 mb-1">Emergency Line</div>
                <a href={PHONE_HREF} className="text-xl font-bold text-white hover:text-green-400 transition-colors block">{PHONE_NUMBER}</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed text-stone-400">{ADDRESS} <br/> Smith County</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Legal & Credentials */}
      <div className="bg-stone-950 py-8 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 text-green-700">
                <ShieldCheck className="w-4 h-4" />
                <span>Licensed & Insured</span>
             </div>
             <span>|</span>
             <span>Tyler Tree Ordinance Compliant</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-stone-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-stone-300">Terms of Service</Link>
            <span>© {currentYear} {COMPANY_NAME}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}