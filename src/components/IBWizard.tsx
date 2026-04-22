import React, { useState, useMemo } from 'react';
import { IB_GROUPS, SelectedSubject, IBLevel } from '../types';
import { SUBJECTS, UNIVERSITY_SPECIALTIES, UNIVERSITIES, SPECIALTY_DOMAINS } from '../constants';
import { SubjectCard } from './SubjectCard';
import { cn } from '../lib/utils';
import {
  AlertCircle, ChevronRight, ChevronLeft, CheckCircle2,
  Sparkles, Info, RotateCcw, BookOpen, Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface IBWizardProps {
  selectedSubjects: SelectedSubject[];
  selectedSpecialtyId?: string;
  onUpdate: (subjects: SelectedSubject[]) => void;
}

const GROUP_ICONS = ['🔤', '🌐', '🏛️', '🔬', '📐', '🎨'];
const GROUP_COLORS = [
  'border-violet-500/30 bg-violet-500/10 text-violet-300',
  'border-blue-500/30 bg-blue-500/10 text-blue-300',
  'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
  'border-amber-500/30 bg-amber-500/10 text-amber-300',
  'border-pink-500/30 bg-pink-500/10 text-pink-300',
];

const DOMAIN_ICONS: Record<string, string> = {
  medical: '🏥', engineering: '⚙️', computer: '💻', business: '📈',
  law: '⚖️', architecture: '🏛️', science: '🔬', humanities: '📚',
  arts: '🎨', environment: '🌱',
};

export const IBWizard: React.FC<IBWizardProps> = ({
  selectedSubjects,
  selectedSpecialtyId,
  onUpdate,
}) => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const currentGroup = IB_GROUPS[currentGroupIndex];
  const groupSubjects = SUBJECTS.filter(s => s.group === currentGroup.id);

  const specialty = useMemo(
    () => UNIVERSITY_SPECIALTIES.find(s => s.id === selectedSpecialtyId),
    [selectedSpecialtyId]
  );

  const recommendedMap = useMemo(() => {
    if (!specialty) return {} as Record<string, IBLevel>;
    const map: Record<string, IBLevel> = {};
    specialty.recommendedSubjects.forEach(id => {
      map[id] = specialty.requiredHL.includes(id) ? 'HL' : 'SL';
    });
    return map;
  }, [specialty]);

  const handleSelect = (subjectId: string, level: IBLevel) => {
    const subject = SUBJECTS.find(s => s.id === subjectId);
    if (!subject) return;

    const existing = selectedSubjects.find(s => s.subjectId === subjectId);
    if (existing) {
      onUpdate(selectedSubjects.map(s =>
        s.subjectId === subjectId ? { ...s, level } : s
      ));
      return;
    }

    const hlCount = selectedSubjects.filter(s => s.level === 'HL').length;
    const slCount = selectedSubjects.filter(s => s.level === 'SL').length;
    if (level === 'HL' && hlCount >= 3) return;
    if (level === 'SL' && slCount >= 3) return;
    if (selectedSubjects.length >= 6) return;

    const groupCounts: Record<number, number> = {};
    selectedSubjects.forEach(s => {
      const sub = SUBJECTS.find(sub => sub.id === s.subjectId);
      if (sub) groupCounts[sub.group] = (groupCounts[sub.group] || 0) + 1;
    });

    if ((groupCounts[subject.group] || 0) >= 2) {
      onUpdate(selectedSubjects.map(s => {
        const sub = SUBJECTS.find(sub => sub.id === s.subjectId);
        return sub?.group === subject.group ? { subjectId, level } : s;
      }));
      return;
    }

    onUpdate([...selectedSubjects, { subjectId, level }]);
  };

  const handleDeselect = (subjectId: string) => {
    onUpdate(selectedSubjects.filter(s => s.subjectId !== subjectId));
  };

  const handleAutoFill = () => {
    if (!specialty) return;
    const newSubjects: SelectedSubject[] = specialty.recommendedSubjects.map(id => ({
      subjectId: id,
      level: specialty.requiredHL.includes(id) ? 'HL' : 'SL',
    }));

    [1, 2, 3, 4, 5].forEach(groupId => {
      const hasGroup = newSubjects.some(
        s => SUBJECTS.find(sub => sub.id === s.subjectId)?.group === groupId
      );
      if (!hasGroup) {
        const defaultSub = groupId === 1
          ? SUBJECTS.find(sub => sub.id === 'fra-a-lit')
          : SUBJECTS.find(sub => sub.group === groupId);
        if (defaultSub) newSubjects.push({ subjectId: defaultSub.id, level: 'SL' });
      }
    });

    while (newSubjects.length < 6) {
      const unused = SUBJECTS.find(sub => !newSubjects.some(s => s.subjectId === sub.id));
      if (unused) newSubjects.push({ subjectId: unused.id, level: 'SL' });
      else break;
    }

    const final = newSubjects.slice(0, 6);
    let hlCount = final.filter(s => s.level === 'HL').length;
    for (let i = final.length - 1; i >= 0 && hlCount > 3; i--) {
      if (final[i].level === 'HL' && !specialty.requiredHL.includes(final[i].subjectId)) {
        final[i] = { ...final[i], level: 'SL' };
        hlCount--;
      }
    }
    onUpdate(final);
  };

  const hlCount = selectedSubjects.filter(s => s.level === 'HL').length;
  const slCount = selectedSubjects.filter(s => s.level === 'SL').length;
  const totalCount = selectedSubjects.length;

  const selectedGroups = new Set(
    selectedSubjects.map(s => SUBJECTS.find(sub => sub.id === s.subjectId)?.group)
  );
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

  const specialtyAlignment = specialty
    ? specialty.requiredHL.filter(id =>
        selectedSubjects.some(s => s.subjectId === id && s.level === 'HL')
      ).length
    : 0;
  const specialtyAlignmentTotal = specialty?.requiredHL.length || 0;

  const matchingSpecialties = useMemo(() => {
    if (selectedSubjects.length < 3) return [];
    return UNIVERSITY_SPECIALTIES.filter(spec =>
      spec.id !== selectedSpecialtyId &&
      spec.recommendedSubjects.filter(id =>
        selectedSubjects.some(s => s.subjectId === id)
      ).length >= 2 &&
      spec.requiredHL.every(id =>
        selectedSubjects.some(s => s.subjectId === id && s.level === 'HL')
      )
    ).slice(0, 6);
  }, [selectedSubjects, selectedSpecialtyId]);

  return (
    <div className="flex flex-col gap-6">

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white/[0.04] border border-white/8 rounded-xl p-4 flex flex-col gap-2">
          <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Matières</div>
          <div className="flex items-end gap-1">
            <span className="text-3xl font-black text-white">{totalCount}</span>
            <span className="text-slate-500 font-bold mb-1">/6</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 rounded-full transition-all duration-500" style={{ width: `${(totalCount / 6) * 100}%` }} />
          </div>
        </div>
        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 flex flex-col gap-2">
          <div className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest">Niveau Sup (HL)</div>
          <div className="flex items-end gap-1">
            <span className="text-3xl font-black text-indigo-300">{hlCount}</span>
            <span className="text-indigo-500 font-bold mb-1">/3</span>
          </div>
          <div className="h-1.5 bg-indigo-500/20 rounded-full overflow-hidden">
            <div className={cn('h-full rounded-full transition-all duration-500', hlCount === 3 ? 'bg-indigo-400' : 'bg-indigo-500/60')} style={{ width: `${(hlCount / 3) * 100}%` }} />
          </div>
        </div>
        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 flex flex-col gap-2">
          <div className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest">Niveau Moy (SL)</div>
          <div className="flex items-end gap-1">
            <span className="text-3xl font-black text-cyan-300">{slCount}</span>
            <span className="text-cyan-500 font-bold mb-1">/3</span>
          </div>
          <div className="h-1.5 bg-cyan-500/20 rounded-full overflow-hidden">
            <div className={cn('h-full rounded-full transition-all duration-500', slCount === 3 ? 'bg-cyan-400' : 'bg-cyan-500/60')} style={{ width: `${(slCount / 3) * 100}%` }} />
          </div>
        </div>
        <div className={cn('rounded-xl p-4 flex flex-col gap-2 border', isValid ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/[0.03] border-white/8')}>
          <div className={cn('text-[9px] font-bold uppercase tracking-widest', isValid ? 'text-emerald-400' : 'text-slate-500')}>Validation IB</div>
          <div className="flex items-center gap-2 mt-1">
            {isValid ? <CheckCircle2 className="w-6 h-6 text-emerald-400" /> : <AlertCircle className="w-6 h-6 text-slate-500" />}
            <span className={cn('text-xs font-bold', isValid ? 'text-emerald-300' : 'text-slate-400')}>
              {isValid ? 'Valide !' : 'En cours...'}
            </span>
          </div>
        </div>
      </div>

      {/* Specialty alignment bar */}
      {specialty && (
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8">
          <Target className="w-5 h-5 text-amber-400 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-300 truncate">
                Alignement : <span className="text-amber-300">{specialty.name}</span>
              </span>
              <span className="text-xs font-bold text-amber-300 shrink-0 ml-2">
                {specialtyAlignment}/{specialtyAlignmentTotal} HL ✓
              </span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-500"
                style={{ width: specialtyAlignmentTotal > 0 ? `${(specialtyAlignment / specialtyAlignmentTotal) * 100}%` : '0%' }}
              />
            </div>
            <div className="text-[10px] text-slate-500 mt-1.5 flex flex-wrap gap-2">
              <span>Score min : <span className="text-amber-300 font-bold">{specialty.minScore}/45</span></span>
              {specialty.minScorePerHL && (
                <span>Min par HL : <span className="text-amber-300 font-bold">{specialty.minScorePerHL}/7</span></span>
              )}
            </div>
          </div>
          <button
            onClick={handleAutoFill}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold hover:bg-indigo-500/30 transition-all whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Auto-remplir
          </button>
        </div>
      )}

      {/* Validation issues */}
      <AnimatePresence>
        {!isValid && totalCount > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-300/80 space-y-0.5 font-medium">
                {totalCount !== 6 && <div>• Sélectionnez exactement 6 matières ({totalCount}/6)</div>}
                {hlCount !== 3 && <div>• 3 matières en Niveau Supérieur (HL) requises ({hlCount}/3)</div>}
                {slCount !== 3 && <div>• 3 matières en Niveau Moyen (SL) requises ({slCount}/3)</div>}
                {!hasCoreGroups && <div>• Couvrez les Groupes 1 à 5 (au moins une matière par groupe)</div>}
                {!group6RuleMet && <div>• Ajoutez une matière du Groupe 6 (Arts) ou un 2ème sujet du G3/G4</div>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Group tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {IB_GROUPS.map((group, idx) => {
          const hasSubject = selectedSubjects.some(
            s => SUBJECTS.find(sub => sub.id === s.subjectId)?.group === group.id
          );
          const isCurrent = currentGroupIndex === idx;
          return (
            <button
              key={group.id}
              onClick={() => setCurrentGroupIndex(idx)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold whitespace-nowrap transition-all shrink-0',
                isCurrent
                  ? GROUP_COLORS[idx]
                  : hasSubject
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    : 'bg-white/[0.03] border-white/8 text-slate-400 hover:text-white hover:border-white/20'
              )}
            >
              <span>{GROUP_ICONS[idx]}</span>
              <span>{group.shortName}</span>
              {hasSubject && !isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
            </button>
          );
        })}
        <button
          onClick={() => onUpdate([])}
          disabled={selectedSubjects.length === 0}
          className="ml-auto flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-white/8 text-xs font-bold text-slate-500 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10 transition-all disabled:opacity-30 shrink-0"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      {/* Subject grid */}
      <div className="bg-white/[0.02] border border-white/8 rounded-2xl p-5">
        <div className="flex justify-between items-center mb-5 pb-4 border-b border-white/8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">{GROUP_ICONS[currentGroupIndex]}</span>
              <h2 className="text-base font-bold text-white">{currentGroup.name}</h2>
            </div>
            <p className="text-[10px] text-slate-500 mt-0.5 font-medium uppercase tracking-wider">
              {currentGroup.shortName} · Choisissez vos matières et niveaux (NS = HL, NM = SL)
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentGroupIndex(prev => Math.max(0, prev - 1))}
              disabled={currentGroupIndex === 0}
              className="p-2 rounded-lg border border-white/8 text-slate-500 hover:text-white hover:border-white/20 disabled:opacity-20 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentGroupIndex(prev => Math.min(IB_GROUPS.length - 1, prev + 1))}
              disabled={currentGroupIndex === IB_GROUPS.length - 1}
              className="p-2 rounded-lg border border-white/8 text-slate-500 hover:text-white hover:border-white/20 disabled:opacity-20 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {groupSubjects.map(subject => {
            const selection = selectedSubjects.find(s => s.subjectId === subject.id);
            const isRec = subject.id in recommendedMap;
            return (
              <SubjectCard
                key={subject.id}
                subject={subject}
                selectedLevel={selection?.level}
                isRecommended={isRec}
                recommendedLevel={recommendedMap[subject.id]}
                onSelect={level => handleSelect(subject.id, level)}
                onDeselect={() => handleDeselect(subject.id)}
              />
            );
          })}
        </div>
      </div>

      {/* Selection summary */}
      {selectedSubjects.length > 0 && (
        <div className="bg-white/[0.02] border border-white/8 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <h3 className="text-sm font-bold text-white">Ma Combinaison de 6 Matières</h3>
            {isValid && (
              <span className="ml-auto flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
                <CheckCircle2 className="w-3 h-3" /> Valide IB
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {selectedSubjects.map(sel => {
              const sub = SUBJECTS.find(s => s.id === sel.subjectId);
              const isRequiredHL = specialty?.requiredHL.includes(sel.subjectId);
              if (!sub) return null;
              return (
                <div
                  key={sel.subjectId}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl border',
                    sel.level === 'HL' ? 'bg-indigo-500/10 border-indigo-500/25' : 'bg-cyan-500/10 border-cyan-500/20'
                  )}
                >
                  <span className={cn(
                    'text-[9px] font-black px-1.5 py-0.5 rounded-md shrink-0',
                    sel.level === 'HL' ? 'bg-indigo-500 text-white' : 'bg-cyan-500/60 text-white'
                  )}>
                    {sel.level}
                  </span>
                  <span className="text-xs text-slate-200 font-medium truncate flex-1">{sub.name}</span>
                  {isRequiredHL && sel.level === 'HL' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                  {isRequiredHL && sel.level !== 'HL' && <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" title="HL requis" />}
                  <button onClick={() => handleDeselect(sel.subjectId)} className="text-slate-500 hover:text-red-400 transition-colors shrink-0 font-bold text-sm leading-none">×</button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Other compatible specialties */}
      {matchingSpecialties.length > 0 && (
        <div className="bg-white/[0.02] border border-white/8 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white">Autres spécialités compatibles avec votre sélection</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {matchingSpecialties.map(spec => {
              const uni = UNIVERSITIES.find(u => u.id === spec.universityId);
              return (
                <div key={spec.id} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/8">
                  <div className="text-xl shrink-0 mt-0.5">{DOMAIN_ICONS[spec.domain] || '🎓'}</div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-200 truncate">{spec.name}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5 truncate">{uni?.name}</div>
                    <span className="tag-score inline-flex px-1.5 py-0.5 rounded text-[9px] font-bold mt-1">{spec.minScore}/45</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
