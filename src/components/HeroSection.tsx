import { ArrowDown, Shield, Zap, Globe } from 'lucide-react';
import { totalProgress } from '../data/roadmapData';

export default function HeroSection() {
  return (
    <div className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/[0.03] blur-3xl" />
        <div className="absolute top-40 left-1/4 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/[0.04] blur-3xl" />
        <div className="absolute top-40 right-1/4 w-[300px] h-[300px] rounded-full bg-[#A07C10]/[0.04] blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase">
            Live Roadmap — {totalProgress}% Overall Progress
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
          Building the{' '}
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#F0C040] to-[#B8961E] bg-clip-text text-transparent">
            Future
          </span>
          <br />
          of DeFi
        </h1>

        <p className="text-[#666] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          A transparent, milestone-driven roadmap built for investors, contributors, and community members. Every commitment tracked on-chain.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {[
            { icon: Shield, label: 'Audited', value: 'CertiK Certified' },
            { icon: Zap, label: 'TGE Complete', value: 'Token Live' },
            { icon: Globe, label: 'Community', value: '12,000+ Holders' },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-3 bg-[#111114] border border-[#2A2A32] rounded-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                <Icon size={15} className="text-[#D4AF37]" />
              </div>
              <div className="text-left">
                <div className="text-[#555] text-[10px] uppercase tracking-wide">{label}</div>
                <div className="text-white text-xs font-semibold">{value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-[#444] text-xs animate-bounce">
          <ArrowDown size={14} />
          <span>Scroll to explore</span>
        </div>
      </div>
    </div>
  );
}
