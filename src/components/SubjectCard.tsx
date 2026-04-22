import React from 'react';
import { IBSubject, IBLevel } from '../types';
import { cn } from '../lib/utils';
import { X, CheckCircle2 } from 'lucide-react';

interface SubjectCardProps {
  subject: IBSubject;
  selectedLevel?: IBLevel;
  isRecommended?: boolean;
  recommendedLevel?: IBLevel;
  onSelect: (level: IBLevel) => void;
  onDeselect: () => void;
}

const GROUP_COLORS: Record<number, string> = {
  1: 'from-violet-500/20 to-violet-500/5 border-violet-500/30',
  2: 'from-blue-500/20 to-blue-500/5 border-blue-500/30',
  3: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30',
  4: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30',
  5: 'from-amber-500/20 to-amber-500/5 border-amber-500/30',
  6: 'from-pink-500/20 to-pink-500/5 border-pink-500/30',
};

const GROUP_BADGE: Record<number, string> = {
  1: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  2: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  3: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  4: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  5: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  6: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
};

export const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  selectedLevel,
  isRecommended,
  recommendedLevel,
  onSelect,
  onDeselect,
}) => {
  const isSelected = !!selectedLevel;

  return (
    <div
      className={cn(
        'relative p-4 rounded-xl border transition-all flex flex-col gap-3 card-hover',
        isSelected
          ? `bg-gradient-to-br ${GROUP_COLORS[subject.group]} shadow-lg`
          : 'bg-white/[0.03] border-white/8 hover:border-white/15 hover:bg-white/[0.05]',
        isRecommended && !isSelected && 'border-indigo-500/40 bg-indigo-500/5'
      )}
    >
      {/* Recommended badge */}
      {isRecommended && (
        <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-indigo-500 text-white text-[9px] font-bold rounded-full uppercase tracking-wider shadow-lg">
          Recommandé
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-start gap-2">
        <div className="flex-1">
          <div className={cn(
            'inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border mb-1.5',
            GROUP_BADGE[subject.group]
          )}>
            G{subject.group}
          </div>
          <h3 className={cn(
            'font-bold text-sm leading-tight',
            isSelected ? 'text-white' : 'text-slate-200'
          )}>
            {subject.name}
          </h3>
        </div>
        {isSelected && (
          <button
            onClick={onDeselect}
            className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all shrink-0"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Description */}
      <p className="text-[10px] text-slate-400 leading-relaxed line-clamp-2">
        {subject.description}
      </p>

      {/* Level buttons */}
      <div className="grid grid-cols-2 gap-2 mt-auto pt-2 border-t border-white/5">
        {subject.levels.map((level) => {
          const isActiveLevel = selectedLevel === level;
          const isRecLevel = recommendedLevel === level && isRecommended;
          return (
            <button
              key={level}
              onClick={() => onSelect(level)}
              className={cn(
                'py-2 px-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all border flex items-center justify-center gap-1',
                isActiveLevel
                  ? level === 'HL'
                    ? 'bg-indigo-500 text-white border-indigo-500 shadow-md'
                    : 'bg-cyan-500/80 text-white border-cyan-500 shadow-md'
                  : isRecLevel
                    ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 hover:bg-indigo-500/30'
                    : 'bg-white/5 text-slate-400 border-white/8 hover:border-white/20 hover:text-slate-200'
              )}
            >
              {isActiveLevel && <CheckCircle2 className="w-2.5 h-2.5" />}
              {level === 'HL' ? 'NS (HL)' : 'NM (SL)'}
            </button>
          );
        })}
      </div>
    </div>
  );
};
