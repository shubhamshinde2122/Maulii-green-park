import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { MasterPlan } from "@/components/MasterPlan";
import { ConstructionUpdates } from "@/components/ConstructionUpdates";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { TrustSystem } from "@/components/TrustSystem";
import { Concierge } from "@/components/Concierge";
import { FloorPlans } from "@/components/FloorPlans";
import { Brochure } from "@/components/Brochure";
import { Lifestyle } from "@/components/Lifestyle";
import { FAQ } from "@/components/FAQ";
import { BeforeAfter } from "@/components/BeforeAfter";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="bg-midnight-silt min-h-screen">
      <Hero />
      <TrustSystem />
      <Story />
      <Brochure />
      <MasterPlan />
      <FloorPlans />
      <ConstructionUpdates />
      <BeforeAfter />
      <Gallery />
      <Location />
      <Lifestyle />
      <FAQ />
      <Concierge />
      <WhatsAppWidget />

      {/* Simple Footer Spacer */}
      <footer className="py-12 bg-charcoal text-center text-warm-stone/20 text-xs tracking-widest uppercase border-t border-mist/5">
        <p>© 2026 Mauli Developers. All Rights Reserved.</p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="opacity-50">Our Group Venture:</span>
          <a
            href="https://aac-brickvision.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-burnished-bronze hover:text-raw-silk transition-colors border-b border-burnished-bronze/20 hover:border-raw-silk"
          >
            AAC BrickVision
          </a>
        </div>
      </footer>
    </main>
  );
}
