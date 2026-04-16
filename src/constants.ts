import { IBSubject, UniversitySpecialty, Country, University } from "./types";

export const COUNTRIES: Country[] = [
  { id: 'fr', name: 'France' },
  { id: 'uk', name: 'Royaume-Uni' },
  { id: 'ca', name: 'Canada' },
  { id: 'us', name: 'États-Unis' },
  { id: 'ma', name: 'Maroc' },
  { id: 'ch', name: 'Suisse' },
  { id: 'es', name: 'Espagne' },
  { id: 'be', name: 'Belgique' },
  { id: 'de', name: 'Allemagne' },
  { id: 'nl', name: 'Pays-Bas' },
];

export const UNIVERSITIES: University[] = [
  { id: 'sorbonne', name: 'Sorbonne Université', countryId: 'fr' },
  { id: 'poly-fr', name: 'École Polytechnique', countryId: 'fr' },
  { id: 'oxford', name: 'University of Oxford', countryId: 'uk' },
  { id: 'cambridge', name: 'University of Cambridge', countryId: 'uk' },
  { id: 'mcgill', name: 'McGill University', countryId: 'ca' },
  { id: 'toronto', name: 'University of Toronto', countryId: 'ca' },
  { id: 'mit', name: 'MIT', countryId: 'us' },
  { id: 'harvard', name: 'Harvard University', countryId: 'us' },
  { id: 'um6p', name: 'UM6P', countryId: 'ma' },
  { id: 'eth-zurich', name: 'ETH Zurich', countryId: 'ch' },
  { id: 'epfl', name: 'EPFL', countryId: 'ch' },
  { id: 'ie-madrid', name: 'IE University Madrid', countryId: 'es' },
  { id: 'ulb', name: 'Université Libre de Bruxelles', countryId: 'be' },
  { id: 'tum', name: 'TU Munich', countryId: 'de' },
  { id: 'delft', name: 'TU Delft', countryId: 'nl' },
];

