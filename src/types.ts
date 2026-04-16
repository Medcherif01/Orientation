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
}

export interface University {
  id: string;
  name: string;
  countryId: string;
}

export interface UniversitySpecialty {
  id: string;
  name: string;
  universityId: string;
  recommendedSubjects: string[]; // Subject IDs
  requiredHL: string[]; // Subject IDs
  minScore: number;
  iaEaClarification: string; // New field for IA/EA details
  icon?: string; // Icon name from lucide
  description: string;
}

export interface StudentProfile {
  grade: 'PEI5' | 'DP1';
  status: 'new' | 'current';
  careerGoal: string;
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
  { id: 1, name: "Group 1: Studies in Language and Literature" },
  { id: 2, name: "Group 2: Language Acquisition" },
  { id: 3, name: "Group 3: Individuals and Societies" },
  { id: 4, name: "Group 4: Sciences" },
  { id: 5, name: "Group 5: Mathematics" },
  { id: 6, name: "Group 6: The Arts (or Elective)" },
];
