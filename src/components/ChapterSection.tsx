import { Chapter } from '../types';
import MilestoneCard from './MilestoneCard';

interface Props {
  chapter: Chapter;
  isLast: boolean;
}

const completedCount = (ch: Chapter) => ch.milestones.filter(m => m.status === 'completed').length;

export default function ChapterSection({ chapter, isLast }: Props) {
  const done = completedCount(chapter);
  const total = chapter.milestones.length;

  return (
    <section className="relative">
      <div className="flex gap-8 lg:gap-12">
        <div className="hidden lg:flex flex-col items-center shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A07C10] flex items-center justify-center text-[#0A0A0C] font-black text-sm shadow-xl shadow-[#D4AF37]/20 shrink-0 z-10">
            {String(chapter.number).padStart(2, '0')}
          </div>
          {!isLast && (
            <div className="w-px flex-1 mt-4 bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent min-h-12" />
          )}
        </div>

        <div className="flex-1 pb-16">
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="lg:hidden w-7 h-7 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A07C10] flex items-center justify-center text-[#0A0A0C] font-black text-[11px]">
                    {String(chapter.number).padStart(2, '0')}
                  </div>
                  <span className="text-[#D4AF37]/60 text-xs font-medium tracking-widest uppercase">{chapter.quarter}</span>
                </div>
                <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  Chapter {chapter.number}:{' '}
                  <span className="bg-gradient-to-r from-[#D4AF37] to-[#F0D878] bg-clip-text text-transparent">
                    {chapter.title}
                  </span>
                </h2>
                <p className="text-[#666] text-sm max-w-lg">{chapter.subtitle}</p>
              </div>

              <div className="shrink-0 text-right">
                <div className="text-2xl font-black bg-gradient-to-br from-[#D4AF37] to-[#A07C10] bg-clip-text text-transparent leading-none">
                  {chapter.progress}%
                </div>
                <div className="text-[#555] text-[11px] tracking-wide mt-1 uppercase">Complete</div>
                <div className="text-[#555] text-[11px] mt-0.5">{done}/{total} milestones</div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex-1 h-1.5 bg-[#1A1A20] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#A07C10] via-[#D4AF37] to-[#F0D878] transition-all duration-1000 ease-out"
                  style={{ width: `${chapter.progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {chapter.milestones.map((milestone, idx) => (
              <MilestoneCard key={milestone.title} milestone={milestone} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