export const SUBJECTS: IBSubject[] = [
  // Group 1: Language and Literature (French school context)
  { id: 'fra-a-lit', name: 'Français A : Littérature', group: 1, levels: ['HL', 'SL'], description: 'Analyse approfondie de textes littéraires français et francophones.' },
  { id: 'fra-a-lang-lit', name: 'Français A : Langue et Littérature', group: 1, levels: ['HL', 'SL'], description: 'Étude de la langue et de la littérature dans divers contextes.' },
  { id: 'eng-a-lit', name: 'English A: Literature', group: 1, levels: ['HL', 'SL'], description: 'Focuses on literary analysis and critical thinking.' },
  { id: 'ara-a-lit', name: 'Arabic A: Literature', group: 1, levels: ['HL', 'SL'], description: 'Focuses on Arabic literary heritage and modern works.' },
  { id: 'lit-theatre', name: 'Littérature et représentation théâtrale', group: 1, levels: ['SL'], description: 'Approche interdisciplinaire combinant critique littéraire et pratique théâtrale.' },
  
  // Group 2
  { id: 'eng-b', name: 'English B', group: 2, levels: ['HL', 'SL'], description: 'Language acquisition for non-native speakers.' },
  { id: 'ara-b', name: 'Arabic B', group: 2, levels: ['HL', 'SL'], description: 'Arabic language acquisition.' },
  { id: 'fre-b', name: 'Français B', group: 2, levels: ['HL', 'SL'], description: 'Acquisition de la langue française pour non-natifs.' },
  { id: 'fre-ab', name: 'French ab initio', group: 2, levels: ['SL'], description: 'Beginner level French.' },
  { id: 'spa-ab', name: 'Espagnol ab initio', group: 2, levels: ['SL'], description: 'Apprentissage débutant de l\'espagnol.' },
  { id: 'class-lang', name: 'Langues classiques', group: 2, levels: ['HL', 'SL'], description: 'Étude du latin ou du grec ancien.' },
  
  // Group 3
  { id: 'bus-man', name: 'Business Management', group: 3, levels: ['HL', 'SL'], description: 'Study of business functions and decision-making.' },
  { id: 'econ', name: 'Economics', group: 3, levels: ['HL', 'SL'], description: 'Micro and macro economics study.' },
  { id: 'hist', name: 'History', group: 3, levels: ['HL', 'SL'], description: 'World history and regional studies.' },
  { id: 'geog', name: 'Géographie', group: 3, levels: ['HL', 'SL'], description: 'Étude des interactions humaines et environnementales.' },
  { id: 'psych', name: 'Psychology', group: 3, levels: ['HL', 'SL'], description: 'Scientific study of behavior and mental processes.' },
  { id: 'itgs', name: 'ITGS', group: 3, levels: ['HL', 'SL'], description: 'Information Technology in a Global Society.' },
  { id: 'env-sys', name: 'Environmental Systems and Societies', group: 3, levels: ['SL'], description: 'Interdisciplinary study of environmental issues.' },
  { id: 'global-pol', name: 'Global Politics', group: 3, levels: ['HL', 'SL'], description: 'Study of power, sovereignty, and international relations.' },
  { id: 'phil', name: 'Philosophie', group: 3, levels: ['HL', 'SL'], description: 'Exploration des questions fondamentales de l\'existence.' },
  { id: 'anthro', name: 'Anthropologie sociale et culturelle', group: 3, levels: ['HL', 'SL'], description: 'Étude de la diversité culturelle humaine.' },
  { id: 'world-rel', name: 'Religions du monde', group: 3, levels: ['SL'], description: 'Étude des grandes traditions religieuses mondiales.' },
  
  // Group 4
  { id: 'bio', name: 'Biology', group: 4, levels: ['HL', 'SL'], description: 'Study of living organisms and life processes.' },
  { id: 'chem', name: 'Chemistry', group: 4, levels: ['HL', 'SL'], description: 'Study of matter and its changes.' },
  { id: 'phys', name: 'Physics', group: 4, levels: ['HL', 'SL'], description: 'Fundamental laws of the universe.' },
  { id: 'comp-sci', name: 'Computer Science', group: 4, levels: ['HL', 'SL'], description: 'Computational thinking and programming.' },
  { id: 'ess-sci', name: 'ESS (Group 4)', group: 4, levels: ['SL'], description: 'Environmental Systems and Societies as a science.' },
  { id: 'sport-sci', name: 'Sports, Exercise and Health Science', group: 4, levels: ['HL', 'SL'], description: 'Scientific study of human performance.' },
  { id: 'design-tech', name: 'Technologie du Design', group: 4, levels: ['HL', 'SL'], description: 'Conception et développement de produits.' },
  
  // Group 5
  { id: 'math-aa', name: 'Math: Analysis and Approaches', group: 5, levels: ['HL', 'SL'], description: 'Strong emphasis on calculus and algebraic methods.' },
  { id: 'math-ai', name: 'Math: Applications and Interpretation', group: 5, levels: ['HL', 'SL'], description: 'Emphasis on statistics and modeling.' },
  { id: 'math-comp-ns', name: 'Mathématiques complémentaires NS', group: 5, levels: ['HL'], description: 'Niveau supérieur approfondi pour les futurs mathématiciens.' },
  { id: 'math-studies-sl', name: 'Études mathématiques NM', group: 5, levels: ['SL'], description: 'Applications mathématiques fondamentales.' },
  
  // Group 6
  { id: 'vis-arts', name: 'Visual Arts', group: 6, levels: ['HL', 'SL'], description: 'Creative expression and art history.' },
  { id: 'music', name: 'Music', group: 6, levels: ['HL', 'SL'], description: 'Musical performance and composition.' },
  { id: 'theatre', name: 'Theatre', group: 6, levels: ['HL', 'SL'], description: 'Exploring theatrical traditions and performance.' },
  { id: 'film', name: 'Film', group: 6, levels: ['HL', 'SL'], description: 'Study of film history, theory, and production.' },
  { id: 'dance', name: 'Danse', group: 6, levels: ['HL', 'SL'], description: 'Composition, performance et analyse de la danse.' },
  { id: 'lit-theatre-g6', name: 'Littérature et représentation théâtrale (G6)', group: 6, levels: ['SL'], description: 'Option interdisciplinaire (également Groupe 1).' },
];

