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
    description: 'Nécessite une base scientifique solide et un score global élevé.'
  },
  {
    id: 'eng-poly',
    name: 'Ingénierie',
    universityId: 'poly-fr',
    recommendedSubjects: ['phys', 'chem', 'math-aa'],
    requiredHL: ['math-aa', 'phys'],
    minScore: 36,
    description: 'Accent sur le raisonnement mathématique et les lois physiques.'
  },
  {
    id: 'cs-mit',
    name: 'Computer Science',
    universityId: 'mit',
    recommendedSubjects: ['comp-sci', 'math-aa', 'phys'],
    requiredHL: ['math-aa', 'comp-sci'],
    minScore: 40,
    description: 'Compétences logiques et mathématiques très élevées requises.'
  },
  {
    id: 'bus-mcgill',
    name: 'Business & Finance',
    universityId: 'mcgill',
    recommendedSubjects: ['econ', 'bus-man', 'math-ai'],
    requiredHL: ['econ', 'math-ai'],
    minScore: 34,
    description: 'Compréhension des marchés, de la gestion et de l\'analyse de données.'
  },
  {
    id: 'law-oxford',
    name: 'Droit (Law)',
    universityId: 'oxford',
    recommendedSubjects: ['hist', 'fra-a-lit', 'psych'],
    requiredHL: ['fra-a-lit', 'hist'],
    minScore: 39,
    description: 'Excellentes capacités d\'analyse et de communication.'
  },
  {
    id: 'arch-eth',
    name: 'Architecture',
    universityId: 'eth-zurich',
    recommendedSubjects: ['vis-arts', 'phys', 'math-aa'],
    requiredHL: ['math-aa', 'vis-arts'],
    minScore: 37,
    description: 'Mélange de créativité artistique et de rigueur technique.'
  },
  {
    id: 'ir-ie',
    name: 'Relations Internationales',
    universityId: 'ie-madrid',
    recommendedSubjects: ['global-pol', 'hist', 'econ'],
    requiredHL: ['global-pol', 'econ'],
    minScore: 35,
    description: 'Étude des enjeux mondiaux, de la politique et de l\'économie.'
  },
  {
    id: 'bio-toronto',
    name: 'Biotechnologie',
    universityId: 'toronto',
    recommendedSubjects: ['bio', 'chem', 'comp-sci'],
    requiredHL: ['bio', 'chem'],
    minScore: 36,
    description: 'Innovation dans les sciences de la vie et les technologies.'
  },
  {
    id: 'design-delft',
    name: 'Design Industriel',
    universityId: 'delft',
    recommendedSubjects: ['design-tech', 'phys', 'math-aa'],
    requiredHL: ['design-tech', 'math-aa'],
    minScore: 35,
    description: 'Conception de solutions innovantes alliant forme et fonction.'
  },
  {
    id: 'psych-ulb',
    name: 'Psychologie',
    universityId: 'ulb',
    recommendedSubjects: ['psych', 'bio', 'fra-a-lit'],
    requiredHL: ['psych', 'fra-a-lit'],
    minScore: 33,
    description: 'Étude du comportement humain et des processus mentaux.'
  },
  {
    id: 'phys-tum',
    name: 'Physique Fondamentale',
    universityId: 'tum',
    recommendedSubjects: ['phys', 'math-aa', 'chem'],
    requiredHL: ['phys', 'math-aa'],
    minScore: 38,
    description: 'Exploration des lois fondamentales de la nature.'
  }
];

export const SOUTIEN_SCOLAIRE_CONTENT = {
  pei: {
    title: "Programme d'Éducation Intermédiaire (PEI / MYP)",
    description: "Le PEI est un cadre pédagogique rigoureux destiné aux élèves de 11 à 16 ans (PEI 1 à PEI 5). Il encourage les élèves à devenir des apprenants créatifs, critiques et réfléchis, capables d'établir des liens entre leurs études et le monde réel.",
    keyPoints: [
      "8 groupes de matières : Langue et littérature, Acquisition de langues, Individus et sociétés, Sciences, Mathématiques, Arts, Éducation physique et à la santé, Design.",
      "Contextes mondiaux : L'apprentissage est ancré dans des contextes réels (Identités et relations, Orientation dans l'espace et le temps, Expression personnelle et culturelle, Innovation scientifique et technique, Mondialisation et durabilité, Équité et développement).",
      "Projet personnel : Un travail de recherche indépendant réalisé en PEI 5, démontrant les compétences d'autogestion, de recherche et de réflexion acquises durant le programme.",
      "Compétences ATL (Approches de l'apprentissage) : Développement systématique de compétences essentielles : Pensée (critique et créative), Communication, Social (collaboration), Autogestion (organisation et affectivité) et Recherche.",
      "Service en tant qu'action : Engagement communautaire obligatoire pour développer l'empathie, la responsabilité civique et la compréhension internationale.",
      "Évaluation : Basée sur des critères de performance rigoureux, incluant des examens électroniques et des portfolios de travaux."
    ]
  },
  dp: {
    title: "Programme du Diplôme (DP)",
    description: "Le DP est un programme d'enseignement rigoureux et équilibré destiné aux élèves de 16 à 19 ans. Il est conçu pour préparer les élèves à réussir à l'université et dans leur vie future, tout en favorisant leur développement intellectuel, social et émotionnel.",
    keyPoints: [
      "Structure des 6 groupes : Les élèves choisissent une matière dans chacun des 5 premiers groupes (Langues, Sciences Humaines, Sciences Expérimentales, Mathématiques), et une 6ème soit en Arts, soit une matière supplémentaire des groupes 1 à 5.",
      "Niveaux HL et SL : 3 ou 4 matières au Niveau Supérieur (HL - 240h d'enseignement) et le reste au Niveau Moyen (SL - 150h d'enseignement).",
      "Le Mémoire (EE) : Un travail de recherche autonome de 4 000 mots sur un sujet d'intérêt personnel, préparant aux exigences de la recherche universitaire.",
      "Théorie de la Connaissance (TdC) : Un cours interdisciplinaire qui explore la nature de la connaissance et encourage la pensée critique sur ce que nous savons et comment nous le savons.",
      "Créativité, Activité, Service (CAS) : Un programme parascolaire essentiel où les élèves s'engagent dans des projets créatifs, des activités physiques et des services à la communauté.",
      "Évaluation : Un système d'évaluation internationalement reconnu combinant des examens finaux externes et des évaluations internes (IA) réalisées par les enseignants.",
      "Profil de l'apprenant : Le programme vise à former des individus chercheurs, informés, sensés, communicateurs, intègres, ouverts d'esprit, altruistes, audacieux, équilibrés et réfléchis."
    ]
  }
};
