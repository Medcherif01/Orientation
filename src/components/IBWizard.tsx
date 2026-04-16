import React, { useState } from 'react';
import { IB_GROUPS, SelectedSubject, IBLevel } from '../types';
import { SUBJECTS } from '../constants';
import { SubjectCard } from './SubjectCard';
import { cn } from '../lib/utils';
import { AlertCircle, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface IBWizardProps {
  selectedSubjects: SelectedSubject[];
  onUpdate: (subjects: SelectedSubject[]) => void;
}

export const IBWizard: React.FC<IBWizardProps> = ({ selectedSubjects, onUpdate }) => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const currentGroup = IB_GROUPS[currentGroupIndex];
  const groupSubjects = SUBJECTS.filter(s => s.group === currentGroup.id);

  const handleSelect = (subjectId: string, level: IBLevel) => {
    const subject = SUBJECTS.find(s => s.id === subjectId);
    if (!subject) return;

    const existing = selectedSubjects.find(s => s.subjectId === subjectId);
    if (existing) {
      onUpdate(selectedSubjects.map(s => s.subjectId === subjectId ? { ...s, level } : s));
      return;
    }

    // Group counts
    const groupCounts: Record<number, number> = {};
    selectedSubjects.forEach(s => {
      const sub = SUBJECTS.find(sub => sub.id === s.subjectId);
      if (sub) groupCounts[sub.group] = (groupCounts[sub.group] || 0) + 1;
    });

    // Rule: Max 2 subjects per group
    if ((groupCounts[subject.group] || 0) >= 2) {
      // Replace the first one found in this group if we're at limit
      onUpdate(selectedSubjects.map(s => {
        const sub = SUBJECTS.find(sub => sub.id === s.subjectId);
        return sub?.group === subject.group ? { subjectId, level } : s;
      }));
      return;
    }

    // Rule: If Group 6 is missing, replacement can ONLY be from Group 3 or 4
    const hasGroup6 = selectedSubjects.some(s => SUBJECTS.find(sub => sub.id === s.subjectId)?.group === 6);
    const isGroup6 = subject.group === 6;
    
    // If we already have 5 subjects and none are G6, the 6th must be G6 OR G3/G4
    if (selectedSubjects.length === 5 && !hasGroup6 && !isGroup6) {
      if (subject.group !== 3 && subject.group !== 4) {
        // We don't block selection here but the validation will catch it
        // However, user specifically asked "il pourra seulement la remplacer par une autre matiere du groupe 3 ou 4"
        // So let's be strict
        return;
      }
    }

    onUpdate([...selectedSubjects, { subjectId, level }]);
  };

  const handleDeselect = (subjectId: string) => {
    onUpdate(selectedSubjects.filter(s => s.subjectId !== subjectId));
  };

  const hlCount = selectedSubjects.filter(s => s.level === 'HL').length;
  const slCount = selectedSubjects.filter(s => s.level === 'SL').length;
  const totalCount = selectedSubjects.length;

  // Validation Rules:
  // 1. Total 6 subjects
  // 2. Exactly 3 HL and 3 SL
  // 3. One from each Group 1-5
  // 4. 6th is Group 6 OR (Group 3 or Group 4)
  // 5. Max 2 per group
  const selectedGroups = new Set(selectedSubjects.map(s => SUBJECTS.find(sub => sub.id === s.subjectId)?.group));
  const hasCoreGroups = [1, 2, 3, 4, 5].every(g => selectedGroups.has(g));
  
  const groupCounts: Record<number, number> = {};
  selectedSubjects.forEach(s => {
    const sub = SUBJECTS.find(sub => sub.id === s.subjectId);
    if (sub) groupCounts[sub.group] = (groupCounts[sub.group] || 0) + 1;
  });

  const hasGroup6 = selectedGroups.has(6);
  const hasValidReplacement = groupCounts[3] === 2 || groupCounts[4] === 2;
  const group6RuleMet = hasGroup6 || hasValidReplacement;

  const isValid = totalCount === 6 && hlCount === 3 && slCount === 3 && hasCoreGroups && group6RuleMet;

  return (
    <div className="flex flex-col gap-6">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Progress Card (Span 1) */}
        <div className="bg-card-bg p-4 rounded-xl border border-border-base shadow-sm flex flex-col gap-4">
          <div className="text-[10px] font-bold text-brand-primary uppercase tracking-widest border-b border-border-base pb-2">
            Statut de Sélection
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-50 p-3 rounded-lg text-center">
              <div className="text-xl font-black text-brand-primary">{totalCount}</div>
              <div className="text-[8px] font-bold text-slate-400 uppercase">Total</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg text-center">
              <div className="text-xl font-black text-brand-primary">{hlCount}</div>
              <div className="text-[8px] font-bold text-slate-400 uppercase">HL</div>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg text-center">
              <div className="text-xl font-black text-brand-primary">{slCount}</div>
              <div className="text-[8px] font-bold text-slate-400 uppercase">SL</div>
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1">
              <span>Complétion</span>
              <span>{Math.round((totalCount / 6) * 100)}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-success transition-all duration-500" 
                style={{ width: `${(totalCount / 6) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Validation Alert (Span 1) */}
        <div className={cn(
          "p-4 rounded-xl border flex flex-col gap-2",
          isValid 
            ? "bg-green-50 border-green-100 text-green-700" 
            : "bg-brand-secondary/5 border-brand-secondary/10 text-brand-secondary"
        )}>
          <div className="text-[10px] font-bold uppercase tracking-widest border-b border-current/10 pb-2">
            Validation IB
          </div>
          <div className="flex items-start gap-2 pt-2">
            {isValid ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
            <div className="text-[10px] font-bold leading-tight">
              {isValid 
                ? "Votre combinaison respecte les standards de l'IB." 
                : (
                  <ul className="list-disc pl-3 space-y-1">
                    {totalCount !== 6 && <li>Total doit être de 6 matières</li>}
                    {hlCount !== 3 && <li>Exactement 3 matières au niveau HL</li>}
                    {slCount !== 3 && <li>Exactement 3 matières au niveau SL</li>}
                    {!hasCoreGroups && <li>Manque un groupe obligatoire (1-5)</li>}
                    {!group6RuleMet && <li>Choisissez G6 ou un 2ème G3/G4</li>}
                  </ul>
                )}
            </div>
          </div>
        </div>

        {/* Group Navigation (Span 2) */}
        <div className="md:col-span-2 bg-card-bg p-4 rounded-xl border border-border-base shadow-sm">
          <div className="text-[10px] font-bold text-brand-primary uppercase tracking-widest border-b border-border-base pb-2 mb-4">
            Navigation par Groupes
          </div>
          <div className="grid grid-cols-3 gap-2">
            {IB_GROUPS.map((group, idx) => {
              const isSelected = selectedSubjects.some(s => {
                const sub = SUBJECTS.find(sub => sub.id === s.subjectId);
                return sub?.group === group.id;
              });
              return (
                <button
                  key={group.id}
                  onClick={() => setCurrentGroupIndex(idx)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-[10px] font-bold transition-all border text-center",
                    currentGroupIndex === idx
                      ? "bg-brand-primary text-white border-brand-primary shadow-md"
                      : isSelected
                        ? "bg-brand-primary/5 text-brand-primary border-brand-primary/20"
                        : "bg-white text-slate-400 border-border-base hover:border-brand-primary/30"
                  )}
                >
                  G{group.id}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subject Selection Area */}
      <div className="bg-card-bg p-6 rounded-xl border border-border-base shadow-sm">
        <div className="flex justify-between items-center mb-6 border-b border-border-base pb-4">
          <div>
            <h2 className="text-lg font-black text-brand-primary uppercase tracking-tight">{currentGroup.name}</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase">Sélectionnez vos options de niveau</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentGroupIndex(prev => Math.max(0, prev - 1))}
              disabled={currentGroupIndex === 0}
              className="p-2 rounded-lg border border-border-base text-slate-400 hover:text-brand-primary hover:border-brand-primary disabled:opacity-20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentGroupIndex(prev => Math.min(IB_GROUPS.length - 1, prev + 1))}
              disabled={currentGroupIndex === IB_GROUPS.length - 1}
              className="p-2 rounded-lg border border-border-base text-slate-400 hover:text-brand-primary hover:border-brand-primary disabled:opacity-20 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groupSubjects.map(subject => {
            const selection = selectedSubjects.find(s => s.subjectId === subject.id);
            return (
              <SubjectCard
                key={subject.id}
                subject={subject}
                selectedLevel={selection?.level}
                onSelect={(level) => handleSelect(subject.id, level)}
                onDeselect={() => handleDeselect(subject.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