export const UNIVERSITY_SPECIALTIES: UniversitySpecialty[] = [
  {
    id: 'med-sorbonne',
    name: 'Médecine',
    universityId: 'sorbonne',
    recommendedSubjects: ['bio', 'chem', 'math-aa'],
    requiredHL: ['chem', 'bio'],
    minScore: 38,
    icon: 'Stethoscope',
    iaEaClarification: 'IA (Évaluation Interne) : Minimum 6/7 en Biologie et Chimie. EA (Examens Finaux) : Score de 7 requis en HL Sciences.',
    description: 'Nécessite une base scientifique solide et un score global élevé.'
  },
  {
    id: 'eng-poly',
    name: 'Ingénierie',
    universityId: 'poly-fr',
    recommendedSubjects: ['phys', 'chem', 'math-aa'],
    requiredHL: ['math-aa', 'phys'],
    minScore: 36,
    icon: 'Settings',
    iaEaClarification: 'IA : 6/7 en Mathématiques AA HL. EA : Forte performance requise en Physique et Mathématiques (7/7 visé).',
    description: 'Accent sur le raisonnement mathématique et les lois physiques.'
  },
  {
    id: 'cs-mit',
    name: 'Computer Science',
    universityId: 'mit',
    recommendedSubjects: ['comp-sci', 'math-aa', 'phys'],
    requiredHL: ['math-aa', 'comp-sci'],
    minScore: 40,
    icon: 'Code',
    iaEaClarification: 'IA : Projet informatique (IA) noté 7/7. EA : Score parfait requis en Mathématiques HL.',
    description: 'Compétences logiques et mathématiques très élevées requises.'
  },
  {
    id: 'bus-mcgill',
    name: 'Business & Finance',
    universityId: 'mcgill',
    recommendedSubjects: ['econ', 'bus-man', 'math-ai'],
    requiredHL: ['econ', 'math-ai'],
    minScore: 34,
    icon: 'TrendingUp',
    iaEaClarification: 'IA : Commentaire écrit en Économie (IA) 6/7. EA : Équilibre requis entre Mathématiques et Sciences Humaines.',
    description: 'Compréhension des marchés, de la gestion et de l\'analyse de données.'
  },
  {
    id: 'law-oxford',
    name: 'Droit (Law)',
    universityId: 'oxford',
    recommendedSubjects: ['hist', 'fra-a-lit', 'psych'],
    requiredHL: ['fra-a-lit', 'hist'],
    minScore: 39,
    icon: 'Scale',
    iaEaClarification: 'IA : Analyse littéraire (IA) 7/7. EA : Score de 7 requis en Histoire HL et Français A.',
    description: 'Excellentes capacités d\'analyse et de communication.'
  },
  {
    id: 'arch-eth',
    name: 'Architecture',
    universityId: 'eth-zurich',
    recommendedSubjects: ['vis-arts', 'phys', 'math-aa'],
    requiredHL: ['math-aa', 'vis-arts'],
    minScore: 37,
    icon: 'Home',
    iaEaClarification: 'IA : Portfolio Arts Visuels (IA) 6/7. EA : Très bon niveau en Mathématiques AA et Physique.',
    description: 'Mélange de créativité artistique et de rigueur technique.'
  },
  {
    id: 'ir-ie',
    name: 'Relations Internationales',
    universityId: 'ie-madrid',
    recommendedSubjects: ['global-pol', 'hist', 'econ'],
    requiredHL: ['global-pol', 'econ'],
    minScore: 35,
    icon: 'Globe',
    iaEaClarification: 'IA : Engagement politique (IA) 6/7. EA : Score de 6 minimum en Global Politics HL.',
    description: 'Étude des enjeux mondiaux, de la politique et de l\'économie.'
  },
  {
    id: 'bio-toronto',
    name: 'Biotechnologie',
    universityId: 'toronto',
    recommendedSubjects: ['bio', 'chem', 'comp-sci'],
    requiredHL: ['bio', 'chem'],
    minScore: 36,
    icon: 'Dna',
    iaEaClarification: 'IA : Investigation scientifique (IA) 6/7. EA : Score de 6 ou 7 en Biologie et Chimie HL.',
    description: 'Innovation dans les sciences de la vie et les technologies.'
  },
  {
    id: 'design-delft',
    name: 'Design Industriel',
    universityId: 'delft',
    recommendedSubjects: ['design-tech', 'phys', 'math-aa'],
    requiredHL: ['design-tech', 'math-aa'],
    minScore: 35,
    icon: 'PenTool',
    iaEaClarification: 'IA : Dossier de design (IA) 7/7. EA : Score de 6 en Mathématiques AA HL.',
    description: 'Conception de solutions innovantes alliant forme et fonction.'
  },
  {
    id: 'psych-ulb',
    name: 'Psychologie',
    universityId: 'ulb',
    recommendedSubjects: ['psych', 'bio', 'fra-a-lit'],
    requiredHL: ['psych', 'fra-a-lit'],
    minScore: 33,
    icon: 'Brain',
    iaEaClarification: 'IA : Étude expérimentale (IA) 6/7. EA : Score de 6 en Psychologie HL.',
    description: 'Étude du comportement humain et des processus mentaux.'
  },
  {
    id: 'phys-tum',
    name: 'Physique Fondamentale',
    universityId: 'tum',
    recommendedSubjects: ['phys', 'math-aa', 'chem'],
    requiredHL: ['phys', 'math-aa'],
    minScore: 38,
    icon: 'Atom',
    iaEaClarification: 'IA : Investigation en Physique (IA) 7/7. EA : Score de 7 requis en Physique HL.',
    description: 'Exploration des lois fondamentales de la nature.'
  }
];

