import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Link from "next/link";
import Image from "next/image";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] md:min-h-[870px] flex items-center overflow-hidden bg-surface-bright pt-12 md:pt-0">
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6 md:space-y-8 pb-12 md:pb-0">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">
                Bespoke Artistry
              </div>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-on-surface">
                Bespoke <span className="italic text-primary">Amigurumi</span> & Crochet Accessories.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
                Discover sustainable, made-to-order crochet tote bags, boho tops, and Tunisian crochet pieces handcrafted with 100% natural organic cotton by artisan Reena.
              </p>
              <div className="pt-2 md:pt-4 flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/918303697404" className="min-h-[48px] inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 rounded-full custom-gradient-btn text-white font-semibold text-base md:text-lg shadow-xl hover:scale-105 active:scale-95 transition-transform text-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  Message Reena on WhatsApp
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                <Image unoptimized fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover" alt="Softly lit portrait of Reena" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx28mv2HXJEnh6Zs-FDg3NgGaRobfinXZSAG9jKI-XokIH7Mh2-immJX3vjPNPFUNbtHQZJLuqGTqBB7FJhR_emjuFzdSKaqQY05PTuM25VW3bxuRHyHa5zRjZgTrXVPl1nt7w-V8hO5v2211wKvtbZuo8ZH_NQWbdsloO9_Q4sT55ZY4_qk_H9srHwkd1FcrojNOtDtvusvX0KB0l0CFB9JxKFPskS8YdlfY1m3JXl12uGul4bbiCBbPC4LAr10nm9BLO8qsGcNo"/>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-tertiary-fixed rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* The Collection Section */}
        <section className="py-16 md:py-24 bg-surface-container-low" id="collection">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
              <span className="font-label text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-bold">The Boutique</span>
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl">Ready-to-Love Creations</h2>
              <div className="w-16 md:w-24 h-px bg-outline-variant mx-auto mt-4 md:mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Product 1 */}
              <div className="group flex flex-col bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-outline-variant/10">
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                  <Image unoptimized fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Earthy Summer Tote" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaqaCkHiZhhNVfRfob8wWRrzlnA3MyWlk9MdrA5iwPSK65yB8zg9ox9DWxF_fvkJK0W9S-mjQjKY559jvMTzSCMfG8XelaxjRan7Mz7IuB2zNWOrXr8B8YNW9_qxdM2nlxzzxDmVf7olaG_2bed-0hppyVLdUDhEnNn8mL3fmr00tC_N6y6D3P4oejzh8SqnXuJKys8TEHHfejpfKna2CVXPPHtz3FQe13KbJ17fDQmLyc80ppabvvn3czbEJZRm7r4eDGW63QapA" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-headline text-xl leading-tight">Crochet Tote Bags:<br/>Earthy Summer Tote</h3>
                    <span className="text-lg font-bold text-primary shrink-0">$85</span>
                  </div>
                  <ul className="text-sm text-on-surface-variant flex-1 mb-6 space-y-1">
                    <li className="flex gap-2 items-start"><span className="text-primary font-bold">✓</span> 100% natural organic cotton blend</li>
                    <li className="flex gap-2 items-start"><span className="text-primary font-bold">✓</span> Perfect for market days</li>
                  </ul>
                  <Link href="https://wa.me/918303697404" className="min-h-[48px] w-full flex justify-center items-center gap-2 py-3 mt-auto bg-secondary-container text-on-secondary-container rounded-lg font-bold hover:bg-secondary-fixed transition-colors text-sm">
                    Claim via WhatsApp <span className="material-symbols-outlined text-sm">chat</span>
                  </Link>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group flex flex-col bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-outline-variant/10">
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                  <Image unoptimized fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Amigurumi Bunny" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz5lCs_oEAgNGPsCy6C1j99fH2AdupkMy8J2SyFhCsj0YWTwniDNM2Do1ZzGcd5Ry8Fct4kfGLPaao9Dc_7Rrp9MPLTBf2GxGDtrow2JRnx4E1mAfbYQqGiyRDL-im_1ZSHOUnNYls8OtR0OHOXq-CmkleA_5FAn4Znpqcz-pDSOGfQYxuAzXQ16OaK_wnhNvMB3D13LraDJ0hzdzpWjAF41aVL11J-3rpL-nrIOIskXmNNL5iqkfmmS8VTXkg4jvF4Dj0GYCP_X4" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-headline text-xl leading-tight">Amigurumi Dolls:<br/>Heirloom Bunny</h3>
                    <span className="text-lg font-bold text-primary shrink-0">$45</span>
                  </div>
                  <ul className="text-sm text-on-surface-variant flex-1 mb-6 space-y-1">
                    <li className="flex gap-2 items-start"><span className="text-primary font-bold">✓</span> Hand-stitched with premium Merino Wool</li>
                    <li className="flex gap-2 items-start"><span className="text-primary font-bold">✓</span> Safe, natural dyes for children</li>
                  </ul>
                  <Link href="https://wa.me/918303697404" className="min-h-[48px] w-full flex justify-center items-center gap-2 py-3 mt-auto bg-secondary-container text-on-secondary-container rounded-lg font-bold hover:bg-secondary-fixed transition-colors text-sm">
                    Claim via WhatsApp <span className="material-symbols-outlined text-sm">chat</span>
                  </Link>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group flex flex-col bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-outline-variant/10">
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                  <Image unoptimized fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Chunky Winter Beanie" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnJZfBUe8yjp_QnuAaThH3TMnPgGV3tsZW8Q6-916ZGAfbgGMb4i5rz_xog1z6q0ka8pkPCsZWCStSZzT6bXhbPHmZ0VfHKx-JuDGpjM1W1FTLvkYUvi_HgWn-xdmDk_VFBmxiI7ZrbFwSVk8s1YmrAMQgRwaWNJQR1s8wsNfoeUBsFSUfeM52RSiwxrfVLKTUkNb_zrrIS0gbxaScimtj2DIJjJQEYzZONCcaHwG6GmVFzGDxhjtB5FajSEfBADZLSrWtLcYMUvE" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-headline text-xl leading-tight">Tunisian Crochet:<br/>Chunky Winter Beanie</h3>
                    <span className="text-lg font-bold text-primary shrink-0">$38</span>
                  </div>
                  <ul className="text-sm text-on-surface-variant flex-1 mb-6 space-y-1">
                    <li className="flex gap-2 items-start"><span className="text-primary font-bold">✓</span> Crafted from upcycled textile off-cuts</li>
                    <li className="flex gap-2 items-start"><span className="text-primary font-bold">✓</span> Sustainable & breathable wear</li>
                  </ul>
                  <Link href="https://wa.me/918303697404" className="min-h-[48px] w-full flex justify-center items-center gap-2 py-3 mt-auto bg-secondary-container text-on-secondary-container rounded-lg font-bold hover:bg-secondary-fixed transition-colors text-sm">
                    Claim via WhatsApp <span className="material-symbols-outlined text-sm">chat</span>
                  </Link>
                </div>
              </div>

              {/* Product 4 */}
              <div className="group flex flex-col bg-surface-container-lowest rounded-2xl p-4 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-outline-variant/10">
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                  <Image unoptimized fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" alt="Boho Daisy Keychains" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA6gEoDDfU2m8qQFz16-gXQtX1CuljXgOMIggXk2NBIr3VjqKY93u3shQkh-O0vc_kt153G0tZUujk6cj5-C2aEZXhuKCwVEdI29eENE5J9azUZUO4dfsVJKXoEO9HudpplmVJKuIeuN-x7qWq78ADvGh0vV6OAkdK3gtBy9H892oC3j5XWSrOuJzZ-NC3PTPnOp2ZH6-bhSwlF0XDUI63TqL3M5P5HXaIFeQDtOVSGhi67WGraJ7MW1WLe-3gnBuEJaDplDBAJbE" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-headline text-xl leading-tight">Crochet Keychains:<br/>Boho Daisy</h3>
                    <span className="text-lg font-bold text-primary shrink-0">$15</span>
                  </div>
                  <ul className="text-sm text-on-surface-variant flex-1 mb-6 space-y-1">
                    <li className="flex gap-2 items-start"><span className="text-primary font-bold">✓</span> Intricate handmade detailing</li>
                    <li className="flex gap-2 items-start"><span className="text-primary font-bold">✓</span> A unique, personal everyday accessory</li>
                  </ul>
                  <Link href="https://wa.me/918303697404" className="min-h-[48px] w-full flex justify-center items-center gap-2 py-3 mt-auto bg-secondary-container text-on-secondary-container rounded-lg font-bold hover:bg-secondary-fixed transition-colors text-sm">
                    Claim via WhatsApp <span className="material-symbols-outlined text-sm">chat</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Orders Section */}
        <section className="py-16 md:py-24 bg-surface-bright border-y border-outline-variant/10" id="custom">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="bg-surface-container-lowest rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 shadow-sm border border-outline-variant/5">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div>
                  <span className="font-label text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-bold mb-3 md:mb-4 block">Personalized Art</span>
                  <h2 className="font-headline text-3xl sm:text-4xl md:text-6xl mb-6 md:mb-8 leading-tight">Dream It. I’ll Crochet It.</h2>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-10 md:mb-12">
                     Looking for a specific color, size, or a unique gift idea? I specialize in bringing your imagination to life through the rhythmic dance of the hook and yarn.
                  </p>
                  <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
                    <div className="flex gap-4 md:gap-6 items-start">
                      <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold shrink-0 text-sm md:text-base">1</span>
                      <div>
                        <h4 className="font-bold text-base md:text-lg">Vision</h4>
                        <p className="text-sm md:text-base text-on-surface-variant">Share your inspiration or sketches with me on WhatsApp.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 md:gap-6 items-start">
                      <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold shrink-0 text-sm md:text-base">2</span>
                      <div>
                        <h4 className="font-bold text-base md:text-lg">Details</h4>
                        <p className="text-sm md:text-base text-on-surface-variant">We'll select the perfect fibers, colors, and textures together.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 md:gap-6 items-start">
                      <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold shrink-0 text-sm md:text-base">3</span>
                      <div>
                        <h4 className="font-bold text-base md:text-lg">Magic</h4>
                         <p className="text-sm md:text-base text-on-surface-variant">I meticulously hand-stitch your piece with care and intention.</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/custom-order" className="min-h-[48px] inline-flex justify-center w-full sm:w-auto items-center gap-3 px-6 md:px-8 py-4 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition-opacity text-sm md:text-base text-center">
                    Start Your Custom Order Form ✍️
                  </Link>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-full overflow-hidden border-[12px] border-surface-container relative">
                    <Image unoptimized fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" alt="Artistic flat lay of yarn" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBorqryixN5FLf4-YHmqlSR-yGxiNkqUxsHhefMYEzOKhHwrLq2uYzk9inBlJmC-yi6cCBEoxYl29plTagG2qjppa7i6XTHOYMKDExFpd55smsr87_-Sl2QuDFGevWuj_KWNZ9vyAnirWlW7uUoy3c0Uq8Ury3OzD42QCy5m5j4dGTRmOQc4lZ6igk9U-B8wjzplmQUtoEA53szmcQ8exxD6pr_5SKmP0EKRBcpNw7qDWiAApwJqW-ANiILu7TMVFRvb_RhS_XdICY"/>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-tertiary-fixed p-6 rounded-2xl shadow-lg rotate-3 hidden md:block">
                    <span className="material-symbols-outlined text-4xl text-on-tertiary-fixed">auto_fix_high</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Added Calendly Section to Home Page */}
            <div className="mt-24 text-center max-w-4xl mx-auto">
              <span className="font-label text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4 block">Consultation</span>
              <h2 className="font-headline text-4xl md:text-5xl mb-6">Book a Pattern Consultation</h2>
              <p className="text-on-surface-variant text-lg">Schedule a video call with Reena to discuss your bespoke ideas.</p>
              <CalendlyEmbed url="https://calendly.com/crochet-couture-demo" />
            </div>

          </div>
        </section>

        {/* About the Artisan Section */}
        <section className="py-24 overflow-hidden" id="about">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <Image unoptimized fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" alt="Portrait of Reena" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtvZG2MSs5AynLpmSF4QiOMye0L1CgKjsNE13JZEMisvl57lB_s9zISnp7FALZcISnEmzzb31UZBM8fDD6T2fNtKX3Bt5tveEV4LJRp15bVrGro78XWokSw_0WQ0dHB9jN0LZvMPBex9zVvOfJz8Bzg3Yvq7GBsz-NAY9HCvgYkPnA9pB44OBai1Y_qPtBU_YK9IzqEjUouCzeDpPbvSoCxYDb-5PYqzS-bMG8j1EwRnReE3TJ41-B-6WZNFJQ86dGX99kbdCFUag"/>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <span className="font-label text-sm uppercase tracking-[0.2em] text-primary font-bold">The Maker</span>
                <h2 className="font-headline text-4xl md:text-5xl">The Hands Behind the Stitches</h2>
                <div className="space-y-4 text-lg text-on-surface-variant leading-relaxed">
                  <p>
                    Hello, I'm Reena. For me, crochet is more than just loops of yarn; it's a language of patience, love, and tactile storytelling.
                  </p>
                  <p>
                    In a world of mass-produced goods, true beauty lies in differentiation. I exclusively use earth-conscious fibers like raffia, wheat straw, and alpaca wool to create authentic, heirloom masterpieces. You aren't just buying clothes—you're collecting slow, intentional art.
                  </p>
                  <p>
                     Every piece I create starts with a single stitch to bring comfort and uniqueness to its future owner. Thank you for supporting this beautiful journey of artistry.
                  </p>
                </div>
                <div className="pt-8">
                  <p className="font-headline text-5xl text-primary opacity-80 italic">Reena</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journal Section */}
        <section className="py-24 bg-surface-container-low" id="journal">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="font-label text-sm uppercase tracking-[0.2em] text-primary font-bold block mb-4">The Journal</span>
                <h2 className="font-headline text-4xl md:text-5xl">Behind the Seams</h2>
              </div>
              <Link href="#" className="hidden md:block font-bold text-primary border-b-2 border-primary pb-1">
                Read All Entries
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Post 1 */}
              <article className="bg-surface-container-lowest rounded-2xl overflow-hidden group">
                <div className="aspect-video overflow-hidden relative">
                  <Image unoptimized fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" alt="Journal Photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOa2Lpjb0iwnmy_YVWpGBvBOXsqCzQc1WpOdSxL8kif9IJ9cuI2AXtCS9-ojytHJZsl2BuDElylj6fo8reDoqfFjfhhqFfxcAZgB_Ylu6sWnB_IAysvjF0ERbIBLPzXBiuSB28GAsR7vbQno1JobV9V0cjbDxSpuhGe_mKQ7BTXWUG8xF8Cgd0Iuo-mcfBlpGTYIfg7seNaHOPBk3p_9A9RDrGpFjreQWUDLTuwgyGSKDHlXcFzJ-149Lt04C94V80_oAoaPUdZiQ"/>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest block mb-3">April 12, 2024</span>
                  <h3 className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors">What is the Difference Between Crochet and Knitting?</h3>
                  <p className="text-on-surface-variant line-clamp-2">Understanding the unique art of using a single hook versus knitting needles for your bespoke garments...</p>
                </div>
              </article>
              {/* Post 2 */}
              <article className="bg-surface-container-lowest rounded-2xl overflow-hidden group">
                <div className="aspect-video overflow-hidden relative">
                  <Image unoptimized fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" alt="Journal Photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVsAj3jvyXwgqFYC801FSQqK0EmQChfsc2GepldGCABlCLS-mxKYaIY9bvMNYHwHx098JrNL2boK11h5m6-_LIXHz4e4nI1j9FkDSOfCso9232H_VLQlRQmRsOerfZm-fL7o8_ZH6EZ7oPNEpOIXxsB1nWc-vYBQctdhK08pjdDID406iNmD1JLvi-yAn2E1AeUtc3hSeRRC8WsXvWqkWp-UZFaecR4KzBFIgU72CGZdfbQyN14Ah-MjyEXFKLXuBjN44incLQ3xk"/>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest block mb-3">March 28, 2024</span>
                  <h3 className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors">Why Natural Fibers Breathe Better: Organic Cotton vs. Acrylic</h3>
                  <p className="text-on-surface-variant line-clamp-2">Why I choose earth-conscious organic fibers and natural dyes over synthetics for sustainable fashion...</p>
                </div>
              </article>
              {/* Post 3 */}
              <article className="bg-surface-container-lowest rounded-2xl overflow-hidden group">
                <div className="aspect-video overflow-hidden relative">
                  <Image unoptimized fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" alt="Journal Photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLUOIyuNgC8ThIrfaz5HSjbk8S9imJ8b7qENrt1UV8epGJLiqvYRQsOryl3Se5XewcfitKzO-r5TgOamcc3KzG3TO6o8PEE1mttZQOizdY8I4yyS8UNxlJAbbVZ-8iVVxzFKoQICZN6TXGQu7V0A7mU1E-WhO_zh8hgU1DPzWvK8XADAkOvLWXuyEGdwIRThj_zIMbr2eLt1Zt2gYX9pHoXZNFAjX9BtD_MMeHBgm1DPrZhPQgmfI7BBWeix7Mml_HMQIAIJcZxHA"/>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest block mb-3">March 05, 2024</span>
                  <h3 className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors">How to Care for Your Amigurumi Dolls and Crochet Keychains</h3>
                  <p className="text-on-surface-variant line-clamp-2">A complete guide to maintaining the heirloom quality of your handcrafted crochet accessories...</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
