import type React from 'react';

export type Lang = 'es' | 'en';

export type RoadmapTone = 'amber' | 'violet' | 'cyan' | 'emerald';

export type RoadmapCard = { bold: string; text: string };

export type RoadmapMetric = { kicker: string; value: string; detail: string };

export type RoadmapSection = {
  title: string;
  lead?: string;
  items?: RoadmapCard[];
  metrics?: RoadmapMetric[];
};

export type ChapterStatusVariant = 'alpha' | 'in_dev' | 'q_window' | 'planned';

export type RoadmapChapterBase = {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  status: string;
  statusVariant: ChapterStatusVariant;
  progress: number;
  accent: string;
  tone: RoadmapTone;
  sections: RoadmapSection[];
};

export type RoadmapChapter = RoadmapChapterBase & {
  icon: React.ReactNode;
};
