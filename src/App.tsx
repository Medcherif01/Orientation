import React, { useState } from 'react';
import { StudentProfile, SelectedSubject } from './types';
import { IBWizard } from './components/IBWizard';
import { UniversityOrientation } from './components/UniversityOrientation';
import { cn } from './lib/utils';
import { COUNTRIES, UNIVERSITIES, UNIVERSITY_SPECIALTIES, SUBJECTS } from './constants';
import { SoutienScolaire } from './components/SoutienScolaire';
import { 
  Compass, 
  GraduationCap, 
  ChevronRight, 
  School, 
  UserCircle, 
  LayoutDashboard, 
  BookOpen, 
  ArrowRight,
  Sparkles,
  ChevronLeft,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type View = 'landing' | 'profile' | 'dashboard';

export default function App() {
  const [view, setView] = useState<View>('landing');
  const [profile, setProfile] = useState<StudentProfile>({
    grade: 'PEI5',
    status: 'current',
    careerGoal: '',
    selectedSubjects: []
  });

  const updateSubjects = (subjects: SelectedSubject[]) => {
    setProfile(prev => ({ ...prev, selectedSubjects: subjects }));
  };

  const proposeSubjects = () => {
    if (!profile.selectedSpecialtyId) return;
    const specialty = UNIVERSITY_SPECIALTIES.find(s => s.id === profile.selectedSpecialtyId);
    if (!specialty) return;

    const newSubjects: SelectedSubject[] = specialty.recommendedSubjects.map(id => ({
      subjectId: id,
      level: specialty.requiredHL.includes(id) ? 'HL' : 'SL'
    }));

    // Add required core subjects if not present (Group 1, 2, 3, 4, 5)
    const coreGroups = [1, 2, 3, 4, 5];
    coreGroups.forEach(groupId => {
      const hasGroup = newSubjects.some(s => SUBJECTS.find(sub => sub.id === s.subjectId)?.group === groupId);
      if (!hasGroup) {
        // For Group 1, prioritize French A
        let defaultSub;
        if (groupId === 1) {
          defaultSub = SUBJECTS.find(sub => sub.id === 'fra-a-lit');
        } else {
          defaultSub = SUBJECTS.find(sub => sub.group === groupId);
        }
        
        if (defaultSub) {
          newSubjects.push({ subjectId: defaultSub.id, level: 'SL' });
        }
      }
    });

    // Ensure total 6 subjects
    while (newSubjects.length < 6) {
      const unusedSub = SUBJECTS.find(sub => !newSubjects.some(s => s.subjectId === sub.id));
      if (unusedSub) newSubjects.push({ subjectId: unusedSub.id, level: 'SL' });
      else break;
    }

    setProfile(prev => ({ ...prev, selectedSubjects: newSubjects.slice(0, 6) }));
  };

  const filteredUniversities = UNIVERSITIES.filter(u => u.countryId === profile.selectedCountryId);
  const filteredSpecialties = UNIVERSITY_SPECIALTIES.filter(s => s.universityId === profile.selectedUniversityId);

  const [activeTab, setActiveTab] = useState<'subjects' | 'university' | 'soutien'>('subjects');

  return (
    <div className="min-h-screen bg-bg-base font-sans text-text-main p-6 flex flex-col gap-6">
      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative flex-1 flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="max-w-4xl w-full text-center space-y-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-32 h-32 bg-white rounded-full p-2 shadow-lg border-4 border-brand-primary flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://api.dicebear.com/7.x/initials/svg?seed=AK&backgroundColor=1a365d&textColor=ffffff" 
                    alt="Logo Alkawthar" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg border border-border-base shadow-sm text-brand-primary font-bold text-sm">
                  <School className="w-4 h-4" />
                  Écoles Internationales Alkawthar
                </div>
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-black tracking-tight text-brand-primary leading-[1.1] uppercase"
              >
                Tracez Votre Chemin <br />
                <span className="text-brand-secondary">Vers l'Excellence IB</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
              >
                Un outil dédié aux élèves de PEI5 et DP1 pour choisir leurs matières, 
                optimiser leur combinaison et préparer leur orientation universitaire mondiale.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <button
                  onClick={() => setView('profile')}
                  className="group relative px-8 py-4 bg-brand-primary text-white rounded-lg font-bold text-lg shadow-lg hover:bg-brand-primary/90 transition-all flex items-center gap-2"
                >
                  Commencer Mon Parcours
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {view === 'profile' && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex items-center justify-center py-12"
          >
            <div className="max-w-2xl w-full bg-card-bg rounded-xl shadow-md border border-border-base p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8 border-b-2 border-brand-primary pb-4">
                <div className="p-3 bg-brand-primary/10 rounded-lg">
                  <UserCircle className="w-8 h-8 text-brand-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-brand-primary uppercase tracking-wider">Votre Profil</h2>
                  <p className="text-sm text-brand-secondary font-semibold">Personnalisez votre expérience</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">Classe Actuelle</label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['PEI5', 'DP1'] as const).map(grade => (
                        <button
                          key={grade}
                          onClick={() => setProfile(p => ({ ...p, grade }))}
                          className={cn(
                            "py-3 rounded-lg font-bold text-xs border-2 transition-all",
                            profile.grade === grade
                              ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                              : "border-border-base bg-slate-50 text-slate-500 hover:border-slate-300"
                          )}
                        >
                          {grade}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">Statut à Alkawthar</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setProfile(p => ({ ...p, status: 'current' }))}
                        className={cn(
                          "py-3 rounded-lg font-bold text-xs border-2 transition-all",
                          profile.status === 'current'
                            ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                            : "border-border-base bg-slate-50 text-slate-500 hover:border-slate-300"
                        )}
                      >
                        Ancien
                      </button>
                      <button
                        onClick={() => setProfile(p => ({ ...p, status: 'new' }))}
                        className={cn(
                          "py-3 rounded-lg font-bold text-xs border-2 transition-all",
                          profile.status === 'new'
                            ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                            : "border-border-base bg-slate-50 text-slate-500 hover:border-slate-300"
                        )}
                      >
                        Nouveau
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">Orientation Souhaitée</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select
                      value={profile.selectedCountryId || ''}
                      onChange={(e) => setProfile(p => ({ ...p, selectedCountryId: e.target.value, selectedUniversityId: undefined, selectedSpecialtyId: undefined }))}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-border-base focus:border-brand-primary outline-none text-sm font-medium"
                    >
                      <option value="">Choisir un Pays</option>
                      {COUNTRIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>

                    <select
                      value={profile.selectedUniversityId || ''}
                      disabled={!profile.selectedCountryId}
                      onChange={(e) => setProfile(p => ({ ...p, selectedUniversityId: e.target.value, selectedSpecialtyId: undefined }))}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-border-base focus:border-brand-primary outline-none text-sm font-medium disabled:opacity-50"
                    >
                      <option value="">Choisir une Université</option>
                      {filteredUniversities.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                    </select>

                    <select
                      value={profile.selectedSpecialtyId || ''}
                      disabled={!profile.selectedUniversityId}
                      onChange={(e) => setProfile(p => ({ ...p, selectedSpecialtyId: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-border-base focus:border-brand-primary outline-none text-sm font-medium disabled:opacity-50"
                    >
                      <option value="">Choisir une Spécialité</option>
                      {filteredSpecialties.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">Objectif de Carrière (Libre)</label>
                  <input
                    type="text"
                    placeholder="Ex: Neurochirurgien, Architecte..."
                    value={profile.careerGoal}
                    onChange={(e) => setProfile(p => ({ ...p, careerGoal: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-border-base focus:border-brand-primary focus:bg-white transition-all outline-none text-sm font-medium"
                  />
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  {profile.selectedSpecialtyId && (
                    <button
                      onClick={proposeSubjects}
                      className="w-full py-3 bg-brand-secondary/10 text-brand-secondary rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-brand-secondary/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      Proposer les matières idéales
                    </button>
                  )}
                  <button
                    onClick={() => setView('dashboard')}
                    disabled={!profile.careerGoal && !profile.selectedSpecialtyId}
                    className="w-full py-4 bg-brand-primary text-white rounded-lg font-bold text-lg shadow-lg hover:bg-brand-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Accéder au Dashboard
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {view === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col gap-6"
          >
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-brand-primary pb-3 gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setView('profile')}
                    className="p-1 hover:bg-slate-100 rounded-md transition-all text-slate-400 hover:text-brand-primary"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div className="w-12 h-12 bg-white rounded-full p-1 shadow-sm border-2 border-brand-primary flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://api.dicebear.com/7.x/initials/svg?seed=AK&backgroundColor=1a365d&textColor=ffffff" 
                      alt="Logo Alkawthar" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-black text-brand-primary tracking-tight uppercase">Alkawthar International School</h1>
                </div>
                <p className="text-sm text-brand-secondary font-bold ml-24">Portail d'Orientation IB Diploma Programme</p>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="bg-brand-primary text-white px-3 py-1 rounded text-xs font-bold uppercase">
                  CLASSE {profile.grade} → DP 1
                </div>
                <div className="text-[10px] text-slate-500 mt-1 font-bold uppercase tracking-wider">
                  Objectif: {profile.careerGoal}
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col gap-6">
              {/* Tabs */}
              <div className="flex flex-wrap p-1 bg-slate-200/50 rounded-lg w-fit gap-1">
                <button
                  onClick={() => setActiveTab('subjects')}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2 rounded-md font-bold text-xs transition-all uppercase tracking-wider",
                    activeTab === 'subjects' 
                      ? "bg-brand-primary text-white shadow-sm" 
                      : "text-slate-500 hover:text-brand-primary"
                  )}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Choix des Matières
                </button>
                <button
                  onClick={() => setActiveTab('university')}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2 rounded-md font-bold text-xs transition-all uppercase tracking-wider",
                    activeTab === 'university' 
                      ? "bg-brand-primary text-white shadow-sm" 
                      : "text-slate-500 hover:text-brand-primary"
                  )}
                >
                  <GraduationCap className="w-4 h-4" />
                  Orientation Univ.
                </button>
                <button
                  onClick={() => setActiveTab('soutien')}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2 rounded-md font-bold text-xs transition-all uppercase tracking-wider",
                    activeTab === 'soutien' 
                      ? "bg-brand-primary text-white shadow-sm" 
                      : "text-slate-500 hover:text-brand-primary"
                  )}
                >
                  <Info className="w-4 h-4" />
                  Soutien Scolaire
                </button>
              </div>

              <div className="flex-1">
                {activeTab === 'subjects' ? (
                  <IBWizard 
                    selectedSubjects={profile.selectedSubjects} 
                    onUpdate={updateSubjects} 
                  />
                ) : activeTab === 'university' ? (
                  <UniversityOrientation 
                    selectedSubjects={profile.selectedSubjects}
                    careerGoal={profile.careerGoal}
                    selectedSpecialtyId={profile.selectedSpecialtyId}
                  />
                ) : (
                  <SoutienScolaire />
                )}
              </div>
            </main>

            {/* Footer */}
            <footer className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest border-t border-border-base pt-4">
              <div>© 2024 Alkawthar International School - Service d'Orientation IB</div>
              <div>Accrédité par l'International Baccalaureate Organisation</div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
