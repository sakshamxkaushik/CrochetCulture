import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Orders | Crochet Couture",
  description: "Request a bespoke, tailored crochet piece handcrafted by Reena.",
};

export default function CustomOrderPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-24 pt-24 md:pt-32">
        {/* Hero Section */}
        <header className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold text-on-surface mb-4 md:mb-6 leading-tight">Dream It. I’ll Crochet It.</h1>
          <p className="font-body text-base md:text-xl text-on-surface-variant leading-relaxed">Tell me your story, and I’ll weave it into a one-of-a-kind piece just for you.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start flex-col-reverse lg:flex-row">
          {/* Left Column: Form Sections */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Section 1: Your Vision */}
            <section className="bg-surface-container-lowest rounded-xl p-8 md:p-10 shadow-[0px_20px_40px_rgba(28,28,25,0.03)] border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-8 rounded-full terracotta-gradient text-white flex items-center justify-center font-bold text-sm">1</span>
                <h2 className="font-headline text-2xl font-semibold text-primary">Your Vision</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block font-label text-xs uppercase tracking-widest text-outline mb-3 font-semibold">Describe the piece</label>
                  <textarea 
                    className="w-full bg-surface-variant/30 border-none rounded-xl focus:ring-0 focus:border-b-2 focus:border-primary transition-all p-5 font-body text-on-surface" 
                    placeholder="E.g. A oversized cardigan with balloon sleeves and a landscape motif on the back..." 
                    rows={6} 
                  />
                </div>
                <button className="flex items-center gap-2 px-6 py-4 bg-secondary-container text-on-secondary-container rounded-full font-medium transition-transform active:scale-95 hover:bg-secondary-container/80">
                  <span className="material-symbols-outlined">cloud_upload</span>
                  Upload Reference Image
                </button>
              </div>
            </section>

            {/* Section 2: Material Choice */}
            <section className="bg-surface-container-low rounded-xl p-8 md:p-10 shadow-[0px_20px_40px_rgba(28,28,25,0.03)]">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-8 rounded-full terracotta-gradient text-white flex items-center justify-center font-bold text-sm">2</span>
                <h2 className="font-headline text-2xl font-semibold text-primary">Material Choice</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="relative cursor-pointer group">
                  <input defaultChecked className="peer sr-only" name="yarn" type="radio"/>
                  <div className="p-6 bg-surface-container-lowest rounded-xl border-2 border-transparent peer-checked:border-primary transition-all">
                    <span className="material-symbols-outlined text-primary mb-3 block">temp_preferences_custom</span>
                    <p className="font-headline font-semibold text-on-surface">Premium Merino</p>
                    <p className="text-xs text-on-surface-variant mt-1">Soft, breathable, luxury feel.</p>
                  </div>
                </label>
                <label className="relative cursor-pointer group">
                  <input className="peer sr-only" name="yarn" type="radio"/>
                  <div className="p-6 bg-surface-container-lowest rounded-xl border-2 border-transparent peer-checked:border-primary transition-all">
                    <span className="material-symbols-outlined text-primary mb-3 block">eco</span>
                    <p className="font-headline font-semibold text-on-surface">Organic Cotton</p>
                    <p className="text-xs text-on-surface-variant mt-1">Crisp, durable, plant-based.</p>
                  </div>
                </label>
                <label className="relative cursor-pointer group">
                  <input className="peer sr-only" name="yarn" type="radio"/>
                  <div className="p-6 bg-surface-container-lowest rounded-xl border-2 border-transparent peer-checked:border-primary transition-all">
                    <span className="material-symbols-outlined text-primary mb-3 block">potted_plant</span>
                    <p className="font-headline font-semibold text-on-surface">Softest Alpaca</p>
                    <p className="text-xs text-on-surface-variant mt-1">Cloud-like warmth, hypoallergenic.</p>
                  </div>
                </label>
              </div>
            </section>

            {/* Section 3: Color Story */}
            <section className="bg-surface-container-lowest rounded-xl p-8 md:p-10 shadow-[0px_20px_40px_rgba(28,28,25,0.03)] border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-8 rounded-full terracotta-gradient text-white flex items-center justify-center font-bold text-sm">3</span>
                <h2 className="font-headline text-2xl font-semibold text-primary">Color Story</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <label className="space-y-3 cursor-pointer group relative">
                  <input defaultChecked className="peer sr-only" name="color" type="radio"/>
                  <div className="aspect-square rounded-full bg-[#904639]/20 flex items-center justify-center border-4 border-transparent peer-checked:border-primary group-hover:border-primary transition-all overflow-hidden relative">
                    <img className="w-full h-full object-cover" alt="Earthy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqiFXii5dnF-_9Hm-ll0QFQQXBWdapZTWRr6oe9HcRIizmbCSBYo5TW_PgDIbqqSDIGKxqBXZ6lXxUZGHlAU61lEmKQqTy6shg1IuNrrG8TOnlhLs41ma3MfdDG7sTjOaimnPQKbbXBq0z0_H3mkApSk197DeLzNIE6p_F-aDnTvzxFGDejyMri5GUUw8tabhl6xOQkXI37YF-WkpRUrGJaEFzXS_y5tWJFGRjEwgObU7sXt-Bqs0jshtUqz_V6TLkO_PC_pWsntQ"/>
                  </div>
                  <p className="text-center font-label text-xs uppercase tracking-widest font-bold">Earthy Tones</p>
                </label>
                <label className="space-y-3 cursor-pointer group relative">
                  <input className="peer sr-only" name="color" type="radio"/>
                  <div className="aspect-square rounded-full bg-secondary-container/20 flex items-center justify-center border-4 border-transparent peer-checked:border-primary group-hover:border-primary transition-all overflow-hidden relative">
                    <img className="w-full h-full object-cover" alt="Pastels" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXAzNQgTDQc35z1ArlIg4iw5Sbn8wxRk88fhvt3ydBXJgiyefZ4528Ft5zXI2ozAuj31c95GEefQJBCaPgLDZCQ8oqQT_C5uhwP57LhUuxo0ZtQr3zWcSnFSnNfEWrvKDQB4MGfzDGxPMiCmylh9LzgUt01jUGlF5nqek_m_Kk0xSCTnL-rcJp7Rlz2LUlD3Hk4WM_g0Q7y6pFg-2-O7tq4n-6fP90YMyH4_Hjp5LTc-CHFAMAgPlSwJDV_O6z0gOe_rGtZJOsdEI"/>
                  </div>
                  <p className="text-center font-label text-xs uppercase tracking-widest font-bold">Pastels</p>
                </label>
                <label className="space-y-3 cursor-pointer group relative">
                  <input className="peer sr-only" name="color" type="radio"/>
                  <div className="aspect-square rounded-full bg-tertiary-container/20 flex items-center justify-center border-4 border-transparent peer-checked:border-primary group-hover:border-primary transition-all overflow-hidden relative">
                    <img className="w-full h-full object-cover" alt="Jewel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_TyOvQX6zQWl0DeaSgDOcLfXHA__yRjTb--fIdWTbixo4TsWjQTIiTWhoRlaiP5p5kC24xxxl-XAORR2Qpgd39lLdul7ajPLPLexIvKSRJlF8B3juL5K82H3-I7Vg4am5hLa_RYZ-obt7g9GaIjcxXkKjC3gosqfyncINTU955QZ1HH1wgCNHxLJysJE0K1mnZ1rWnS9I6WTPeDBByn4LCrIDXW-BKU6qrw-2D2kynarHz1UnAd-eNz6gsdPl2aidE4wdhL0i8dw"/>
                  </div>
                  <p className="text-center font-label text-xs uppercase tracking-widest font-bold">Jewel Tones</p>
                </label>
                <label className="space-y-3 cursor-pointer group relative">
                  <input className="peer sr-only" name="color" type="radio"/>
                  <div className="aspect-square rounded-full bg-surface-container flex items-center justify-center border-4 border-transparent peer-checked:border-primary group-hover:border-primary transition-all">
                    <span className="material-symbols-outlined text-outline">palette</span>
                  </div>
                  <p className="text-center font-label text-xs uppercase tracking-widest font-bold">Custom</p>
                </label>
              </div>
            </section>

            {/* Section 4: Timeline */}
            <section className="bg-surface-container-low rounded-xl p-8 md:p-10 shadow-[0px_20px_40px_rgba(28,28,25,0.03)]">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-8 rounded-full terracotta-gradient text-white flex items-center justify-center font-bold text-sm">4</span>
                <h2 className="font-headline text-2xl font-semibold text-primary">Timeline</h2>
              </div>
              <div>
                <label className="block font-label text-xs uppercase tracking-widest text-outline mb-3 font-semibold">When do you need this by?</label>
                <input 
                  className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-0 focus:border-b-2 focus:border-primary transition-all p-4 font-body text-on-surface" 
                  type="date"
                />
              </div>
            </section>

            {/* CTA */}
            <div className="pt-8 flex flex-col items-center">
              <a 
                href="https://wa.me/918303697404" 
                target="_blank"
                className="w-full md:w-auto px-12 py-5 rounded-full terracotta-gradient text-white font-headline text-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                Submit via WhatsApp
              </a>
              <p className="mt-6 font-body italic text-on-surface-variant text-center max-w-md">
                "I hand-stitch every piece with intention. Let’s create something beautiful together." — Reena
              </p>
            </div>

          </div>

          {/* Right Column: Step-by-Step Sidebar (Moves below form on mobile) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-10 order-first lg:order-last">
            
            <div className="bg-surface-container-high rounded-2xl p-6 md:p-8 border border-outline-variant/20">
              <h3 className="font-headline text-xl md:text-2xl font-bold mb-6 md:mb-8 text-on-surface">The Process</h3>
              <div className="space-y-6 md:space-y-10">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined">lightbulb</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-lg text-on-surface">Share</h4>
                    <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">Describe your dream piece. Every detail helps me visualize your intent.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined">groups</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-lg text-on-surface">Collaborate</h4>
                    <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">We'll discuss sketches and yarn swatches via WhatsApp to perfect the vision.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined">auto_awesome</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-lg text-on-surface">Create</h4>
                    <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">Sit back as I translate our conversation into a tactile manuscript of yarn.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Card */}
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary relative">
                <img className="w-full h-full object-cover" alt="Portrait of Reena" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPQ1LCPW2Zyc6mmNLNuotPr7y4oWcWsJzrjkRS1f9RQ3HMwqOCeFyMfE_GJMsE1Hjs7AwMt1fy-FlgvcyzMKGnBmDdjUMJvYmTkNcK_p4Hs4AJ53reBXUKU_CB_DPnG2-ExaNUv4OVT_TkBRCXIq3UMAQ-Y7nABC8lrnd8ultcjf48NXNb1oqvK5A1Td4Z1U6t6I9Q07kLU_1LH3So4ns66sP1AYpV34DOZDbwBZJZmDNdJY5n54dCxFZJ1VpLqG5s8c_aCZ-c-2s"/>
              </div>
              <h4 className="font-serif italic text-xl text-primary mb-2">Reena's Atelier</h4>
              <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] uppercase font-bold tracking-tighter mb-4">Master Artisan</span>
              <p className="text-sm text-on-surface-variant leading-relaxed italic">"Every stitch carries a heartbeat. I can't wait to see what story we'll tell next."</p>
            </div>

          </aside>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
