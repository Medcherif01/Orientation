import React from 'react';
import { IBSubject, IBLevel } from '../types';
import { cn } from '../lib/utils';
import { X } from 'lucide-react';

interface SubjectCardProps {
  subject: IBSubject;
  selectedLevel?: IBLevel;
  onSelect: (level: IBLevel) => void;
  onDeselect: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, selectedLevel, onSelect, onDeselect }) => {
  return (
    <div className={cn(
      "p-4 rounded-xl border transition-all flex flex-col gap-3",
      selectedLevel 
        ? "bg-brand-primary/5 border-brand-primary shadow-sm" 
        : "bg-white border-border-base hover:border-brand-primary/30"
    )}>
      <div className="flex justify-between items-start">
        <h3 className="font-black text-brand-primary uppercase tracking-tight text-sm leading-tight">{subject.name}</h3>
        {selectedLevel && (
          <button 
            onClick={onDeselect}
            className="p-1 rounded bg-brand-secondary text-white hover:bg-brand-secondary/80 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>
      
      <p className="text-[10px] text-slate-500 font-bold uppercase leading-relaxed line-clamp-2">
        {subject.description}
      </p>

      <div className="grid grid-cols-2 gap-2 mt-auto pt-2 border-t border-border-base/50">
        {subject.levels.map((level) => (
          <button
            key={level}
            onClick={() => onSelect(level)}
            className={cn(
              "py-2 rounded font-black text-[10px] uppercase tracking-widest transition-all border",
              selectedLevel === level
                ? "bg-brand-primary text-white border-brand-primary"
                : "bg-slate-50 text-slate-400 border-border-base hover:border-brand-primary/30"
            )}
          >
            {level === 'HL' ? 'Niveau Sup (HL)' : 'Niveau Moyen (SL)'}
          </button>
        ))}
      </div>
    </div>
  );
};
