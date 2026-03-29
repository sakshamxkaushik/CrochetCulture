import Link from 'next/link';

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link href="https://wa.me/918303697404" className="flex flex-col items-center gap-2 group animate-bounce">
        <div className="bg-[#904639] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
        </div>
        <span className="bg-surface-container-lowest text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm border border-outline-variant/20 opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with Reena
        </span>
      </Link>
    </div>
  );
}
