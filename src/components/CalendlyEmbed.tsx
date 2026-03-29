"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed({ url }: { url: string }) {
  return (
    <div className="w-full h-[700px] overflow-hidden rounded-2xl border border-outline-variant/20 shadow-sm mt-12 bg-surface-container-lowest">
      <InlineWidget url={url} styles={{ height: "100%", width: "100%" }} />
    </div>
  );
}
