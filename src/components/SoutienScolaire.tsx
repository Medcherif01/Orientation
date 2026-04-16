import React from 'react';
import { SOUTIEN_SCOLAIRE_CONTENT } from '../constants';
import { BookOpen, GraduationCap, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export const SoutienScolaire: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 py-4">
      <div className="bg-brand-primary text-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Soutien Scolaire & Orientation</h2>
        <p className="text-white/80 font-medium max-w-2xl">
          Tout ce qu'il faut savoir sur les programmes de l'IB (Baccalauréat International) pour réussir votre parcours à Alkawthar.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* PEI Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl border border-border-base shadow-sm flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 border-b border-border-base pb-4">
            <div className="p-3 bg-brand-secondary/10 rounded-xl">
              <BookOpen className="w-6 h-6 text-brand-secondary" />
            </div>
            <h3 className="text-xl font-black text-brand-primary uppercase tracking-tight">
              {SOUTIEN_SCOLAIRE_CONTENT.pei.title}
            </h3>
          </div>
          
          <p className="text-slate-600 font-medium leading-relaxed">
            {SOUTIEN_SCOLAIRE_CONTENT.pei.description}
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-brand-secondary uppercase tracking-widest">Points Clés</h4>
            <ul className="space-y-3">
              {SOUTIEN_SCOLAIRE_CONTENT.pei.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* DP Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl border border-border-base shadow-sm flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 border-b border-border-base pb-4">
            <div className="p-3 bg-brand-primary/10 rounded-xl">
              <GraduationCap className="w-6 h-6 text-brand-primary" />
            </div>
            <h3 className="text-xl font-black text-brand-primary uppercase tracking-tight">
              {SOUTIEN_SCOLAIRE_CONTENT.dp.title}
            </h3>
          </div>

          <p className="text-slate-600 font-medium leading-relaxed">
            {SOUTIEN_SCOLAIRE_CONTENT.dp.description}
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-brand-primary uppercase tracking-widest">Points Clés</h4>
            <ul className="space-y-3">
              {SOUTIEN_SCOLAIRE_CONTENT.dp.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-300 flex items-start gap-4">
        <Info className="w-6 h-6 text-slate-400 shrink-0" />
        <div>
          <h4 className="text-sm font-bold text-slate-600 uppercase mb-1">Note Importante</h4>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Le choix des matières en DP1 doit être mûrement réfléchi car il impacte directement vos options universitaires. 
            Utilisez le simulateur pour tester différentes combinaisons et consultez nos conseillers pour un accompagnement personnalisé.
          </p>
        </div>
      </div>
    </div>
  );
};
