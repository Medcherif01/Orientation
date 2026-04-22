import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { SelectedSubject, UniversitySpecialty } from '../types';
import { SUBJECTS, UNIVERSITY_SPECIALTIES, UNIVERSITIES, COUNTRIES, SPECIALTY_DOMAINS } from '../constants';
import { cn } from '../lib/utils';
import {
  Sparkles, GraduationCap, Globe, BookOpen, Loader2,
  Trophy, FileText, CheckCircle2, AlertTriangle, ExternalLink,
  Target, Award, TrendingUp, ChevronDown, ChevronUp, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface UniversityOrientationProps {
  selectedSubjects: SelectedSubject[];
  careerGoal: string;
  selectedSpecialtyId?: string;
}

const DOMAIN_ICONS: Record<string, string> = {
  medical: '🏥', engineering: '⚙️', computer: '💻', business: '📈',
  law: '⚖️', architecture: '🏛️', science: '🔬', humanities: '📚',
  arts: '🎨', environment: '🌱',
};
const DOMAIN_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  medical:      { bg: 'bg-rose-500/10',   border: 'border-rose-500/30',   text: 'text-rose-300' },
  engineering:  { bg: 'bg-blue-500/10',   border: 'border-blue-500/30',   text: 'text-blue-300' },
  computer:     { bg: 'bg-violet-500/10', border: 'border-violet-500/30', text: 'text-violet-300' },
  business:     { bg: 'bg-amber-500/10',  border: 'border-amber-500/30',  text: 'text-amber-300' },
  law:          { bg: 'bg-slate-500/10',  border: 'border-slate-500/30',  text: 'text-slate-300' },
  architecture: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-300' },
  science:      { bg: 'bg-cyan-500/10',   border: 'border-cyan-500/30',   text: 'text-cyan-300' },
  humanities:   { bg: 'bg-emerald-500/10',border: 'border-emerald-500/30',text: 'text-emerald-300' },
  arts:         { bg: 'bg-pink-500/10',   border: 'border-pink-500/30',   text: 'text-pink-300' },
  environment:  { bg: 'bg-green-500/10',  border: 'border-green-500/30',  text: 'text-green-300' },
};

function ScoreMeter({ score, max = 45 }: { score: number; max?: number }) {
  const pct = (score / max) * 100;
  const color = score >= 38 ? 'bg-red-400' : score >= 34 ? 'bg-amber-400' : 'bg-emerald-400';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div className={cn('h-full rounded-full transition-all duration-700', color)} style={{ width: `${pct}%` }} />
      </div>
      <span className="tag-score px-2 py-0.5 rounded-lg text-xs font-black shrink-0">
        {score}/45
      </span>
    </div>
  );
}

