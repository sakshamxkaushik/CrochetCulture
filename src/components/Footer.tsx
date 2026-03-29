import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full pt-16 md:pt-24 pb-8 md:pb-12 bg-[#f6f3ee] dark:bg-stone-800 font-body text-sm tracking-wide mt-auto">
      <div className="flex flex-col items-center gap-6 md:gap-8 px-6 text-center max-w-4xl mx-auto">
        <Link href="/" className="hover:opacity-80 transition-opacity mb-2">
           <Image src="/logo.png" alt="Crochet Couture Logo" width={80} height={80} unoptimized className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-sm" />
        </Link>
        <h2 className="text-3xl md:text-4xl font-headline text-stone-900 dark:text-white">Let's Connect</h2>
        <p className="text-stone-700 dark:text-stone-300 text-base md:text-lg max-w-md">
          I'd love to hear from you. Whether it's a question about a piece or just to say hello!
        </p>
        <Link 
          href="https://wa.me/918303697404"
          className="flex flex-wrap justify-center items-center gap-3 px-6 md:px-10 py-4 md:py-5 rounded-full bg-secondary text-white font-bold text-base md:text-lg hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg text-center leading-snug"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
          Chat with Reena on WhatsApp
        </Link>
        <div className="flex gap-6 md:gap-8 mt-2 md:mt-4">
          <Link href="#" className="text-stone-800 dark:text-stone-200 hover:text-[#904639] transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined">camera</span> <span className="hidden sm:inline">Instagram</span>
          </Link>
          <Link href="#" className="text-stone-800 dark:text-stone-200 hover:text-[#904639] transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined">push_pin</span> <span className="hidden sm:inline">Pinterest</span>
          </Link>
        </div>
        
        <div className="w-full h-px bg-stone-300 dark:bg-stone-700 mt-6 md:mt-8"></div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-label text-[10px] md:text-xs tracking-widest uppercase font-semibold text-stone-600 dark:text-stone-400 mb-2">
          <Link href="#" className="hover:text-[#904639] transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-[#904639] transition-colors">Terms</Link>
          <Link href="#" className="hover:text-[#904639] transition-colors">Wholesale</Link>
          <Link href="#" className="hover:text-[#904639] transition-colors">Stockists</Link>
        </div>
        <p className="font-label text-[10px] md:text-xs tracking-widest uppercase text-stone-600 dark:text-stone-400">
          © 2024 Crochet Couture • The Tactile Manuscript
        </p>
      </div>
    </footer>
  );
}
