import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { SelectedSubject, UniversitySpecialty } from '../types';
import { SUBJECTS, UNIVERSITY_SPECIALTIES } from '../constants';
import { cn } from '../lib/utils';
import { Sparkles, GraduationCap, Globe, BookOpen, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface UniversityOrientationProps {
  selectedSubjects: SelectedSubject[];
  careerGoal: string;
  selectedSpecialtyId?: string;
}

export const UniversityOrientation: React.FC<UniversityOrientationProps> = ({ selectedSubjects, careerGoal, selectedSpecialtyId }) => {
  const [aiAdvice, setAiAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getAIAdvice = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const subjectNames = selectedSubjects.map(s => {
        const sub = SUBJECTS.find(sub => sub.id === s.subjectId);
        return `${sub?.name} (${s.level})`;
      }).join(', ');

      const specialty = UNIVERSITY_SPECIALTIES.find(s => s.id === selectedSpecialtyId);

      const prompt = `
        En tant que conseiller d'orientation IB DP pour les écoles Alkawthar, analyse cette combinaison de matières :
        Matières choisies : ${subjectNames}
        Spécialité visée : ${specialty?.name || 'Non spécifiée'}
        Objectif de carrière : ${careerGoal}

        Fournis des conseils sur :
        1. La pertinence de cette combinaison pour l'objectif de carrière et la spécialité.
        2. Les universités mondiales potentielles et leurs exigences de score.
        3. Des suggestions d'ajustements si nécessaire selon les standards IB.
        
        Réponds en français, de manière encourageante et professionnelle.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      setAiAdvice(response.text || "Désolé, je n'ai pas pu générer de conseils pour le moment.");
    } catch (error) {
      console.error("Error fetching AI advice:", error);
      setAiAdvice("Erreur lors de la connexion au conseiller IA. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const profileSpecialty = UNIVERSITY_SPECIALTIES.find(s => s.id === selectedSpecialtyId);
  const matchingSpecialties = UNIVERSITY_SPECIALTIES.filter(spec => 
    spec.id !== selectedSpecialtyId &&
    spec.recommendedSubjects.some(recId => 
      selectedSubjects.some(sel => sel.subjectId === recId)
    )
  );
  const otherMatchingSpecialties = matchingSpecialties;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card-bg p-6 rounded-xl border border-border-base shadow-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-border-base pb-2">
            <GraduationCap className="w-5 h-5 text-brand-primary" />
            <h3 className="font-black text-brand-primary uppercase tracking-tight">Spécialités Correspondantes</h3>
          </div>
          <div className="space-y-4">
            {profileSpecialty && (
              <div className="p-4 rounded-lg bg-brand-primary/10 border-2 border-brand-primary shadow-sm">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-black text-brand-primary uppercase text-sm">{profileSpecialty.name} (VOTRE CHOIX)</h4>
                  <span className="font-mono text-brand-secondary font-bold text-lg">{profileSpecialty.minScore} pts</span>
                </div>
                <p className="text-[10px] text-slate-600 font-bold uppercase mb-2">{profileSpecialty.description}</p>
                <div className="flex flex-wrap gap-1">
                  {profileSpecialty.requiredHL.map(hlId => {
                    const sub = SUBJECTS.find(s => s.id === hlId);
                    return (
                      <span key={hlId} className="text-[8px] font-bold bg-brand-primary text-white px-1.5 py-0.5 rounded uppercase">
                        HL {sub?.name} Requis
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
            {otherMatchingSpecialties.length > 0 ? (
              otherMatchingSpecialties.map(spec => (
                <div key={spec.id} className="p-4 rounded-lg bg-slate-50 border border-border-base opacity-70">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-brand-primary uppercase text-sm">{spec.name}</h4>
                    <span className="font-mono text-brand-secondary font-bold text-lg">{spec.minScore} pts</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">{spec.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {spec.requiredHL.map(hlId => {
                      const sub = SUBJECTS.find(s => s.id === hlId);
                      return (
                        <span key={hlId} className="text-[8px] font-bold bg-brand-primary/60 text-white px-1.5 py-0.5 rounded uppercase">
                          HL {sub?.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : !profileSpecialty && (
              <p className="text-xs text-slate-400 italic font-bold uppercase">Aucune spécialité prédéfinie ne correspond exactement.</p>
            )}
          </div>
        </div>

        <div className="bg-brand-primary text-white p-6 rounded-xl shadow-lg flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-white/10 pb-2">
            <Sparkles className="w-5 h-5 text-white" />
            <h3 className="font-black uppercase tracking-tight">Conseiller IA Alkawthar</h3>
          </div>
          <p className="text-xs text-white/80 font-medium leading-relaxed">
            Votre combinaison actuelle est analysée pour sa compatibilité avec les standards académiques mondiaux.
          </p>
          <button
            onClick={getAIAdvice}
            disabled={loading || selectedSubjects.length < 6}
            className="mt-auto w-full py-3 bg-white text-brand-primary rounded-lg font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Globe className="w-4 h-4" />}
            {selectedSubjects.length < 6 ? "Sélectionnez 6 matières" : "Simuler Orientation"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {aiAdvice && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-card-bg p-8 rounded-xl border border-border-base shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6 border-b border-border-base pb-4">
              <BookOpen className="w-6 h-6 text-brand-primary" />
              <h3 className="text-xl font-black text-brand-primary uppercase tracking-tight">Analyse de Votre Parcours</h3>
            </div>
            <div className="prose prose-slate max-w-none text-text-main text-sm leading-relaxed whitespace-pre-wrap font-medium">
              {aiAdvice}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
