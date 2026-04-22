import React, { useState } from 'react';
import { StudentProfile, SelectedSubject } from './types';
import { IBWizard } from './components/IBWizard';
import { UniversityOrientation } from './components/UniversityOrientation';
import { SpecialtySelector } from './components/SpecialtySelector';
import { SoutienScolaire } from './components/SoutienScolaire';
import { cn } from './lib/utils';
import { COUNTRIES, UNIVERSITIES, UNIVERSITY_SPECIALTIES, SPECIALTY_DOMAINS } from './constants';
import {
  Compass, GraduationCap, ChevronRight, School, UserCircle,
  LayoutDashboard, BookOpen, ArrowRight, Sparkles, ChevronLeft,
  Info, Search, Globe, TargetIcon, CheckCircle2, X, Menu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type View = 'landing' | 'selector' | 'dashboard';
type DashboardTab = 'specialty' | 'subjects' | 'university' | 'soutien';

const STEPS = [
  { id: 'specialty', label: 'Spécialité', icon: '🎯', tab: 'specialty' as DashboardTab },
  { id: 'subjects',  label: 'Matières',   icon: '📚', tab: 'subjects'  as DashboardTab },
  { id: 'university',label: 'Résultats',  icon: '🏛️', tab: 'university' as DashboardTab },
];

export default function App() {
  const [view, setView] = useState<View>('landing');
  const [activeTab, setActiveTab] = useState<DashboardTab>('specialty');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [profile, setProfile] = useState<StudentProfile>({
    grade: 'PEI5',
    status: 'current',
    careerGoal: '',
    selectedSubjects: [],
  });

  const updateSubjects = (subjects: SelectedSubject[]) => {
    setProfile(prev => ({ ...prev, selectedSubjects: subjects }));
  };

  const selectedSpecialty = UNIVERSITY_SPECIALTIES.find(s => s.id === profile.selectedSpecialtyId);
  const selectedUni = UNIVERSITIES.find(u => u.id === profile.selectedUniversityId);
  const selectedCountry = COUNTRIES.find(c => c.id === profile.selectedCountryId);
  const selectedDomain = SPECIALTY_DOMAINS.find(d => d.id === selectedSpecialty?.domain);

  const goToDashboard = (tab: DashboardTab = 'specialty') => {
    setActiveTab(tab);
    setView('dashboard');
  };

  const TAB_LIST: { id: DashboardTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'specialty', label: 'Spécialité', icon: <span>🎯</span> },
    { id: 'subjects',  label: 'Matières IB', icon: <span>📚</span>,
      badge: profile.selectedSubjects.length > 0 ? `${profile.selectedSubjects.length}/6` : undefined },
    { id: 'university', label: 'Orientation', icon: <span>🏛️</span> },
    { id: 'soutien',   label: 'Soutien',     icon: <span>ℹ️</span> },
  ];

  return (
    <div className="min-h-screen animated-gradient text-slate-100 font-sans relative overflow-x-hidden">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="orb absolute top-[-10%] left-[-5%] w-96 h-96 bg-indigo-600/20" style={{ animationDelay: '0s' }} />
        <div className="orb absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-violet-600/15" style={{ animationDelay: '3s' }} />
        <div className="orb absolute top-[40%] left-[60%] w-64 h-64 bg-cyan-600/10" style={{ animationDelay: '6s' }} />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">

          {/* ─────────────────── LANDING ─────────────────── */}
          {view === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center p-6 py-16"
            >
              <div className="max-w-5xl w-full mx-auto">
                {/* School badge */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center gap-5 mb-10"
                >
                  <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-full bg-white overflow-hidden border-2 border-indigo-400 flex items-center justify-center shrink-0">
                      <img
                        src="https://lh3.googleusercontent.com/d/1gjzWKHQxmAjA7wWE_2Mv8TGfOdqiHLlp"
                        alt="Alkawthar"
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <span className="text-sm font-bold text-slate-300">Écoles Internationales Alkawthar</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                  </div>
                </motion.div>

                {/* Hero text */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mb-8"
                >
                  <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-4 tracking-tight">
                    <span className="gradient-text">Choisissez votre</span>
                    <br />
                    <span className="text-white">Voie Universitaire</span>
                    <br />
                    <span className="gradient-text-gold">Mondiale IB</span>
                  </h1>
                  <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-6">
                    Sélectionnez votre spécialité parmi <strong className="text-white">{UNIVERSITY_SPECIALTIES.length}+ spécialités</strong> dans les meilleures universités du monde, puis construisez votre combinaison idéale de <strong className="text-white">6 matières IB</strong>.
                  </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap justify-center gap-6 mb-12"
                >
                  {[
                    { value: `${UNIVERSITY_SPECIALTIES.length}+`, label: 'Spécialités', icon: '🎯' },
                    { value: `${UNIVERSITIES.length}+`, label: 'Universités', icon: '🏛️' },
                    { value: `${COUNTRIES.length}`, label: 'Pays', icon: '🌍' },
                    { value: '10', label: 'Domaines', icon: '📚' },
                  ].map(stat => (
                    <div key={stat.label} className="flex flex-col items-center gap-1 px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/8 backdrop-blur-sm">
                      <span className="text-2xl">{stat.icon}</span>
                      <span className="text-2xl font-black text-white">{stat.value}</span>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Domain preview pills */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-2 mb-10"
                >
                  {SPECIALTY_DOMAINS.map(d => (
                    <span
                      key={d.id}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-xs text-slate-400 font-medium"
                    >
                      {d.icon} {d.name}
                    </span>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <button
                    onClick={() => setView('selector')}
                    className="group relative px-10 py-4 bg-indigo-500 hover:bg-indigo-400 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/25 transition-all flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Search className="w-5 h-5" />
                    Explorer les Spécialités
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => goToDashboard('subjects')}
                    className="px-8 py-4 rounded-2xl font-bold text-base border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    Choisir mes Matières
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ─────────────────── SPECIALTY SELECTOR ─────────────────── */}
          {view === 'selector' && (
            <motion.div
              key="selector"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              className="flex-1 flex flex-col"
            >
              {/* Top bar */}
              <div className="sticky top-0 z-20 bg-[#0f1117]/90 backdrop-blur-xl border-b border-white/8 px-6 py-4 flex items-center gap-4">
                <button
                  onClick={() => setView('landing')}
                  className="p-2 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex-1">
                  <h2 className="text-base font-bold text-white">Choisissez votre Spécialité</h2>
                  <p className="text-xs text-slate-500 hidden sm:block">
                    Parcourez {UNIVERSITY_SPECIALTIES.length}+ spécialités dans les universités du monde entier
                  </p>
                </div>
                {selectedSpecialty && (
                  <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-500/20 border border-indigo-500/30">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-indigo-300 max-w-[150px] truncate">{selectedSpecialty.name}</span>
                    </div>
                    <button
                      onClick={() => goToDashboard('subjects')}
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-500/20"
                    >
                      <Sparkles className="w-4 h-4" />
                      Voir mes Matières
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Profile quick-set */}
              <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <UserCircle className="w-4 h-4" />
                  Profil rapide :
                </div>
                <div className="flex gap-2">
                  {(['PEI5', 'DP1'] as const).map(grade => (
                    <button
                      key={grade}
                      onClick={() => setProfile(p => ({ ...p, grade }))}
                      className={cn(
                        'px-3 py-1.5 rounded-lg text-xs font-bold border transition-all',
                        profile.grade === grade
                          ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      )}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
                <div className="flex-1 min-w-0 max-w-xs">
                  <input
                    type="text"
                    placeholder="Objectif de carrière (ex: Médecin, Ingénieur…)"
                    value={profile.careerGoal}
                    onChange={e => setProfile(p => ({ ...p, careerGoal: e.target.value }))}
                    className="dark-input w-full px-3 py-1.5 rounded-lg text-xs"
                  />
                </div>
                {!selectedSpecialty && (
                  <button
                    onClick={() => goToDashboard('subjects')}
                    className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white text-xs font-medium transition-all"
                  >
                    Passer cette étape →
                  </button>
                )}
              </div>

              {/* Main selector */}
              <div className="flex-1 p-6 overflow-y-auto">
                <SpecialtySelector
                  selectedSpecialtyId={profile.selectedSpecialtyId}
                  selectedCountryId={profile.selectedCountryId}
                  selectedUniversityId={profile.selectedUniversityId}
                  onSelectSpecialty={id => {
                    const spec = UNIVERSITY_SPECIALTIES.find(s => s.id === id);
                    const uni = spec ? UNIVERSITIES.find(u => u.id === spec.universityId) : undefined;
                    setProfile(p => ({
                      ...p,
                      selectedSpecialtyId: id || undefined,
                      selectedUniversityId: uni?.id,
                      selectedCountryId: uni?.countryId,
                    }));
                  }}
                  onSelectCountry={id => setProfile(p => ({
                    ...p, selectedCountryId: id || undefined,
                    selectedUniversityId: undefined, selectedSpecialtyId: undefined
                  }))}
                  onSelectUniversity={id => setProfile(p => ({
                    ...p, selectedUniversityId: id || undefined, selectedSpecialtyId: undefined
                  }))}
                />
              </div>

              {/* Bottom action */}
              {selectedSpecialty && (
                <div className="sticky bottom-0 z-20 bg-[#0f1117]/95 backdrop-blur-xl border-t border-white/8 px-6 py-4">
                  <div className="max-w-4xl mx-auto flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-500 font-medium">Spécialité sélectionnée</div>
                      <div className="text-sm font-bold text-white truncate">{selectedSpecialty.name}</div>
                      <div className="text-xs text-slate-400 truncate">
                        {selectedCountry?.flag} {UNIVERSITIES.find(u => u.id === selectedSpecialty.universityId)?.name}
                        {' · '}Score min : <span className="text-amber-300 font-bold">{selectedSpecialty.minScore}/45</span>
                      </div>
                    </div>
                    <button
                      onClick={() => goToDashboard('subjects')}
                      className="flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
                    >
                      <Sparkles className="w-4 h-4" />
                      Voir mes Matières Recommandées
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* ─────────────────── DASHBOARD ─────────────────── */}
          {view === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col"
            >
              {/* Top navigation bar */}
              <header className="sticky top-0 z-30 bg-[#0f1117]/95 backdrop-blur-xl border-b border-white/8">
                <div className="px-4 md:px-6 py-3 flex items-center gap-4">
                  {/* Back + Logo */}
                  <button
                    onClick={() => setView('landing')}
                    className="p-2 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 text-slate-400 hover:text-white transition-all shrink-0"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white overflow-hidden border-2 border-indigo-500/50 flex items-center justify-center">
                      <img
                        src="https://lh3.googleusercontent.com/d/1gjzWKHQxmAjA7wWE_2Mv8TGfOdqiHLlp"
                        alt="Alkawthar"
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                        onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-sm font-bold text-white leading-tight">Alkawthar IB PathFinder</div>
                      <div className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wider">Orientation Mondiale</div>
                    </div>
                  </div>

                  {/* Tab navigation – desktop */}
                  <nav className="hidden md:flex items-center gap-1 ml-4 flex-1 overflow-x-auto">
                    {TAB_LIST.map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all',
                          activeTab === tab.id
                            ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        )}
                      >
                        {tab.icon}
                        {tab.label}
                        {tab.badge && (
                          <span className={cn(
                            'px-1.5 py-0.5 rounded-full text-[9px] font-black',
                            tab.badge === '6/6'
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-white/10 text-slate-300'
                          )}>
                            {tab.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </nav>

                  {/* Mobile menu button */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden ml-auto p-2 rounded-xl bg-white/5 border border-white/8 text-slate-400"
                  >
                    <Menu className="w-5 h-5" />
                  </button>

                  {/* Profile badge */}
                  <div className="hidden md:flex items-center gap-2 ml-auto shrink-0">
                    {selectedSpecialty && (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                        <span className="text-sm">{SPECIALTY_DOMAINS.find(d => d.id === selectedSpecialty.domain)?.icon}</span>
                        <span className="text-xs font-semibold text-slate-300 max-w-[120px] truncate">{selectedSpecialty.name}</span>
                      </div>
                    )}
                    <div className="px-3 py-1.5 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-xs font-bold text-indigo-300">
                      {profile.grade}
                    </div>
                  </div>
                </div>

                {/* Mobile nav dropdown */}
                <AnimatePresence>
                  {mobileMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="md:hidden overflow-hidden border-t border-white/8 bg-[#0f1117]"
                    >
                      <div className="flex flex-col gap-1 p-3">
                        {TAB_LIST.map(tab => (
                          <button
                            key={tab.id}
                            onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }}
                            className={cn(
                              'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-left transition-all',
                              activeTab === tab.id
                                ? 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-300'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                            )}
                          >
                            <span className="text-xl">{tab.icon}</span>
                            {tab.label}
                            {tab.badge && (
                              <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-black bg-white/10 text-slate-300">
                                {tab.badge}
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </header>

              {/* Progress steps bar */}
              <div className="px-4 md:px-6 py-3 flex items-center gap-3 bg-white/[0.02] border-b border-white/5 overflow-x-auto">
                {STEPS.map((step, idx) => {
                  const isDone =
                    (step.id === 'specialty' && !!profile.selectedSpecialtyId) ||
                    (step.id === 'subjects' && profile.selectedSubjects.length === 6) ||
                    (step.id === 'university' && false);
                  const isCurrent = activeTab === step.tab;
                  return (
                    <React.Fragment key={step.id}>
                      <button
                        onClick={() => setActiveTab(step.tab)}
                        className={cn(
                          'flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border shrink-0',
                          isCurrent ? 'step-active text-indigo-300' :
                          isDone ? 'step-done text-emerald-300' :
                          'step-pending text-slate-500 hover:text-slate-300'
                        )}
                      >
                        <span>{step.icon}</span>
                        <span>{step.label}</span>
                        {isDone && <CheckCircle2 className="w-3 h-3" />}
                      </button>
                      {idx < STEPS.length - 1 && (
                        <ChevronRight className="w-3 h-3 text-slate-700 shrink-0" />
                      )}
                    </React.Fragment>
                  );
                })}

                {/* Career goal mini input */}
                <div className="ml-auto shrink-0 hidden sm:flex items-center gap-2">
                  <span className="text-xs text-slate-600 font-medium whitespace-nowrap">Objectif :</span>
                  <input
                    type="text"
                    placeholder="Carrière visée…"
                    value={profile.careerGoal}
                    onChange={e => setProfile(p => ({ ...p, careerGoal: e.target.value }))}
                    className="dark-input px-3 py-1.5 rounded-lg text-xs w-40"
                  />
                </div>
              </div>

              {/* Content area */}
              <main className="flex-1 overflow-y-auto">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
                  <AnimatePresence mode="wait">
                    {activeTab === 'specialty' && (
                      <motion.div
                        key="specialty"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                          <div>
                            <h2 className="text-xl font-black text-white">Choisissez votre Spécialité</h2>
                            <p className="text-sm text-slate-500 mt-0.5">
                              {UNIVERSITY_SPECIALTIES.length} spécialités · {UNIVERSITIES.length} universités · {COUNTRIES.length} pays
                            </p>
                          </div>
                          {profile.selectedSpecialtyId && (
                            <button
                              onClick={() => setActiveTab('subjects')}
                              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-500/20"
                            >
                              <Sparkles className="w-4 h-4" />
                              Construire mes Matières
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                        <SpecialtySelector
                          selectedSpecialtyId={profile.selectedSpecialtyId}
                          selectedCountryId={profile.selectedCountryId}
                          selectedUniversityId={profile.selectedUniversityId}
                          onSelectSpecialty={id => {
                            const spec = UNIVERSITY_SPECIALTIES.find(s => s.id === id);
                            const uni = spec ? UNIVERSITIES.find(u => u.id === spec.universityId) : undefined;
                            setProfile(p => ({
                              ...p,
                              selectedSpecialtyId: id || undefined,
                              selectedUniversityId: uni?.id,
                              selectedCountryId: uni?.countryId,
                            }));
                          }}
                          onSelectCountry={id => setProfile(p => ({
                            ...p, selectedCountryId: id || undefined,
                            selectedUniversityId: undefined, selectedSpecialtyId: undefined
                          }))}
                          onSelectUniversity={id => setProfile(p => ({
                            ...p, selectedUniversityId: id || undefined, selectedSpecialtyId: undefined
                          }))}
                        />
                      </motion.div>
                    )}

                    {activeTab === 'subjects' && (
                      <motion.div
                        key="subjects"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                          <div>
                            <h2 className="text-xl font-black text-white">Choisissez vos 6 Matières IB</h2>
                            <p className="text-sm text-slate-500 mt-0.5">
                              3 Niveau Supérieur (HL) + 3 Niveau Moyen (SL)
                              {selectedSpecialty && (
                                <> · Pour <span className="text-indigo-400 font-semibold">{selectedSpecialty.name}</span></>
                              )}
                            </p>
                          </div>
                          {profile.selectedSubjects.length === 6 && (
                            <button
                              onClick={() => setActiveTab('university')}
                              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-500/20"
                            >
                              Voir les Résultats
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                        <IBWizard
                          selectedSubjects={profile.selectedSubjects}
                          selectedSpecialtyId={profile.selectedSpecialtyId}
                          onUpdate={updateSubjects}
                        />
                      </motion.div>
                    )}

                    {activeTab === 'university' && (
                      <motion.div
                        key="university"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                          <div>
                            <h2 className="text-xl font-black text-white">Résultats & Orientation</h2>
                            <p className="text-sm text-slate-500 mt-0.5">
                              Spécialités compatibles et analyse de votre profil IB
                            </p>
                          </div>
                        </div>
                        <UniversityOrientation
                          selectedSubjects={profile.selectedSubjects}
                          careerGoal={profile.careerGoal}
                          selectedSpecialtyId={profile.selectedSpecialtyId}
                        />
                      </motion.div>
                    )}

                    {activeTab === 'soutien' && (
                      <motion.div
                        key="soutien"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <SoutienScolaire />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </main>

              {/* Footer */}
              <footer className="border-t border-white/5 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] text-slate-600 font-medium uppercase tracking-wider">
                <div>© 2025 Alkawthar International School — Service d'Orientation IB</div>
                <div>Accrédité par l'International Baccalaureate Organisation</div>
              </footer>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
