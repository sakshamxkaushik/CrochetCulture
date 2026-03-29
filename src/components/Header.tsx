"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("/");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If not on the homepage, the active section is just the path
    if (pathname !== "/") {
      setActiveSection(pathname);
      return;
    }

    // Stabilized Intersection observer prevents flickers by triggering exactly at the top 30% of the screen
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`/#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" } 
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observerRef.current?.observe(section));

    // Handle initial load and return to top smoothly without endless re-renders
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY < 100 && pathname === "/") {
          setActiveSection("/");
        }
      }, 50); // Debounce
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(scrollTimeout);
      sections.forEach((section) => observerRef.current?.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/#collection" },
    { name: "Custom Orders", href: "/custom-order" },
    { name: "About Reena", href: "/#about" },
    { name: "Journal", href: "/#journal" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fcf9f4]/80 dark:bg-stone-900/80 backdrop-blur-md shadow-sm border-b border-outline-variant/10 font-headline transition-all">
      <nav className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 md:gap-4 hover:opacity-70 transition-opacity" onClick={() => setActiveSection("/")}>
          {/* Unoptimized prevents 500 crashes for large arbitrary logos in dev server */}
          <Image src="/logo.png" alt="Crochet Couture Logo" width={48} height={48} priority unoptimized className="w-10 h-10 md:w-12 md:h-12 object-contain" />
          <span className="text-xl md:text-2xl tracking-tight text-[#1c1c19] dark:text-[#f6f3ee] italic font-headline hidden sm:block">
            Crochet Couture
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href || (activeSection === '/#custom' && link.href === '/custom-order');
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-all duration-300 ${
                  isActive 
                    ? "text-[#904639] dark:text-[#ae5e50] font-semibold border-b-2 border-[#904639] pb-1" 
                    : "text-[#1c1c19] dark:text-[#f6f3ee] opacity-80 hover:text-[#904639]"
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          <Link href="https://wa.me/918303697404" className="text-[#904639] dark:text-[#ae5e50] flex items-center shrink-0">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>shopping_bag</span>
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#1c1c19] dark:text-white flex items-center"
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#fcf9f4] dark:bg-stone-900 border-b border-outline-variant/10 shadow-lg flex flex-col px-6 py-6 gap-6 font-body text-lg">
          {navLinks.map((link) => {
             const isActive = activeSection === link.href || (activeSection === '/#custom' && link.href === '/custom-order');
             return (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`transition-colors ${isActive ? "text-[#904639] dark:text-[#ae5e50] font-bold" : "text-[#1c1c19] dark:text-[#f6f3ee]"}`}
              >
                {link.name}
              </Link>
             )
          })}
        </div>
      )}
    </header>
  );
}
