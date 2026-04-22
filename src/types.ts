export type IBLevel = 'HL' | 'SL';

export interface IBSubject {
  id: string;
  name: string;
  group: number;
  description: string;
  levels: IBLevel[];
}

export interface Country {
  id: string;
  name: string;
  flag: string;
}

export interface University {
  id: string;
  name: string;
  countryId: string;
  ranking?: number;
}

export interface SpecialtyDomain {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface UniversitySpecialty {
  id: string;
  name: string;
  domain: string; // domain id
  universityId: string;
  recommendedSubjects: string[];
  requiredHL: string[];
  minScore: number;
  minScorePerHL?: number; // min score per HL subject
  iaEaClarification: string;
  icon?: string;
  description: string;
  careerPaths?: string[];
}

export interface StudentProfile {
  grade: 'PEI5' | 'DP1';
  status: 'new' | 'current';
  careerGoal: string;
  selectedDomain?: string;
  selectedCountryId?: string;
  selectedUniversityId?: string;
  selectedSpecialtyId?: string;
  selectedSubjects: SelectedSubject[];
}

export interface SelectedSubject {
  subjectId: string;
  level: IBLevel;
}

export const IB_GROUPS = [
  { id: 1, name: 'Langue et Littérature', shortName: 'Groupe 1' },
  { id: 2, name: 'Acquisition de Langues', shortName: 'Groupe 2' },
  { id: 3, name: 'Individus et Sociétés', shortName: 'Groupe 3' },
  { id: 4, name: 'Sciences', shortName: 'Groupe 4' },
  { id: 5, name: 'Mathématiques', shortName: 'Groupe 5' },
  { id: 6, name: 'Arts (ou Matière Optionnelle)', shortName: 'Groupe 6' },
];
