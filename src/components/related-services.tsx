import Link from "next/link";
import { Trees, CheckCircle2, ArrowRight, Clock } from "lucide-react";

const services = [
  {
    id: "removal",
    name: "Tree Removal",
    href: "/tree-removal",
    icon: Trees,
    desc: "Hazardous takedowns & crane work.",
    color: "text-orange-600",
    hover: "hover:border-orange-500",
    bg: "group-hover:bg-orange-500",
  },
  {
    id: "trimming",
    name: "Tree Trimming",
    href: "/tree-trimming",
    icon: CheckCircle2,
    desc: "Structural pruning & health.",
    color: "text-green-600",
    hover: "hover:border-green-500",
    bg: "group-hover:bg-green-600",
  },
  {
    id: "stump",
    name: "Stump Grinding",
    href: "/stump-grinding",
    icon: () => <div className="text-2xl">🪵</div>,
    desc: "Root removal & lawn reclamation.",
    color: "text-stone-900",
    hover: "hover:border-stone-900",
    bg: "group-hover:bg-stone-900",
  },
  {
    id: "emergency",
    name: "Emergency Service",
    href: "/emergency-storm-damage",
    icon: Clock,
    desc: "24/7 Storm response.",
    color: "text-red-600",
    hover: "hover:border-red-600",
    bg: "group-hover:bg-red-600",
  },
];

interface RelatedServicesProps {
  current: "removal" | "trimming" | "stump" | "emergency";
}

export function RelatedServices({ current }: RelatedServicesProps) {
  const filteredServices = services.filter((s) => s.id !== current);

  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-stone-900 mb-4 uppercase tracking-tight">
            Other Services
          </h2>
          <div className="h-1 w-20 bg-stone-300 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className={`group block p-8 border border-stone-200 bg-white transition-all hover:shadow-xl ${service.hover}`}
            >
              <div className={`mb-6 bg-stone-100 w-14 h-14 flex items-center justify-center transition-colors ${service.bg}`}>
                <service.icon className="w-8 h-8 text-stone-700 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-xl text-stone-900 mb-2 uppercase">
                {service.name}
              </h3>
              <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <span className={`${service.color} font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all`}>
                View Service <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