export const SOUTIEN_SCOLAIRE_CONTENT = {
  pei: {
    title: "Programme d'Éducation Intermédiaire (PEI / MYP)",
    description: "Le PEI est un cadre pédagogique rigoureux destiné aux élèves de 11 à 16 ans (PEI 1 à PEI 5). Il encourage les élèves à devenir des apprenants créatifs, critiques et réfléchis, capables d'établir des liens entre leurs études et le monde réel.",
    keyPoints: [
      "8 groupes de matières : Un équilibre entre langues, sciences, mathématiques, arts, éducation physique et design.",
      "Contextes mondiaux : L'apprentissage est ancré dans des contextes réels pour donner du sens aux études.",
      "Projet personnel (PEI 5) : Un travail de recherche indépendant CRUCIAL pour l'orientation. Il démontre votre capacité à mener un projet de A à Z, une compétence très valorisée par les universités.",
      "E-Assessment (PEI 5) : L'importance des examens électroniques en fin de PEI 5 pour valider vos acquis et préparer la rigueur du DP.",
      "Compétences ATL : Apprendre à apprendre (pensée critique, recherche, communication).",
      "Service en tant qu'action : Engagement communautaire pour développer l'empathie et la responsabilité."
    ]
  },
  dp: {
    title: "Programme du Diplôme (DP)",
    description: "Le DP est un programme d'enseignement rigoureux et équilibré destiné aux élèves de 16 à 19 ans. Il est conçu pour préparer les élèves à réussir à l'université et dans leur vie future.",
    keyPoints: [
      "Structure des 6 groupes : Choix de 6 matières (3 au Niveau Supérieur HL et 3 au Niveau Moyen SL).",
      "Règle de remplacement : Si vous ne choisissez pas d'Arts (Groupe 6), vous devez choisir une 2ème matière en Groupe 3 (Individus et sociétés) ou Groupe 4 (Sciences).",
      "Le Mémoire (EE) : Recherche autonome de 4 000 mots, excellente préparation à l'université.",
      "Théorie de la Connaissance (TdC) : Réflexion critique sur la nature du savoir.",
      "CAS (Créativité, Activité, Service) : Équilibre personnel à travers des projets concrets.",
      "Évaluation : Mixte entre travaux internes (IA) et examens finaux (EA)."
    ]
  },
  contacts: [
    {
      role: "Conseillère de Soutien Scolaire",
      name: "Zohra Zidane",
      email: "zohrazidane@alkawthar.edu.sa"
    },
    {
      role: "Conseiller d'Orientation Universitaire",
      name: "Mohamed Cherif",
      email: "mohamed_sherif@alkawthar.edu.sa"
    }
  ]
};
