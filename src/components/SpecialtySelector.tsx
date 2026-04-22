import React, { useState, useMemo } from 'react';
import { SPECIALTY_DOMAINS, UNIVERSITY_SPECIALTIES, UNIVERSITIES, COUNTRIES } from '../constants';
import { UniversitySpecialty } from '../types';
import { cn } from '../lib/utils';
import { Search, ChevronRight, Star, MapPin, University, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpecialtySelectorProps {
  selectedSpecialtyId?: string;
  selectedCountryId?: string;
  selectedUniversityId?: string;
  onSelectSpecialty: (id: string) => void;
  onSelectCountry: (id: string) => void;
  onSelectUniversity: (id: string) => void;
}

const DOMAIN_COLORS: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  medical:      { bg: 'bg-rose-500/10',   border: 'border-rose-500/30',   text: 'text-rose-300',   dot: 'bg-rose-400' },
  engineering:  { bg: 'bg-blue-500/10',   border: 'border-blue-500/30',   text: 'text-blue-300',   dot: 'bg-blue-400' },
  computer:     { bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-300', dot: 'bg-violet-400' },
  business:     { bg: 'bg-amber-500/10',  border: 'border-amber-500/30',  text: 'text-amber-300',  dot: 'bg-amber-400' },
  law:          { bg: 'bg-slate-500/10',  border: 'border-slate-500/30',  text: 'text-slate-300',  dot: 'bg-slate-400' },
  architecture: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-300', dot: 'bg-orange-400' },
  science:      { bg: 'bg-cyan-500/10',   border: 'border-cyan-500/30',   text: 'text-cyan-300',   dot: 'bg-cyan-400' },
  humanities:   { bg: 'bg-emerald-500/10',border: 'border-emerald-500/30',text: 'text-emerald-300',dot: 'bg-emerald-400' },
  arts:         { bg: 'bg-pink-500/10',   border: 'border-pink-500/30',   text: 'text-pink-300',   dot: 'bg-pink-400' },
  environment:  { bg: 'bg-green-500/10',  border: 'border-green-500/30',  text: 'text-green-300',  dot: 'bg-green-400' },
};

export const SpecialtySelector: React.FC<SpecialtySelectorProps> = ({
  selectedSpecialtyId,
  selectedCountryId,
  selectedUniversityId,
  onSelectSpecialty,
  onSelectCountry,
  onSelectUniversity,
}) => {
  const [search, setSearch] = useState('');
  const [activeDomain, setActiveDomain] = useState<string>('all');
  const [filterCountry, setFilterCountry] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredSpecialties = useMemo(() => {
    return UNIVERSITY_SPECIALTIES.filter(sp => {
      const uni = UNIVERSITIES.find(u => u.id === sp.universityId);
      const matchSearch =
        sp.name.toLowerCase().includes(search.toLowerCase()) ||
        sp.description.toLowerCase().includes(search.toLowerCase()) ||
        (sp.careerPaths || []).some(c => c.toLowerCase().includes(search.toLowerCase())) ||
        (uni?.name.toLowerCase().includes(search.toLowerCase()) ?? false);
      const matchDomain = activeDomain === 'all' || sp.domain === activeDomain;
      const matchCountry = !filterCountry || uni?.countryId === filterCountry;
      // If a university is selected, only show its specialties
      const matchUni = !selectedUniversityId || sp.universityId === selectedUniversityId;
      return matchSearch && matchDomain && matchCountry && matchUni;
    });
  }, [search, activeDomain, filterCountry, selectedUniversityId]);

  const selectedSpecialty = UNIVERSITY_SPECIALTIES.find(s => s.id === selectedSpecialtyId);
  const selectedUni = UNIVERSITIES.find(u => u.id === selectedSpecialtyId
    ? UNIVERSITY_SPECIALTIES.find(s => s.id === selectedSpecialtyId)?.universityId
    : selectedUniversityId);

  return (
    <div className="flex flex-col gap-6">
      {/* Selected specialty banner */}
      <AnimatePresence>
        {selectedSpecialty && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              'flex items-center gap-4 p-4 rounded-xl border',
              DOMAIN_COLORS[selectedSpecialty.domain]?.bg,
              DOMAIN_COLORS[selectedSpecialty.domain]?.border
            )}
          >
            <div className="text-2xl shrink-0">
              {SPECIALTY_DOMAINS.find(d => d.id === selectedSpecialty.domain)?.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className={cn('text-xs font-bold uppercase tracking-widest mb-0.5', DOMAIN_COLORS[selectedSpecialty.domain]?.text)}>
                Spécialité sélectionnée
              </div>
              <div className="text-white font-bold text-base truncate">{selectedSpecialty.name}</div>
              <div className="text-slate-400 text-xs mt-0.5">
                {UNIVERSITIES.find(u => u.id === selectedSpecialty.universityId)?.name} ·{' '}
                {COUNTRIES.find(c => c.id === UNIVERSITIES.find(u => u.id === selectedSpecialty.universityId)?.countryId)?.flag}{' '}
                {COUNTRIES.find(c => c.id === UNIVERSITIES.find(u => u.id === selectedSpecialty.universityId)?.countryId)?.name}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="tag-score px-2 py-1 rounded-lg text-xs font-bold">
                Min {selectedSpecialty.minScore}/45
              </div>
              <button
                onClick={() => onSelectSpecialty('')}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Rechercher une spécialité, carrière, université..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="dark-input w-full pl-10 pr-4 py-3 rounded-xl text-sm"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            'flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-all',
            showFilters
              ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300'
              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
          )}
        >
          <Filter className="w-4 h-4" />
          Filtres
          {filterCountry && <span className="w-2 h-2 rounded-full bg-indigo-400" />}
        </button>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/8">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                  Filtrer par pays
                </label>
                <select
                  value={filterCountry}
                  onChange={e => setFilterCountry(e.target.value)}
                  className="dark-input w-full px-3 py-2.5 rounded-lg text-sm"
                >
                  <option value="">Tous les pays</option>
                  {COUNTRIES.map(c => (
                    <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">
                  Filtrer par université
                </label>
                <select
                  value={selectedUniversityId || ''}
                  onChange={e => onSelectUniversity(e.target.value)}
                  className="dark-input w-full px-3 py-2.5 rounded-lg text-sm"
                >
                  <option value="">Toutes les universités</option>
                  {UNIVERSITIES
                    .filter(u => !filterCountry || u.countryId === filterCountry)
                    .map(u => (
                      <option key={u.id} value={u.id}>{u.name}</option>
                    ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Domain pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveDomain('all')}
          className={cn(
            'px-3 py-1.5 rounded-full text-xs font-semibold border transition-all',
            activeDomain === 'all'
              ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300'
              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
          )}
        >
          🌍 Toutes les spécialités ({UNIVERSITY_SPECIALTIES.length})
        </button>
        {SPECIALTY_DOMAINS.map(domain => {
          const count = UNIVERSITY_SPECIALTIES.filter(s => s.domain === domain.id).length;
          const colors = DOMAIN_COLORS[domain.id];
          return (
            <button
              key={domain.id}
              onClick={() => setActiveDomain(activeDomain === domain.id ? 'all' : domain.id)}
              className={cn(
                'px-3 py-1.5 rounded-full text-xs font-semibold border transition-all',
                activeDomain === domain.id
                  ? `${colors.bg} ${colors.border} ${colors.text}`
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              )}
            >
              {domain.icon} {domain.name} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Results count */}
      <div className="text-xs text-slate-500 font-medium">
        {filteredSpecialties.length} spécialité{filteredSpecialties.length !== 1 ? 's' : ''} trouvée{filteredSpecialties.length !== 1 ? 's' : ''}
        {search && ` pour "${search}"`}
      </div>

      {/* Specialty grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredSpecialties.map((spec, idx) => {
            const uni = UNIVERSITIES.find(u => u.id === spec.universityId);
            const country = COUNTRIES.find(c => c.id === uni?.countryId);
            const colors = DOMAIN_COLORS[spec.domain];
            const isSelected = selectedSpecialtyId === spec.id;
            const domain = SPECIALTY_DOMAINS.find(d => d.id === spec.domain);

            return (
              <motion.button
                key={spec.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.03 }}
                onClick={() => onSelectSpecialty(isSelected ? '' : spec.id)}
                className={cn(
                  'text-left p-4 rounded-xl border transition-all card-hover flex flex-col gap-3',
                  isSelected
                    ? `${colors.bg} ${colors.border} shadow-lg scale-[1.02]`
                    : 'bg-white/[0.03] border-white/8 hover:border-white/15 hover:bg-white/[0.05]'
                )}
              >
                {/* Domain badge + Score */}
                <div className="flex items-center justify-between">
                  <span className={cn(
                    'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border',
                    colors.bg, colors.border, colors.text
                  )}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{
                      background: colors.dot.replace('bg-', '').includes('-') ? undefined : undefined,
                      backgroundColor: 'currentColor',
                      opacity: 0.8
                    }} />
                    {domain?.icon} {domain?.name}
                  </span>
                  <span className="tag-score px-2 py-0.5 rounded-lg text-[10px] font-bold">
                    {spec.minScore}/45
                  </span>
                </div>

                {/* Name */}
                <div>
                  <h3 className={cn('font-bold text-sm leading-snug', isSelected ? 'text-white' : 'text-slate-100')}>
                    {spec.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                {/* University + Country */}
                <div className="flex items-center gap-2 mt-auto">
                  <div className="text-base">{country?.flag}</div>
                  <div>
                    <div className="text-[10px] font-semibold text-slate-300">{uni?.name}</div>
                    <div className="text-[9px] text-slate-500">{country?.name}</div>
                  </div>
                </div>

                {/* Required HL tags */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                  {spec.requiredHL.slice(0, 3).map(hlId => (
                    <span key={hlId} className="tag-hl px-1.5 py-0.5 rounded text-[9px] font-bold">
                      HL requis
                    </span>
                  ))}
                  {spec.careerPaths && spec.careerPaths.slice(0, 2).map(cp => (
                    <span key={cp} className="px-1.5 py-0.5 rounded bg-white/5 border border-white/8 text-[9px] text-slate-400">
                      {cp}
                    </span>
                  ))}
                </div>

                {isSelected && (
                  <div className={cn('flex items-center gap-1 text-[10px] font-bold', colors.text)}>
                    <Star className="w-3 h-3 fill-current" />
                    Spécialité sélectionnée
                  </div>
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredSpecialties.length === 0 && (
        <div className="text-center py-16 text-slate-500">
          <div className="text-4xl mb-4">🔍</div>
          <p className="font-semibold">Aucune spécialité trouvée</p>
          <p className="text-sm mt-1">Essayez d'autres mots-clés ou réinitialisez les filtres</p>
          <button
            onClick={() => { setSearch(''); setActiveDomain('all'); setFilterCountry(''); }}
            className="mt-4 px-4 py-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold hover:bg-indigo-500/30 transition-all"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
};
