export interface Milestone {
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  tag?: string;
}

export interface Chapter {
  number: number;
  title: string;
  subtitle: string;
  quarter: string;
  progress: number;
  milestones: Milestone[];
}

export interface TokenomicsItem {
  label: string;
  percentage: number;
  color: string;
}