function SpecialtyCard({ spec, isPrimary }: { spec: UniversitySpecialty; isPrimary?: boolean }) {
  const [expanded, setExpanded] = useState(isPrimary);
  const uni = UNIVERSITIES.find(u => u.id === spec.universityId);
  const country = COUNTRIES.find(c => c.id === uni?.countryId);
  const colors = DOMAIN_COLORS[spec.domain] || DOMAIN_COLORS.science;

  return (
    <motion.div
      layout
      className={cn(
        'rounded-xl border overflow-hidden transition-all',
        isPrimary ? `${colors.bg} ${colors.border} shadow-lg` : 'bg-white/[0.03] border-white/8'
      )}
    >
      {/* Card header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start gap-4 p-4 text-left"
      >
        <div className={cn('text-2xl shrink-0 mt-0.5', isPrimary ? '' : 'opacity-60')}>
          {DOMAIN_ICONS[spec.domain] || '🎓'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              {isPrimary && (
                <div className={cn('text-[9px] font-bold uppercase tracking-widest mb-1', colors.text)}>
                  ⭐ Votre spécialité cible
                </div>
              )}
              <h4 className="font-bold text-sm text-white leading-snug">{spec.name}</h4>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="text-[10px] text-slate-400">{country?.flag} {uni?.name}</span>
                {uni?.ranking && uni.ranking > 0 && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 border border-white/8 text-slate-400 font-semibold">
                    #{uni.ranking} QS
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <ScoreMeter score={spec.minScore} />
              {expanded ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </div>
          </div>
        </div>
      </button>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 flex flex-col gap-4 border-t border-white/5 pt-4">
              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed">{spec.description}</p>

              {/* IA/EA details */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/8">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Exigences IA / Examens Finaux</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{spec.iaEaClarification}</p>
              </div>

              {/* Required HL */}
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Matières HL Requises</div>
                <div className="flex flex-wrap gap-2">
                  {spec.requiredHL.map(hlId => {
                    const sub = SUBJECTS.find(s => s.id === hlId);
                    return (
                      <span key={hlId} className="tag-hl px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        {sub?.name || hlId} (HL)
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Career paths */}
              {spec.careerPaths && spec.careerPaths.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Débouchés Professionnels</div>
                  <div className="flex flex-wrap gap-2">
                    {spec.careerPaths.map(cp => (
                      <span key={cp} className="px-2 py-1 rounded-lg bg-white/5 border border-white/8 text-xs text-slate-300 font-medium">
                        {cp}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Min score per HL */}
              {spec.minScorePerHL && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <Target className="w-4 h-4 text-amber-400 shrink-0" />
                  <p className="text-xs text-amber-300 font-medium">
                    Note minimale par matière HL : <span className="font-black">{spec.minScorePerHL}/7</span>
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export const UniversityOrientation: React.FC<UniversityOrientationProps> = ({
  selectedSubjects,
  careerGoal,
  selectedSpecialtyId,
}) => {
  const [aiAdvice, setAiAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const profileSpecialty = UNIVERSITY_SPECIALTIES.find(s => s.id === selectedSpecialtyId);

  const matchingSpecialties = UNIVERSITY_SPECIALTIES.filter(spec =>
    spec.id !== selectedSpecialtyId &&
    spec.recommendedSubjects.some(recId =>
      selectedSubjects.some(sel => sel.subjectId === recId)
    )
  ).sort((a, b) => {
    // Sort by how many recommended subjects match
    const aMatch = a.recommendedSubjects.filter(id => selectedSubjects.some(s => s.subjectId === id)).length;
    const bMatch = b.recommendedSubjects.filter(id => selectedSubjects.some(s => s.subjectId === id)).length;
    return bMatch - aMatch;
  }).slice(0, 8);

  // HL subjects analysis
  const hlSubjects = selectedSubjects.filter(s => s.level === 'HL');
  const hlMissingForTarget = profileSpecialty
    ? profileSpecialty.requiredHL.filter(id => !selectedSubjects.some(s => s.subjectId === id && s.level === 'HL'))
    : [];

  const getAIAdvice = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
      const subjectNames = selectedSubjects.map(s => {
        const sub = SUBJECTS.find(sub => sub.id === s.subjectId);
        return `${sub?.name} (${s.level})`;
      }).join(', ');
      const specialty = profileSpecialty;
      const prompt = `En tant que conseiller d'orientation IB DP expert pour les Écoles Internationales Alkawthar, analyse cette combinaison :
Matières IB choisies : ${subjectNames || 'Non spécifiées'}
Spécialité universitaire visée : ${specialty?.name || 'Non spécifiée'}
Université cible : ${specialty ? UNIVERSITIES.find(u => u.id === specialty.universityId)?.name : 'Non spécifiée'}
Score minimum requis : ${specialty?.minScore || 'N/A'}/45
Objectif de carrière : ${careerGoal || 'Non spécifié'}

Fournis une analyse structurée en français :
1. **Pertinence de la combinaison** : évalue si les matières correspondent à la spécialité
2. **Points forts** : identifie les matières bien choisies  
3. **Points d'amélioration** : suggère des ajustements si nécessaire
4. **Score cible** : donne des objectifs réalistes par matière HL (note /7)
5. **Conseils pratiques** : conseils concrets pour maximiser les chances d'admission
6. **Universités alternatives** : suggère 2-3 universités mondiales supplémentaires compatibles

Réponds de manière encourageante, professionnelle et précise. Utilise des emojis pour structurer.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-04-17",
        contents: prompt,
      });
      setAiAdvice(response.text || "Désolé, je n'ai pas pu générer de conseils pour le moment.");
    } catch (error) {
      console.error("AI Error:", error);
      setAiAdvice("❌ Erreur lors de la connexion au conseiller IA. Vérifiez votre clé API et réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">

      {/* Summary banner */}
      {profileSpecialty && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 flex items-center gap-4 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/25">
            <Award className="w-8 h-8 text-indigo-400 shrink-0" />
            <div>
              <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-0.5">Spécialité cible</div>
              <div className="text-white font-bold">{profileSpecialty.name}</div>
              <div className="text-slate-400 text-xs mt-0.5">
                {COUNTRIES.find(c => c.id === UNIVERSITIES.find(u => u.id === profileSpecialty.universityId)?.countryId)?.flag}{' '}
                {UNIVERSITIES.find(u => u.id === profileSpecialty.universityId)?.name}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25">
            <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Score IB Requis</div>
            <div className="text-4xl font-black text-amber-300">{profileSpecialty.minScore}</div>
            <div className="text-slate-500 text-xs">/45 points</div>
          </div>
        </div>
      )}

      {/* HL Subjects alert */}
      {hlMissingForTarget.length > 0 && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold text-red-300 mb-1">Matières HL manquantes pour votre cible</div>
            <div className="flex flex-wrap gap-2">
              {hlMissingForTarget.map(id => {
                const sub = SUBJECTS.find(s => s.id === id);
                return (
                  <span key={id} className="px-2 py-1 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold">
                    {sub?.name || id} → HL requis
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left: Specialties list */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-indigo-400" />
            <h3 className="text-base font-bold text-white">Spécialités & Exigences</h3>
          </div>

          {profileSpecialty && (
            <SpecialtyCard spec={profileSpecialty} isPrimary />
          )}

          {matchingSpecialties.length > 0 && (
            <>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">
                Autres spécialités compatibles
              </div>
              <div className="flex flex-col gap-3">
                {matchingSpecialties.map(spec => (
                  <SpecialtyCard key={spec.id} spec={spec} />
                ))}
              </div>
            </>
          )}

          {!profileSpecialty && matchingSpecialties.length === 0 && selectedSubjects.length > 0 && (
            <div className="text-center py-10 text-slate-500">
              <div className="text-3xl mb-3">🔍</div>
              <p className="font-semibold text-sm">Aucune spécialité trouvée</p>
              <p className="text-xs mt-1">Ajoutez plus de matières ou choisissez une spécialité dans l'onglet précédent</p>
            </div>
          )}

          {selectedSubjects.length === 0 && (
            <div className="text-center py-10 text-slate-500">
              <div className="text-3xl mb-3">📚</div>
              <p className="font-semibold text-sm">Choisissez vos matières d'abord</p>
              <p className="text-xs mt-1">Allez dans l'onglet "Choix des Matières" pour sélectionner vos 6 matières IB</p>
            </div>
          )}
        </div>

        {/* Right: AI Advisor */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">Conseiller IA</h3>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/20 to-violet-600/10 border border-indigo-500/25 rounded-xl p-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-indigo-300" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Alkawthar AI Advisor</div>
                <div className="text-[10px] text-slate-400">Powered by Google Gemini</div>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Obtenez une analyse personnalisée de votre combinaison de matières et des conseils détaillés pour atteindre votre objectif universitaire.
            </p>
            <button
              onClick={getAIAdvice}
              disabled={loading || selectedSubjects.length < 6}
              className="w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/20"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Analyse en cours...</>
              ) : (
                <><Sparkles className="w-4 h-4" /> {selectedSubjects.length < 6 ? `Sélectionnez 6 matières (${selectedSubjects.length}/6)` : 'Analyser mon profil'}</>
              )}
            </button>
          </div>

          {/* HL breakdown */}
          {hlSubjects.length > 0 && (
            <div className="bg-white/[0.03] border border-white/8 rounded-xl p-4 flex flex-col gap-3">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Vos Matières HL</div>
              {hlSubjects.map(sel => {
                const sub = SUBJECTS.find(s => s.id === sel.subjectId);
                const isRequired = profileSpecialty?.requiredHL.includes(sel.subjectId);
                return (
                  <div key={sel.subjectId} className="flex items-center gap-3">
                    {isRequired
                      ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      : <div className="w-4 h-4 rounded-full border border-white/20 shrink-0" />
                    }
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-slate-300 font-medium truncate">{sub?.name}</div>
                      {isRequired && <div className="text-[9px] text-emerald-400 font-bold">Requis pour votre cible ✓</div>}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium shrink-0">
                      Visez <span className="text-amber-300 font-bold">{profileSpecialty?.minScorePerHL || 6}/7</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Score guide */}
          <div className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Guide de Score IB</div>
            <div className="space-y-2">
              {[
                { range: '40-45', label: 'MIT, Oxford, Cambridge', color: 'text-red-300', bar: 'bg-red-400', pct: 90 },
                { range: '36-39', label: 'ETH, Imperial, Sciences Po', color: 'text-amber-300', bar: 'bg-amber-400', pct: 70 },
                { range: '33-35', label: 'McGill, UBC, IE Madrid', color: 'text-yellow-300', bar: 'bg-yellow-400', pct: 55 },
                { range: '30-32', label: 'Universités nationales top', color: 'text-emerald-300', bar: 'bg-emerald-400', pct: 40 },
              ].map(item => (
                <div key={item.range} className="flex items-center gap-3">
                  <span className={cn('text-[10px] font-bold w-12 shrink-0', item.color)}>{item.range}</span>
                  <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className={cn('h-full rounded-full', item.bar)} style={{ width: `${item.pct}%` }} />
                  </div>
                  <span className="text-[9px] text-slate-500 shrink-0 max-w-[100px] truncate">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Advice result */}
      <AnimatePresence>
        {aiAdvice && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-gradient-to-br from-indigo-500/5 to-violet-500/5 border border-indigo-500/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/8">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/30 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-indigo-300" />
              </div>
              <h3 className="text-base font-bold text-white">Analyse Personnalisée de votre Parcours</h3>
              <button
                onClick={() => setAiAdvice(null)}
                className="ml-auto text-slate-500 hover:text-slate-300 text-sm font-bold transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap font-medium">
              {aiAdvice}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
