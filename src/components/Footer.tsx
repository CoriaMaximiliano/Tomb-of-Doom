import { Hexagon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E26] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#A07C10] flex items-center justify-center">
            <Hexagon size={15} className="text-[#0A0A0C]" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-white font-bold text-sm">AURUM Protocol</div>
            <div className="text-[#555] text-[11px]">Roadmap v2.1 — Updated April 2025</div>
          </div>
        </div>
        <div className="text-[#444] text-xs text-center md:text-right">
          <p>All milestones subject to governance approval and market conditions.</p>
          <p className="mt-1">This document is for informational purposes only and does not constitute financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
