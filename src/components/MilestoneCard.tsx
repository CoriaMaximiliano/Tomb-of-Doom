import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { Milestone } from '../types';

interface Props {
  milestone: Milestone;
  index: number;
}

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    iconColor: 'text-[#D4AF37]',
    dotColor: 'bg-[#D4AF37]',
    border: 'border-[#D4AF37]/20',
    glow: 'shadow-[#D4AF37]/5',
    labelColor: 'text-[#D4AF37]',
    label: 'Completed',
  },
  'in-progress': {
    icon: Clock,
    iconColor: 'text-[#4A9EFF]',
    dotColor: 'bg-[#4A9EFF]',
    border: 'border-[#4A9EFF]/20',
    glow: 'shadow-[#4A9EFF]/5',
    labelColor: 'text-[#4A9EFF]',
    label: 'In Progress',
  },
  upcoming: {
    icon: Circle,
    iconColor: 'text-[#555]',
    dotColor: 'bg-[#333]',
    border: 'border-[#2A2A32]',
    glow: '',
    labelColor: 'text-[#555]',
    label: 'Upcoming',
  },
};

export default function MilestoneCard({ milestone, index }: Props) {
  const config = statusConfig[milestone.status];
  const Icon = config.icon;

  return (
    <div
      className={`group relative bg-[#111114] border ${config.border} rounded-xl p-5 hover:bg-[#141418] transition-all duration-300 ${config.glow ? `shadow-lg ${config.glow}` : ''}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-0.5">
          <Icon size={18} className={`${config.iconColor} transition-transform duration-200 group-hover:scale-110`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h4 className="text-white text-sm font-semibold leading-snug">{milestone.title}</h4>
            <div className="flex items-center gap-2 shrink-0">
              {milestone.tag && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]/80 border border-[#D4AF37]/15 font-medium tracking-wide">
                  {milestone.tag}
                </span>
              )}
            </div>
          </div>
          <p className="text-[#777] text-xs leading-relaxed">{milestone.description}</p>
          <div className="flex items-center gap-1.5 mt-3">
            <div className={`w-1.5 h-1.5 rounded-full ${config.dotColor} ${milestone.status === 'in-progress' ? 'animate-pulse' : ''}`} />
            <span className={`text-[10px] font-medium tracking-wide ${config.labelColor}`}>{config.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
