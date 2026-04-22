import { useState, useEffect } from 'react';
import { Hexagon, TrendingUp, ChevronDown } from 'lucide-react';
import { totalProgress, tokenomicsData } from '../data/roadmapData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showTokenomics, setShowTokenomics] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0C]/95 backdrop-blur-md border-b border-[#2A2A32]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#A07C10] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
            <Hexagon size={18} className="text-[#0A0A0C]" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-white font-bold text-sm tracking-wide leading-none">AURUM</div>
            <div className="text-[#888] text-[10px] tracking-widest uppercase mt-0.5">Protocol</div>
          </div>
        </div>

        <div className="flex-1 max-w-xs hidden md:block">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[#888] text-xs tracking-wide uppercase">Total Progress</span>
            <span className="text-[#D4AF37] text-xs font-bold">{totalProgress}%</span>
          </div>
          <div className="h-1.5 bg-[#1E1E26] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#A07C10] via-[#D4AF37] to-[#F0D878] transition-all duration-1000 ease-out relative"
              style={{ width: `${totalProgress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowTokenomics(!showTokenomics)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/5 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-200 group"
          >
            <TrendingUp size={14} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-wide">Tokenomics</span>
            <ChevronDown
              size={12}
              className={`text-[#D4AF37]/70 transition-transform duration-200 ${showTokenomics ? 'rotate-180' : ''}`}
            />
          </button>

          {showTokenomics && (
            <div className="absolute right-0 top-full mt-3 w-72 bg-[#111114] border border-[#2A2A32] rounded-xl shadow-2xl shadow-black/60 p-5 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-sm font-bold tracking-wide">Token Distribution</h3>
                <span className="text-[#888] text-xs">1,000,000,000 Total</span>
              </div>
              <div className="space-y-2.5">
                {tokenomicsData.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#aaa] text-xs">{item.label}</span>
                      <span className="text-white text-xs font-semibold">{item.percentage}%</span>
                    </div>
                    <div className="h-1 bg-[#1E1E26] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#2A2A32]">
                <div className="flex justify-between text-xs">
                  <span className="text-[#666]">Ticker</span>
                  <span className="text-[#D4AF37] font-bold">$AUR</span>
                </div>
                <div className="flex justify-between text-xs mt-1.5">
                  <span className="text-[#666]">Network</span>
                  <span className="text-[#aaa]">Ethereum + L2s</span>
                </div>
                <div className="flex justify-between text-xs mt-1.5">
                  <span className="text-[#666]">Vesting</span>
                  <span className="text-[#aaa]">12–36 month linear</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden px-6 pb-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[#888] text-[11px] tracking-wide uppercase">Total Progress</span>
          <span className="text-[#D4AF37] text-[11px] font-bold">{totalProgress}%</span>
        </div>
        <div className="h-1.5 bg-[#1E1E26] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#A07C10] via-[#D4AF37] to-[#F0D878]"
            style={{ width: `${totalProgress}%` }}
          />
        </div>
      </div>
    </header>
  );
}
