import React from 'react';
import { SOUTIEN_SCOLAIRE_CONTENT } from '../constants';
import { BookOpen, GraduationCap, Info, FileText, Trophy, Target, Mail, User, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const SoutienScolaire: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 py-2">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600/30 to-violet-600/20 border border-indigo-500/30 p-8">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="relative">
          <h2 className="text-2xl font-black text-white mb-2">Soutien Scolaire & Orientation</h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
            Tout ce qu'il faut savoir sur les programmes IB pour réussir votre parcours à Alkawthar et intégrer les meilleures universités mondiales.
          </p>
        </div>
      </div>

      {/* Contacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SOUTIEN_SCOLAIRE_CONTENT.contacts.map((contact, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/30 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <User className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{contact.role}</div>
              <div className="text-sm font-bold text-white mt-0.5">{contact.name}</div>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 hover:underline mt-1 transition-colors"
              >
                <Mail className="w-3 h-3" />
                {contact.email}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Programs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PEI */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 flex flex-col gap-5"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-white/8">
            <div className="p-2.5 bg-violet-500/20 rounded-xl border border-violet-500/30">
              <BookOpen className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{SOUTIEN_SCOLAIRE_CONTENT.pei.title}</h3>
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Programme MYP · Années 1 à 5</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            {SOUTIEN_SCOLAIRE_CONTENT.pei.description}
          </p>
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">Points Clés</h4>
            <ul className="space-y-2.5">
              {SOUTIEN_SCOLAIRE_CONTENT.pei.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* DP */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 flex flex-col gap-5"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-white/8">
            <div className="p-2.5 bg-indigo-500/20 rounded-xl border border-indigo-500/30">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{SOUTIEN_SCOLAIRE_CONTENT.dp.title}</h3>
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Programme Diplôme · DP1 & DP2</p>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            {SOUTIEN_SCOLAIRE_CONTENT.dp.description}
          </p>
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Points Clés</h4>
            <ul className="space-y-2.5">
              {SOUTIEN_SCOLAIRE_CONTENT.dp.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Evaluation cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/[0.03] border border-white/8 rounded-xl p-5">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="p-2 bg-violet-500/20 rounded-lg"><FileText className="w-4 h-4 text-violet-400" /></div>
            <h4 className="text-sm font-bold text-white">Évaluation Interne (IA)</h4>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Travaux réalisés en classe (essais, expériences, portfolios) notés par vos enseignants et modérés par l'IB.
            Comptent pour <span className="text-violet-300 font-bold">20% à 30%</span> de la note finale.
          </p>
        </div>
        <div className="bg-white/[0.03] border border-white/8 rounded-xl p-5">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="p-2 bg-amber-500/20 rounded-lg"><Trophy className="w-4 h-4 text-amber-400" /></div>
            <h4 className="text-sm font-bold text-white">Évaluation Externe (EA)</h4>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Examens finaux écrits à la fin du DP2. Corrigés par des examinateurs IB externes.
            Constituent <span className="text-amber-300 font-bold">70% à 80%</span> de votre score final.
          </p>
        </div>
        <div className="bg-white/[0.03] border border-white/8 rounded-xl p-5">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="p-2 bg-emerald-500/20 rounded-lg"><Target className="w-4 h-4 text-emerald-400" /></div>
            <h4 className="text-sm font-bold text-white">Objectif Universitaire</h4>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Les universités analysent vos notes HL spécifiques. Un score de
            <span className="text-emerald-300 font-bold"> 6 ou 7/7</span> en HL est souvent requis pour les spécialités compétitives.
          </p>
        </div>
      </div>

      {/* Info note */}
      <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-dashed border-white/15">
        <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-slate-300 mb-1">Note Importante</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Le choix des matières en DP1 impacte directement vos options universitaires mondiales.
            Utilisez le simulateur pour tester différentes combinaisons et consultez nos conseillers pour un accompagnement personnalisé.
          </p>
        </div>
      </div>
    </div>
  );
};
