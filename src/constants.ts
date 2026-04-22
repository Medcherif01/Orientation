import { IBSubject, UniversitySpecialty, Country, University, SpecialtyDomain } from "./types";

export const COUNTRIES: Country[] = [
  { id: 'fr', name: 'France', flag: '🇫🇷' },
  { id: 'uk', name: 'Royaume-Uni', flag: '🇬🇧' },
  { id: 'ca', name: 'Canada', flag: '🇨🇦' },
  { id: 'us', name: 'États-Unis', flag: '🇺🇸' },
  { id: 'ma', name: 'Maroc', flag: '🇲🇦' },
  { id: 'ch', name: 'Suisse', flag: '🇨🇭' },
  { id: 'es', name: 'Espagne', flag: '🇪🇸' },
  { id: 'be', name: 'Belgique', flag: '🇧🇪' },
  { id: 'de', name: 'Allemagne', flag: '🇩🇪' },
  { id: 'nl', name: 'Pays-Bas', flag: '🇳🇱' },
  { id: 'au', name: 'Australie', flag: '🇦🇺' },
  { id: 'jp', name: 'Japon', flag: '🇯🇵' },
  { id: 'sg', name: 'Singapour', flag: '🇸🇬' },
  { id: 'ae', name: 'Émirats Arabes Unis', flag: '🇦🇪' },
  { id: 'sa', name: 'Arabie Saoudite', flag: '🇸🇦' },
  { id: 'it', name: 'Italie', flag: '🇮🇹' },
  { id: 'se', name: 'Suède', flag: '🇸🇪' },
  { id: 'dk', name: 'Danemark', flag: '🇩🇰' },
];

export const UNIVERSITIES: University[] = [
  // France
  { id: 'sorbonne', name: 'Sorbonne Université', countryId: 'fr', ranking: 83 },
  { id: 'poly-fr', name: 'École Polytechnique (X)', countryId: 'fr', ranking: 65 },
  { id: 'sciences-po', name: 'Sciences Po Paris', countryId: 'fr', ranking: 244 },
  { id: 'hec', name: 'HEC Paris', countryId: 'fr', ranking: 92 },
  { id: 'paris-saclay', name: 'Université Paris-Saclay', countryId: 'fr', ranking: 13 },
  { id: 'centrale', name: 'CentraleSupélec', countryId: 'fr', ranking: 261 },
  // Royaume-Uni
  { id: 'oxford', name: 'University of Oxford', countryId: 'uk', ranking: 1 },
  { id: 'cambridge', name: 'University of Cambridge', countryId: 'uk', ranking: 2 },
  { id: 'imperial', name: 'Imperial College London', countryId: 'uk', ranking: 8 },
  { id: 'ucl', name: 'University College London', countryId: 'uk', ranking: 9 },
  { id: 'lse', name: 'London School of Economics', countryId: 'uk', ranking: 45 },
  { id: 'edinburgh', name: 'University of Edinburgh', countryId: 'uk', ranking: 27 },
  // Canada
  { id: 'mcgill', name: 'McGill University', countryId: 'ca', ranking: 31 },
  { id: 'toronto', name: 'University of Toronto', countryId: 'ca', ranking: 21 },
  { id: 'ubc', name: 'University of British Columbia', countryId: 'ca', ranking: 34 },
  { id: 'waterloo', name: 'University of Waterloo', countryId: 'ca', ranking: 154 },
  // États-Unis
  { id: 'mit', name: 'MIT', countryId: 'us', ranking: 1 },
  { id: 'harvard', name: 'Harvard University', countryId: 'us', ranking: 4 },
  { id: 'stanford', name: 'Stanford University', countryId: 'us', ranking: 5 },
  { id: 'caltech', name: 'Caltech', countryId: 'us', ranking: 6 },
  { id: 'yale', name: 'Yale University', countryId: 'us', ranking: 12 },
  { id: 'columbia', name: 'Columbia University', countryId: 'us', ranking: 11 },
  // Maroc
  { id: 'um6p', name: 'UM6P (Mohammed VI Polytechnique)', countryId: 'ma', ranking: 0 },
  { id: 'emi-rabat', name: 'École Mohammadia d\'Ingénieurs (EMI)', countryId: 'ma', ranking: 0 },
  { id: 'al-akhawayn', name: 'Université Al Akhawayn', countryId: 'ma', ranking: 0 },
  // Suisse
  { id: 'eth-zurich', name: 'ETH Zurich', countryId: 'ch', ranking: 7 },
  { id: 'epfl', name: 'EPFL', countryId: 'ch', ranking: 16 },
  { id: 'unige', name: 'Université de Genève', countryId: 'ch', ranking: 100 },
  // Espagne
  { id: 'ie-madrid', name: 'IE University Madrid', countryId: 'es', ranking: 200 },
  { id: 'esade', name: 'ESADE Business School', countryId: 'es', ranking: 0 },
  { id: 'upm', name: 'Universidad Politécnica de Madrid', countryId: 'es', ranking: 250 },
  // Belgique
  { id: 'ulb', name: 'Université Libre de Bruxelles', countryId: 'be', ranking: 175 },
  { id: 'ku-leuven', name: 'KU Leuven', countryId: 'be', ranking: 42 },
  // Allemagne
  { id: 'tum', name: 'TU Munich', countryId: 'de', ranking: 37 },
  { id: 'lmu', name: 'LMU Munich', countryId: 'de', ranking: 54 },
  { id: 'heidelberg', name: 'Université de Heidelberg', countryId: 'de', ranking: 43 },
  // Pays-Bas
  { id: 'delft', name: 'TU Delft', countryId: 'nl', ranking: 57 },
  { id: 'leiden', name: 'Université de Leiden', countryId: 'nl', ranking: 128 },
  // Australie
  { id: 'anu', name: 'Australian National University', countryId: 'au', ranking: 30 },
  { id: 'melbourne', name: 'University of Melbourne', countryId: 'au', ranking: 14 },
  // Japon
  { id: 'tokyo', name: 'University of Tokyo', countryId: 'jp', ranking: 28 },
  { id: 'kyoto', name: 'Kyoto University', countryId: 'jp', ranking: 46 },
  // Singapour
  { id: 'nus', name: 'National University of Singapore', countryId: 'sg', ranking: 8 },
  { id: 'ntu', name: 'Nanyang Technological University', countryId: 'sg', ranking: 15 },
  // Émirats
  { id: 'nyu-abu', name: 'NYU Abu Dhabi', countryId: 'ae', ranking: 0 },
  { id: 'khalifa', name: 'Khalifa University', countryId: 'ae', ranking: 0 },
  // Arabie Saoudite
  { id: 'kaust', name: 'KAUST', countryId: 'sa', ranking: 0 },
  { id: 'kfupm', name: 'KFUPM', countryId: 'sa', ranking: 0 },
  // Italie
  { id: 'bocconi', name: 'Bocconi University', countryId: 'it', ranking: 0 },
  { id: 'polimi', name: 'Politecnico di Milano', countryId: 'it', ranking: 139 },
  // Suède
  { id: 'kth', name: 'KTH Royal Institute of Technology', countryId: 'se', ranking: 98 },
  // Danemark
  { id: 'dtu', name: 'Technical University of Denmark', countryId: 'dk', ranking: 133 },
];

export const SPECIALTY_DOMAINS: SpecialtyDomain[] = [
  { id: 'medical', name: 'Médecine & Santé', icon: '🏥', color: 'rose' },
  { id: 'engineering', name: 'Ingénierie & Technologie', icon: '⚙️', color: 'blue' },
  { id: 'computer', name: 'Informatique & IA', icon: '💻', color: 'violet' },
  { id: 'business', name: 'Business & Finance', icon: '📈', color: 'amber' },
  { id: 'law', name: 'Droit & Sciences Politiques', icon: '⚖️', color: 'slate' },
  { id: 'architecture', name: 'Architecture & Design', icon: '🏛️', color: 'orange' },
  { id: 'science', name: 'Sciences Fondamentales', icon: '🔬', color: 'cyan' },
  { id: 'humanities', name: 'Humanités & Sciences Sociales', icon: '📚', color: 'emerald' },
  { id: 'arts', name: 'Arts & Communication', icon: '🎨', color: 'pink' },
  { id: 'environment', name: 'Environnement & Durabilité', icon: '🌱', color: 'green' },
];

export const SUBJECTS: IBSubject[] = [
  // Groupe 1
  { id: 'fra-a-lit', name: 'Français A : Littérature', group: 1, levels: ['HL', 'SL'], description: 'Analyse approfondie de textes littéraires français et francophones.' },
  { id: 'fra-a-lang-lit', name: 'Français A : Langue et Littérature', group: 1, levels: ['HL', 'SL'], description: 'Étude de la langue et de la littérature dans divers contextes.' },
  { id: 'eng-a-lit', name: 'English A: Literature', group: 1, levels: ['HL', 'SL'], description: 'Focuses on literary analysis and critical thinking.' },
  { id: 'eng-a-lang-lit', name: 'English A: Language & Literature', group: 1, levels: ['HL', 'SL'], description: 'Language analysis, media and literary texts.' },
  { id: 'ara-a-lit', name: 'Arabic A: Literature', group: 1, levels: ['HL', 'SL'], description: 'Focuses on Arabic literary heritage and modern works.' },
  { id: 'lit-theatre', name: 'Littérature & Théâtre', group: 1, levels: ['SL'], description: 'Approche interdisciplinaire : critique littéraire et pratique théâtrale.' },
  // Groupe 2
  { id: 'eng-b', name: 'English B', group: 2, levels: ['HL', 'SL'], description: 'Language acquisition for non-native English speakers.' },
  { id: 'ara-b', name: 'Arabic B', group: 2, levels: ['HL', 'SL'], description: 'Arabic language acquisition.' },
  { id: 'fre-b', name: 'Français B', group: 2, levels: ['HL', 'SL'], description: 'Acquisition de la langue française pour non-natifs.' },
  { id: 'fre-ab', name: 'French ab initio', group: 2, levels: ['SL'], description: 'Apprentissage débutant du français.' },
  { id: 'spa-ab', name: 'Espagnol ab initio', group: 2, levels: ['SL'], description: 'Apprentissage débutant de l\'espagnol.' },
  { id: 'spa-b', name: 'Spanish B', group: 2, levels: ['HL', 'SL'], description: 'Spanish language acquisition.' },
  { id: 'ger-b', name: 'Deutsch B', group: 2, levels: ['HL', 'SL'], description: 'German language acquisition.' },
  { id: 'class-lang', name: 'Langues classiques (Latin/Grec)', group: 2, levels: ['HL', 'SL'], description: 'Étude du latin ou du grec ancien.' },
  // Groupe 3
  { id: 'bus-man', name: 'Business Management', group: 3, levels: ['HL', 'SL'], description: 'Study of business functions and decision-making.' },
  { id: 'econ', name: 'Economics', group: 3, levels: ['HL', 'SL'], description: 'Micro and macro economics study.' },
  { id: 'hist', name: 'History', group: 3, levels: ['HL', 'SL'], description: 'World history and regional studies.' },
  { id: 'geog', name: 'Géographie', group: 3, levels: ['HL', 'SL'], description: 'Étude des interactions humaines et environnementales.' },
  { id: 'psych', name: 'Psychology', group: 3, levels: ['HL', 'SL'], description: 'Scientific study of behavior and mental processes.' },
  { id: 'itgs', name: 'ITGS', group: 3, levels: ['HL', 'SL'], description: 'Information Technology in a Global Society.' },
  { id: 'env-sys', name: 'Environmental Systems & Societies', group: 3, levels: ['SL'], description: 'Interdisciplinary study of environmental issues.' },
  { id: 'global-pol', name: 'Global Politics', group: 3, levels: ['HL', 'SL'], description: 'Power, sovereignty and international relations.' },
  { id: 'phil', name: 'Philosophie', group: 3, levels: ['HL', 'SL'], description: 'Exploration des questions fondamentales de l\'existence.' },
  { id: 'anthro', name: 'Anthropologie sociale et culturelle', group: 3, levels: ['HL', 'SL'], description: 'Étude de la diversité culturelle humaine.' },
  { id: 'world-rel', name: 'Religions du monde', group: 3, levels: ['SL'], description: 'Étude des grandes traditions religieuses mondiales.' },
  { id: 'social-cult', name: 'Social & Cultural Anthropology', group: 3, levels: ['HL', 'SL'], description: 'Cross-cultural human behavior and society.' },
  // Groupe 4
  { id: 'bio', name: 'Biology / Sciences de la vie', group: 4, levels: ['HL', 'SL'], description: 'Study of living organisms and life processes.' },
  { id: 'chem', name: 'Chemistry / Chimie', group: 4, levels: ['HL', 'SL'], description: 'Study of matter, its properties and changes.' },
  { id: 'phys', name: 'Physics / Physique', group: 4, levels: ['HL', 'SL'], description: 'Fundamental laws of the universe.' },
  { id: 'comp-sci', name: 'Computer Science / Informatique', group: 4, levels: ['HL', 'SL'], description: 'Computational thinking and programming.' },
  { id: 'sport-sci', name: 'Sports, Exercise & Health Science', group: 4, levels: ['HL', 'SL'], description: 'Scientific study of human performance and health.' },
  { id: 'design-tech', name: 'Technologie du Design', group: 4, levels: ['HL', 'SL'], description: 'Conception et développement de produits innovants.' },
  { id: 'env-sci', name: 'Environmental Systems (Gr.4 option)', group: 4, levels: ['SL'], description: 'Environmental science and societal impact.' },
  // Groupe 5
  { id: 'math-aa', name: 'Math: Analysis & Approaches (AA)', group: 5, levels: ['HL', 'SL'], description: 'Strong emphasis on calculus and algebraic methods. For pure-math paths.' },
  { id: 'math-ai', name: 'Math: Applications & Interpretation (AI)', group: 5, levels: ['HL', 'SL'], description: 'Emphasis on statistics, modelling and technology. For applied paths.' },
  // Groupe 6
  { id: 'vis-arts', name: 'Visual Arts / Arts Visuels', group: 6, levels: ['HL', 'SL'], description: 'Creative expression, art history and studio work.' },
  { id: 'music', name: 'Music / Musique', group: 6, levels: ['HL', 'SL'], description: 'Musical performance, composition and theory.' },
  { id: 'theatre', name: 'Theatre / Théâtre', group: 6, levels: ['HL', 'SL'], description: 'Theatrical traditions, devising and performance.' },
  { id: 'film', name: 'Film Studies', group: 6, levels: ['HL', 'SL'], description: 'Film history, theory and production.' },
  { id: 'dance', name: 'Danse', group: 6, levels: ['HL', 'SL'], description: 'Composition, performance et analyse de la danse.' },
];

export const UNIVERSITY_SPECIALTIES: UniversitySpecialty[] = [
  // ── MÉDECINE & SANTÉ ──────────────────────────────────────────────────
  {
    id: 'med-sorbonne', name: 'Médecine (PASS)', domain: 'medical', universityId: 'sorbonne',
    recommendedSubjects: ['bio', 'chem', 'math-aa', 'phys', 'fra-a-lit', 'eng-b'],
    requiredHL: ['bio', 'chem'], minScore: 38, minScorePerHL: 6, icon: 'Stethoscope',
    iaEaClarification: 'IA : minimum 6/7 en Biologie et Chimie. EA : Score 7 visé en HL Sciences. Le concours PASS est extrêmement compétitif.',
    description: 'Première année commune aux études de santé. Très sélectif — score IB 38+ recommandé.',
    careerPaths: ['Médecin généraliste', 'Spécialiste', 'Chirurgien', 'Urgentiste']
  },
  {
    id: 'pharma-sorbonne', name: 'Pharmacie', domain: 'medical', universityId: 'sorbonne',
    recommendedSubjects: ['chem', 'bio', 'math-aa', 'phys', 'fra-a-lit', 'eng-b'],
    requiredHL: ['chem', 'bio'], minScore: 36, minScorePerHL: 6, icon: 'Pill',
    iaEaClarification: 'IA : minimum 6/7 en Chimie. EA : score fort requis en Chimie et Biologie HL.',
    description: 'Formation en pharmacologie, chimie thérapeutique et sciences du médicament.',
    careerPaths: ['Pharmacien', 'Chercheur en pharmacologie', 'Industrie pharmaceutique']
  },
  {
    id: 'med-oxford', name: 'Medicine (MBChB)', domain: 'medical', universityId: 'oxford',
    recommendedSubjects: ['bio', 'chem', 'math-aa', 'phys', 'eng-a-lit', 'psych'],
    requiredHL: ['bio', 'chem', 'phys'], minScore: 39, minScorePerHL: 7, icon: 'Stethoscope',
    iaEaClarification: 'IA : 7/7 minimum en Biology et Chemistry HL. EA : BMAT requis + entretiens. Score IB 39+ avec 776 en HL.',
    description: 'Programme de médecine d\'Oxford — l\'un des plus compétitifs au monde.',
    careerPaths: ['Médecin consultant', 'Chercheur médical', 'Chirurgien spécialiste']
  },
  {
    id: 'med-mcgill', name: 'Medicine (MD)', domain: 'medical', universityId: 'mcgill',
    recommendedSubjects: ['bio', 'chem', 'math-aa', 'phys', 'eng-a-lit', 'psych'],
    requiredHL: ['bio', 'chem'], minScore: 37, minScorePerHL: 6, icon: 'Stethoscope',
    iaEaClarification: 'IA : min 6/7 en Biology HL. EA : MCAT requis pour entrée directe. Score IB 37+ recommandé.',
    description: 'Médecine à McGill — reconnue mondialement, excellente recherche clinique.',
    careerPaths: ['Médecin', 'Chercheur clinique', 'Spécialiste']
  },
  {
    id: 'dentistry-ucl', name: 'Dentistry (BDS)', domain: 'medical', universityId: 'ucl',
    recommendedSubjects: ['bio', 'chem', 'math-aa', 'phys', 'eng-a-lit', 'psych'],
    requiredHL: ['bio', 'chem'], minScore: 37, minScorePerHL: 6, icon: 'Smile',
    iaEaClarification: 'IA : 6/7 en Chemistry et Biology HL. EA : score total 37+, admissions très compétitives au UK.',
    description: 'Formation dentaire de renommée mondiale à UCL, Londres.',
    careerPaths: ['Chirurgien-dentiste', 'Orthodontiste', 'Chercheur en sciences dentaires']
  },
  {
    id: 'nursing-edinburgh', name: 'Nursing & Midwifery', domain: 'medical', universityId: 'edinburgh',
    recommendedSubjects: ['bio', 'chem', 'psych', 'math-ai', 'eng-a-lit', 'eng-b'],
    requiredHL: ['bio', 'psych'], minScore: 30, minScorePerHL: 5, icon: 'Heart',
    iaEaClarification: 'IA : min 5/7 en Biology HL. EA : score global 30+, expérience clinique valorisée.',
    description: 'Formation en soins infirmiers et pratique sage-femme à Édimbourg.',
    careerPaths: ['Infirmier(e)', 'Sage-femme', 'Coordinateur de soins']
  },
  {
    id: 'public-health-harvard', name: 'Public Health (MPH)', domain: 'medical', universityId: 'harvard',
    recommendedSubjects: ['bio', 'math-ai', 'econ', 'psych', 'eng-a-lit', 'global-pol'],
    requiredHL: ['bio', 'math-ai'], minScore: 38, minScorePerHL: 6, icon: 'Activity',
    iaEaClarification: 'IA : 6/7 en Biology HL. EA : forte composante statistiques (Math AI). Score Harvard 38+.',
    description: 'Santé publique à Harvard — politiques de santé, épidémiologie et prévention.',
    careerPaths: ['Épidémiologiste', 'Responsable santé publique', 'Consultant OMS']
  },
  {
    id: 'vet-edinburgh', name: 'Veterinary Medicine', domain: 'medical', universityId: 'edinburgh',
    recommendedSubjects: ['bio', 'chem', 'math-aa', 'phys', 'eng-a-lit', 'eng-b'],
    requiredHL: ['bio', 'chem'], minScore: 36, minScorePerHL: 6, icon: 'Paw',
    iaEaClarification: 'IA : 6/7 en Biology et Chemistry HL. EA : score global 36+. Expérience vétérinaire recommandée.',
    description: 'Médecine vétérinaire à Édimbourg — excellente réputation mondiale.',
    careerPaths: ['Vétérinaire', 'Chercheur en santé animale', 'Épidémiologiste animal']
  },

  // ── INGÉNIERIE & TECHNOLOGIE ──────────────────────────────────────────
  {
    id: 'eng-poly', name: 'Ingénierie Générale', domain: 'engineering', universityId: 'poly-fr',
    recommendedSubjects: ['phys', 'chem', 'math-aa', 'comp-sci', 'fra-a-lit', 'eng-b'],
    requiredHL: ['math-aa', 'phys'], minScore: 38, minScorePerHL: 7, icon: 'Settings',
    iaEaClarification: 'IA : 7/7 en Mathématiques AA HL. EA : score 7 en Physique et Maths HL. Concours d\'entrée très sélectif.',
    description: 'L\'X forme les ingénieurs d\'élite de France — raisonnement mathématique exceptionnel requis.',
    careerPaths: ['Ingénieur de recherche', 'Entrepreneur', 'Haut fonctionnaire', 'Manager']
  },
  {
    id: 'eng-eth', name: 'Ingénierie Électrique', domain: 'engineering', universityId: 'eth-zurich',
    recommendedSubjects: ['phys', 'math-aa', 'comp-sci', 'chem', 'eng-b', 'fra-a-lit'],
    requiredHL: ['math-aa', 'phys'], minScore: 38, minScorePerHL: 7, icon: 'Zap',
    iaEaClarification: 'IA : 7/7 en Maths AA HL. EA : Physique HL 7 visé. ETH est classée top 7 mondial en ingénierie.',
    description: 'Génie électrique et électronique à ETH Zurich — référence mondiale.',
    careerPaths: ['Ingénieur électricien', 'Chercheur en énergie', 'Développeur systèmes embarqués']
  },
  {
    id: 'eng-mec-tum', name: 'Génie Mécanique', domain: 'engineering', universityId: 'tum',
    recommendedSubjects: ['phys', 'math-aa', 'design-tech', 'chem', 'eng-b', 'fra-a-lit'],
    requiredHL: ['math-aa', 'phys'], minScore: 36, minScorePerHL: 6, icon: 'Wrench',
    iaEaClarification: 'IA : 6/7 en Physique et Maths AA HL. EA : score 6+ en HL requis. TU Munich — top ingénierie Europe.',
    description: 'Génie mécanique de pointe à TU Munich — mécanique, thermodynamique, robotique.',
    careerPaths: ['Ingénieur mécanique', 'Designer industriel', 'Ingénieur automobile', 'Roboticien']
  },
  {
    id: 'eng-civil-delft', name: 'Génie Civil', domain: 'engineering', universityId: 'delft',
    recommendedSubjects: ['phys', 'math-aa', 'design-tech', 'geog', 'eng-b', 'chem'],
    requiredHL: ['math-aa', 'phys'], minScore: 35, minScorePerHL: 6, icon: 'Building',
    iaEaClarification: 'IA : 6/7 en Maths AA HL. EA : score 6 en Physique HL. TU Delft est leader mondial en génie civil.',
    description: 'Génie civil à TU Delft — infrastructures, hydraulique et construction durable.',
    careerPaths: ['Ingénieur civil', 'Ingénieur hydraulique', 'Chef de projet infrastructure']
  },
  {
    id: 'eng-aero-imperial', name: 'Aéronautique & Aérospatiale', domain: 'engineering', universityId: 'imperial',
    recommendedSubjects: ['phys', 'math-aa', 'comp-sci', 'chem', 'eng-a-lit', 'design-tech'],
    requiredHL: ['math-aa', 'phys'], minScore: 39, minScorePerHL: 7, icon: 'Plane',
    iaEaClarification: 'IA : 7/7 en Physique et Maths AA HL. EA : score 38-40 requis pour Imperial. Très compétitif.',
    description: 'Aérospatiale à Imperial College — un des meilleurs programmes du monde.',
    careerPaths: ['Ingénieur aérospatial', 'Pilote d\'essais', 'Ingénieur NASA/ESA', 'Concepteur d\'avions']
  },
  {
    id: 'eng-bio-epfl', name: 'Bioingénierie', domain: 'engineering', universityId: 'epfl',
    recommendedSubjects: ['bio', 'chem', 'math-aa', 'phys', 'eng-b', 'comp-sci'],
    requiredHL: ['bio', 'math-aa', 'chem'], minScore: 37, minScorePerHL: 6, icon: 'Dna',
    iaEaClarification: 'IA : 6/7 en Biology et Chemistry HL. EA : Maths AA HL requis. EPFL — top 20 mondial.',
    description: 'Bioingénierie à l\'EPFL — intersection de la biologie et de l\'ingénierie.',
    careerPaths: ['Bioinformaticien', 'Ingénieur biomédical', 'Chercheur en biotechnologie']
  },
  {
    id: 'eng-chem-cambridge', name: 'Chemical Engineering', domain: 'engineering', universityId: 'cambridge',
    recommendedSubjects: ['chem', 'math-aa', 'phys', 'bio', 'eng-a-lit', 'eng-b'],
    requiredHL: ['chem', 'math-aa', 'phys'], minScore: 40, minScorePerHL: 7, icon: 'FlaskConical',
    iaEaClarification: 'IA : 7/7 en Chemistry et Physics HL. EA : score parfait 40-42 requis pour Cambridge. STEP math fortement recommandé.',
    description: 'Génie chimique à Cambridge — processus industriels, énergie et matériaux avancés.',
    careerPaths: ['Ingénieur chimiste', 'Chercheur en matériaux', 'Consultant énergie', 'Ingénieur pétrole']
  },

  // ── INFORMATIQUE & IA ─────────────────────────────────────────────────
  {
    id: 'cs-mit', name: 'Computer Science (EECS)', domain: 'computer', universityId: 'mit',
    recommendedSubjects: ['comp-sci', 'math-aa', 'phys', 'econ', 'eng-a-lit', 'eng-b'],
    requiredHL: ['math-aa', 'comp-sci'], minScore: 40, minScorePerHL: 7, icon: 'Code',
    iaEaClarification: 'IA : Projet informatique 7/7. EA : score parfait en Maths AA HL. MIT — numéro 1 mondial en CS.',
    description: 'Computer Science au MIT — intelligence artificielle, systèmes distribués, algorithmes.',
    careerPaths: ['Ingénieur logiciel', 'Chercheur en IA', 'CTO', 'Data Scientist', 'Fondateur startup']
  },
  {
    id: 'cs-oxford', name: 'Computer Science', domain: 'computer', universityId: 'oxford',
    recommendedSubjects: ['comp-sci', 'math-aa', 'phys', 'eng-a-lit', 'eng-b', 'econ'],
    requiredHL: ['math-aa', 'comp-sci'], minScore: 39, minScorePerHL: 7, icon: 'Code',
    iaEaClarification: 'IA : 7/7 en Computer Science HL. EA : Maths AA HL 7 requis. MAT (Mathematics Admissions Test) requis.',
    description: 'Informatique à Oxford — théorie des algorithmes, IA et systèmes complexes.',
    careerPaths: ['Développeur senior', 'Chercheur académique', 'Architecte systèmes', 'Entrepreneur tech']
  },
  {
    id: 'cs-epfl', name: 'Informatique (EPFL)', domain: 'computer', universityId: 'epfl',
    recommendedSubjects: ['comp-sci', 'math-aa', 'phys', 'eng-b', 'fra-a-lit', 'econ'],
    requiredHL: ['math-aa', 'comp-sci'], minScore: 38, minScorePerHL: 7, icon: 'Code',
    iaEaClarification: 'IA : 7/7 en Computer Science HL. EA : Maths AA HL requis. EPFL figure dans le top 20 mondial en CS.',
    description: 'Informatique à l\'EPFL — un des meilleurs programmes d\'Europe.',
    careerPaths: ['Ingénieur backend', 'Chercheur ML', 'CTO', 'Ingénieur systèmes']
  },
  {
    id: 'ai-stanford', name: 'Artificial Intelligence (CS+AI)', domain: 'computer', universityId: 'stanford',
    recommendedSubjects: ['comp-sci', 'math-aa', 'phys', 'econ', 'eng-a-lit', 'psych'],
    requiredHL: ['math-aa', 'comp-sci'], minScore: 40, minScorePerHL: 7, icon: 'Brain',
    iaEaClarification: 'IA : 7/7 en Computer Science et Maths AA HL. EA : score parfait requis pour Stanford.',
    description: 'IA à Stanford — machine learning, vision par ordinateur, traitement du langage.',
    careerPaths: ['Chercheur IA', 'ML Engineer', 'Fondateur AI startup', 'Scientifique des données']
  },
  {
    id: 'cs-waterloo', name: 'Computer Science (Co-op)', domain: 'computer', universityId: 'waterloo',
    recommendedSubjects: ['comp-sci', 'math-aa', 'phys', 'eng-b', 'eng-a-lit', 'econ'],
    requiredHL: ['math-aa', 'comp-sci'], minScore: 36, minScorePerHL: 6, icon: 'Code',
    iaEaClarification: 'IA : 6/7 en Computer Science HL. EA : Maths AA HL 6+. Programme co-op unique — emplois garantis en tech.',
    description: 'Waterloo — le programme CS le plus reconnu au Canada, pipeline vers Google/Meta/Amazon.',
    careerPaths: ['Développeur logiciel', 'Ingénieur sécurité', 'ML Engineer', 'Chercheur UX']
  },
  {
    id: 'cs-nus', name: 'Computer Science (NUS)', domain: 'computer', universityId: 'nus',
    recommendedSubjects: ['comp-sci', 'math-aa', 'phys', 'eng-b', 'eng-a-lit', 'econ'],
    requiredHL: ['math-aa', 'comp-sci'], minScore: 37, minScorePerHL: 6, icon: 'Code',
    iaEaClarification: 'IA : 6/7 en Computer Science HL. EA : Maths AA HL requis. NUS — top 8 mondial en CS selon QS.',
    description: 'Informatique à NUS Singapour — hub de l\'économie numérique asiatique.',
    careerPaths: ['Software Engineer', 'Data Scientist', 'Cybersécurité', 'FinTech Developer']
  },
  {
    id: 'cybersec-tum', name: 'Cybersécurité & Réseaux', domain: 'computer', universityId: 'tum',
    recommendedSubjects: ['comp-sci', 'math-aa', 'phys', 'eng-b', 'fra-a-lit', 'econ'],
    requiredHL: ['math-aa', 'comp-sci'], minScore: 35, minScorePerHL: 6, icon: 'Shield',
    iaEaClarification: 'IA : 6/7 en Computer Science HL. EA : Maths AA HL 6+. Très forte demande dans le secteur.',
    description: 'Cybersécurité à TU Munich — sécurité des systèmes, cryptographie et réseaux.',
    careerPaths: ['Expert cybersécurité', 'Pentester', 'RSSI', 'Analyste threat intelligence']
  },

  // ── BUSINESS & FINANCE ───────────────────────────────────────────────
  {
    id: 'bus-mcgill', name: 'Commerce & Finance (Desautels)', domain: 'business', universityId: 'mcgill',
    recommendedSubjects: ['econ', 'bus-man', 'math-ai', 'eng-a-lit', 'hist', 'fra-a-lit'],
    requiredHL: ['econ', 'math-ai'], minScore: 34, minScorePerHL: 6, icon: 'TrendingUp',
    iaEaClarification: 'IA : 6/7 en Economics et Maths AI HL. EA : bonne maîtrise des statistiques et de l\'économie.',
    description: 'Business à McGill — Desautels Faculty reconnu pour son programme commerce international.',
    careerPaths: ['Analyste financier', 'Consultant', 'Banquier d\'investissement', 'Entrepreneur']
  },
  {
    id: 'fin-lse', name: 'Finance & Economics', domain: 'business', universityId: 'lse',
    recommendedSubjects: ['econ', 'math-aa', 'bus-man', 'hist', 'eng-a-lit', 'global-pol'],
    requiredHL: ['econ', 'math-aa'], minScore: 38, minScorePerHL: 7, icon: 'TrendingUp',
    iaEaClarification: 'IA : 7/7 en Economics HL. EA : Maths AA HL 7 requis. LSE — référence mondiale en économie.',
    description: 'Finance et économie à la LSE — formation d\'élite pour les marchés financiers mondiaux.',
    careerPaths: ['Trader', 'Économiste', 'Banquier central', 'Hedge Fund Manager']
  },
  {
    id: 'mba-hec', name: 'Management (Grande École)', domain: 'business', universityId: 'hec',
    recommendedSubjects: ['econ', 'math-ai', 'bus-man', 'fra-a-lit', 'hist', 'eng-b'],
    requiredHL: ['econ', 'math-ai'], minScore: 36, minScorePerHL: 6, icon: 'Briefcase',
    iaEaClarification: 'IA : 6/7 en Économie et Maths AI HL. EA : score global 36+. HEC est classée top 3 européen en business.',
    description: 'HEC Paris — la plus grande école de commerce en France, alumni dans toutes les directions générales.',
    careerPaths: ['DG', 'Consultant McKinsey/BCG', 'Investisseur', 'Entrepreneur']
  },
  {
    id: 'bus-bocconi', name: 'Economics & Management', domain: 'business', universityId: 'bocconi',
    recommendedSubjects: ['econ', 'math-ai', 'bus-man', 'eng-a-lit', 'hist', 'fra-a-lit'],
    requiredHL: ['econ', 'math-ai'], minScore: 35, minScorePerHL: 6, icon: 'TrendingUp',
    iaEaClarification: 'IA : 6/7 en Economics HL. EA : Maths AI 6+. Bocconi est le top business en Italie, reconnue en Europe.',
    description: 'Bocconi Milan — business international, finance et économie de l\'UE.',
    careerPaths: ['Consultant', 'Analyste financier', 'Banquier', 'Manager international']
  },
  {
    id: 'bus-ie', name: 'International Business', domain: 'business', universityId: 'ie-madrid',
    recommendedSubjects: ['econ', 'bus-man', 'math-ai', 'eng-a-lit', 'hist', 'global-pol'],
    requiredHL: ['econ', 'bus-man'], minScore: 33, minScorePerHL: 6, icon: 'Globe',
    iaEaClarification: 'IA : 6/7 en Economics HL. EA : score 33+ global. IE est reconnue pour son approche entrepreneuriale.',
    description: 'Business international à IE Madrid — double culture europe/amérique, très international.',
    careerPaths: ['Manager international', 'Entrepreneur', 'Consultant interculturel', 'Diplomate économique']
  },
  {
    id: 'acc-ubc', name: 'Accounting & Finance', domain: 'business', universityId: 'ubc',
    recommendedSubjects: ['econ', 'math-ai', 'bus-man', 'eng-a-lit', 'hist', 'fra-a-lit'],
    requiredHL: ['econ', 'math-ai'], minScore: 32, minScorePerHL: 5, icon: 'Calculator',
    iaEaClarification: 'IA : 5/7 en Economics HL et Maths AI HL. EA : score 32+ global. Bonne option Canada pour CPA.',
    description: 'Comptabilité et finance à UBC — formation solide pour les métiers de l\'audit et du conseil.',
    careerPaths: ['Comptable CPA', 'Auditeur', 'Contrôleur de gestion', 'Analyste crédit']
  },

  // ── DROIT & SCIENCES POLITIQUES ────────────────────────────────────
  {
    id: 'law-oxford', name: 'Law (Jurisprudence)', domain: 'law', universityId: 'oxford',
    recommendedSubjects: ['hist', 'fra-a-lit', 'eng-a-lit', 'phil', 'global-pol', 'econ'],
    requiredHL: ['eng-a-lit', 'hist'], minScore: 39, minScorePerHL: 7, icon: 'Scale',
    iaEaClarification: 'IA : 7/7 en History et English A HL. EA : score 39+, test LNAT requis. Très compétitif.',
    description: 'Droit à Oxford — l\'un des programmes de droit les plus prestigieux du monde.',
    careerPaths: ['Avocat', 'Juge', 'Diplomate', 'Conseiller juridique international']
  },
  {
    id: 'law-cambridge', name: 'Law (LLB)', domain: 'law', universityId: 'cambridge',
    recommendedSubjects: ['hist', 'eng-a-lit', 'fra-a-lit', 'phil', 'global-pol', 'econ'],
    requiredHL: ['eng-a-lit', 'hist'], minScore: 40, minScorePerHL: 7, icon: 'Scale',
    iaEaClarification: 'IA : 7/7 en History et English A HL. EA : LNAT requis, score 40+. Cambridge Law est le top mondial.',
    description: 'Droit à Cambridge — formation théorique exceptionnelle, accès direct aux Inns of Court.',
    careerPaths: ['Barrister', 'Solicitor', 'Juge international', 'Professeur de droit']
  },
  {
    id: 'pol-sciences-po', name: 'Sciences Politiques', domain: 'law', universityId: 'sciences-po',
    recommendedSubjects: ['hist', 'global-pol', 'econ', 'fra-a-lit', 'eng-b', 'phil'],
    requiredHL: ['hist', 'global-pol'], minScore: 35, minScorePerHL: 6, icon: 'Landmark',
    iaEaClarification: 'IA : 6/7 en History et Global Politics HL. EA : score 35+. Sciences Po forme l\'élite politique et diplomatique.',
    description: 'Sciences Po Paris — formation en relations internationales, diplomatie et administration.',
    careerPaths: ['Diplomate', 'Haut fonctionnaire', 'Journaliste politique', 'Consultant géopolitique']
  },
  {
    id: 'ir-ie', name: 'Relations Internationales', domain: 'law', universityId: 'ie-madrid',
    recommendedSubjects: ['global-pol', 'hist', 'econ', 'eng-a-lit', 'fra-a-lit', 'spa-b'],
    requiredHL: ['global-pol', 'econ'], minScore: 35, minScorePerHL: 6, icon: 'Globe',
    iaEaClarification: 'IA : 6/7 en Global Politics HL. EA : score 35+. Forte culture internationale à IE.',
    description: 'Relations internationales à IE Madrid — géopolitique, diplomatie et économie mondiale.',
    careerPaths: ['Diplomate', 'Analyste géopolitique', 'ONG international', 'Fonctionnaire ONU']
  },
  {
    id: 'law-sorbonne', name: 'Droit International', domain: 'law', universityId: 'sorbonne',
    recommendedSubjects: ['hist', 'fra-a-lit', 'phil', 'global-pol', 'econ', 'eng-b'],
    requiredHL: ['fra-a-lit', 'hist'], minScore: 33, minScorePerHL: 6, icon: 'Scale',
    iaEaClarification: 'IA : 6/7 en Français A HL. EA : score 33+. Accès à Sciences Po ou ENS en complément.',
    description: 'Droit international à Paris-Sorbonne — droit public, privé et droits de l\'homme.',
    careerPaths: ['Avocat international', 'Magistrat', 'Juriste d\'entreprise', 'Conseiller juridique']
  },

  // ── ARCHITECTURE & DESIGN ────────────────────────────────────────────
  {
    id: 'arch-eth', name: 'Architecture', domain: 'architecture', universityId: 'eth-zurich',
    recommendedSubjects: ['vis-arts', 'phys', 'math-aa', 'geog', 'eng-b', 'design-tech'],
    requiredHL: ['math-aa', 'vis-arts'], minScore: 37, minScorePerHL: 6, icon: 'Building2',
    iaEaClarification: 'IA : Portfolio Arts Visuels 7/7. EA : Maths AA HL 6+. Examen d\'entrée spécifique à l\'ETH.',
    description: 'Architecture à ETH Zurich — design durable, urbanisme et innovation spatiale.',
    careerPaths: ['Architecte', 'Urbaniste', 'Designer d\'intérieur', 'Ingénieur-architecte']
  },
  {
    id: 'arch-ucl', name: 'Architecture (Bartlett)', domain: 'architecture', universityId: 'ucl',
    recommendedSubjects: ['vis-arts', 'phys', 'math-aa', 'geog', 'eng-a-lit', 'design-tech'],
    requiredHL: ['math-aa', 'vis-arts'], minScore: 37, minScorePerHL: 6, icon: 'Building2',
    iaEaClarification: 'IA : 6/7 en Arts Visuels HL. EA : Maths AA HL 6+. Bartlett School — top 3 mondial.',
    description: 'Architecture à la Bartlett (UCL) — expérimentation et architecture contemporaine.',
    careerPaths: ['Architecte primé', 'Designer spatial', 'Consultant patrimonial', 'Urbaniste']
  },
  {
    id: 'design-delft', name: 'Design Industriel', domain: 'architecture', universityId: 'delft',
    recommendedSubjects: ['design-tech', 'phys', 'math-aa', 'vis-arts', 'eng-b', 'comp-sci'],
    requiredHL: ['design-tech', 'math-aa'], minScore: 35, minScorePerHL: 6, icon: 'Pen',
    iaEaClarification: 'IA : 7/7 en Design Technology HL. EA : Maths AA HL 6+. TU Delft — leader européen en design.',
    description: 'Design industriel à TU Delft — innovation centrée utilisateur, produits et systèmes.',
    careerPaths: ['Designer produit', 'Consultant UX', 'Ingénieur innovation', 'Directeur créatif']
  },
  {
    id: 'fashion-polimi', name: 'Fashion Design', domain: 'architecture', universityId: 'polimi',
    recommendedSubjects: ['vis-arts', 'design-tech', 'bus-man', 'hist', 'eng-b', 'fra-a-lit'],
    requiredHL: ['vis-arts', 'design-tech'], minScore: 32, minScorePerHL: 6, icon: 'Shirt',
    iaEaClarification: 'IA : Portfolio Arts Visuels 7/7. EA : Design Tech HL 6+. Portfolio artistique obligatoire.',
    description: 'Fashion Design à Politecnico di Milano — capitale mondiale de la mode italienne.',
    careerPaths: ['Styliste', 'Directeur artistique', 'Brand Manager mode', 'Merchandiser']
  },
  {
    id: 'urban-plan-ucl', name: 'Urban Planning', domain: 'architecture', universityId: 'ucl',
    recommendedSubjects: ['geog', 'global-pol', 'math-ai', 'vis-arts', 'eng-a-lit', 'econ'],
    requiredHL: ['geog', 'global-pol'], minScore: 35, minScorePerHL: 6, icon: 'Map',
    iaEaClarification: 'IA : 6/7 en Géographie HL. EA : Global Politics HL 6+. Compétences analytiques et créatives.',
    description: 'Urbanisme à UCL — planification des villes durables, politiques urbaines et transport.',
    careerPaths: ['Urbaniste', 'Planificateur territorial', 'Consultant ville durable', 'Fonctionnaire municipal']
  },

  // ── SCIENCES FONDAMENTALES ───────────────────────────────────────────
  {
    id: 'phys-cambridge', name: 'Physics (Natural Sciences)', domain: 'science', universityId: 'cambridge',
    recommendedSubjects: ['phys', 'math-aa', 'chem', 'comp-sci', 'eng-a-lit', 'eng-b'],
    requiredHL: ['phys', 'math-aa'], minScore: 40, minScorePerHL: 7, icon: 'Atom',
    iaEaClarification: 'IA : 7/7 en Physics et Maths AA HL. EA : score 40-42 requis, STEP maths recommandé.',
    description: 'Physique à Cambridge — sciences naturelles, mécanique quantique et cosmologie.',
    careerPaths: ['Physicien chercheur', 'Astrophysicien', 'Ingénieur quantique', 'Professeur']
  },
  {
    id: 'phys-tum', name: 'Physique Fondamentale', domain: 'science', universityId: 'tum',
    recommendedSubjects: ['phys', 'math-aa', 'chem', 'comp-sci', 'eng-b', 'fra-a-lit'],
    requiredHL: ['phys', 'math-aa'], minScore: 38, minScorePerHL: 7, icon: 'Atom',
    iaEaClarification: 'IA : 7/7 en Physique HL. EA : Maths AA HL 7 requis. TUM est classée top 5 en physique en Europe.',
    description: 'Physique fondamentale à TU Munich — particules, condensed matter et photonique.',
    careerPaths: ['Chercheur CERN', 'Physicien quantique', 'Ingénieur laser', 'Professeur-chercheur']
  },
  {
    id: 'chem-oxford', name: 'Chemistry (MChem)', domain: 'science', universityId: 'oxford',
    recommendedSubjects: ['chem', 'math-aa', 'phys', 'bio', 'eng-a-lit', 'eng-b'],
    requiredHL: ['chem', 'math-aa', 'phys'], minScore: 39, minScorePerHL: 7, icon: 'FlaskConical',
    iaEaClarification: 'IA : 7/7 en Chemistry et Physics HL. EA : score 39+. PAT (Physics Aptitude Test) requis pour certains.',
    description: 'Chimie à Oxford — chimie organique, inorganique, physique et computationnelle.',
    careerPaths: ['Chercheur chimiste', 'Ingénieur matériaux', 'Chercheur pharmaceutique', 'Professeur']
  },
  {
    id: 'bio-toronto', name: 'Biotechnologie & Biochimie', domain: 'science', universityId: 'toronto',
    recommendedSubjects: ['bio', 'chem', 'math-aa', 'comp-sci', 'eng-a-lit', 'phys'],
    requiredHL: ['bio', 'chem'], minScore: 36, minScorePerHL: 6, icon: 'Microscope',
    iaEaClarification: 'IA : 6/7 en Biology et Chemistry HL. EA : score 36+. Toronto — excellence en recherche biomédicale.',
    description: 'Biotechnologie à Toronto — génie génétique, protéomique et innovations biomédicales.',
    careerPaths: ['Biotechnologiste', 'Chercheur biomédical', 'Bioinformaticien', 'Directeur R&D pharma']
  },
  {
    id: 'math-cambridge', name: 'Mathematics (Pure & Applied)', domain: 'science', universityId: 'cambridge',
    recommendedSubjects: ['math-aa', 'phys', 'comp-sci', 'chem', 'eng-a-lit', 'eng-b'],
    requiredHL: ['math-aa', 'phys'], minScore: 40, minScorePerHL: 7, icon: 'Pi',
    iaEaClarification: 'IA : 7/7 en Maths AA HL. EA : score 40-42 requis. STEP mathematics indispensable pour Cambridge.',
    description: 'Mathématiques pures et appliquées à Cambridge — topologie, algèbre, analyse.',
    careerPaths: ['Mathématicien', 'Statisticien', 'Actuaire', 'Chercheur quantitatif', 'Quant Finance']
  },
  {
    id: 'env-science-edinburgh', name: 'Environmental Science', domain: 'science', universityId: 'edinburgh',
    recommendedSubjects: ['bio', 'chem', 'geog', 'math-ai', 'eng-a-lit', 'env-sys'],
    requiredHL: ['bio', 'chem'], minScore: 32, minScorePerHL: 5, icon: 'Leaf',
    iaEaClarification: 'IA : 5/7 en Biology HL. EA : score 32+. Géographie et biologie très valorisées.',
    description: 'Sciences de l\'environnement à Édimbourg — écosystèmes, changement climatique et ressources.',
    careerPaths: ['Écologiste', 'Conseiller environnemental', 'Chercheur climatique', 'Consultant développement durable']
  },

  // ── HUMANITÉS & SCIENCES SOCIALES ────────────────────────────────────
  {
    id: 'psych-ucl', name: 'Psychology (BSc)', domain: 'humanities', universityId: 'ucl',
    recommendedSubjects: ['psych', 'bio', 'math-ai', 'eng-a-lit', 'fra-a-lit', 'econ'],
    requiredHL: ['psych', 'bio'], minScore: 36, minScorePerHL: 6, icon: 'Brain',
    iaEaClarification: 'IA : 6/7 en Psychology HL. EA : Biology HL 6+. UCL a l\'un des meilleurs depts de psychologie.',
    description: 'Psychologie à UCL — psychologie clinique, cognitive, sociale et neurosciences.',
    careerPaths: ['Psychologue clinicien', 'Neuropsychologue', 'Chercheur cognitif', 'Consultant RH']
  },
  {
    id: 'psych-ulb', name: 'Psychologie Clinique', domain: 'humanities', universityId: 'ulb',
    recommendedSubjects: ['psych', 'bio', 'fra-a-lit', 'math-ai', 'phil', 'eng-b'],
    requiredHL: ['psych', 'fra-a-lit'], minScore: 33, minScorePerHL: 5, icon: 'Brain',
    iaEaClarification: 'IA : 5/7 en Psychologie HL. EA : score 33+. Très bon programme francophone en Belgique.',
    description: 'Psychologie clinique à l\'ULB — formation complète en psychothérapie et psychologie de la santé.',
    careerPaths: ['Psychologue', 'Thérapeute', 'Psychanalyste', 'Conseiller scolaire']
  },
  {
    id: 'hist-oxford', name: 'History (Modern)', domain: 'humanities', universityId: 'oxford',
    recommendedSubjects: ['hist', 'eng-a-lit', 'fra-a-lit', 'phil', 'global-pol', 'anthro'],
    requiredHL: ['hist', 'eng-a-lit'], minScore: 38, minScorePerHL: 7, icon: 'BookOpen',
    iaEaClarification: 'IA : 7/7 en History et English A HL. EA : score 38+. Oxford — excellence en histoire et humanités.',
    description: 'Histoire moderne à Oxford — historiographie, civilisations et histoire globale.',
    careerPaths: ['Historien', 'Journaliste', 'Diplomate', 'Professeur', 'Chercheur patrimonial']
  },
  {
    id: 'phil-cambridge', name: 'Philosophy', domain: 'humanities', universityId: 'cambridge',
    recommendedSubjects: ['phil', 'eng-a-lit', 'hist', 'math-aa', 'global-pol', 'fra-a-lit'],
    requiredHL: ['phil', 'eng-a-lit'], minScore: 38, minScorePerHL: 7, icon: 'Lightbulb',
    iaEaClarification: 'IA : 7/7 en Philosophie et English A HL. EA : score 38-40. Cambridge — berceau de la philosophie analytique.',
    description: 'Philosophie à Cambridge — éthique, logique, métaphysique et philosophie de l\'esprit.',
    careerPaths: ['Philosophe', 'Éthicien IA', 'Consultant stratégique', 'Écrivain', 'Professeur']
  },
  {
    id: 'anthro-ucl', name: 'Anthropologie & Sociologie', domain: 'humanities', universityId: 'ucl',
    recommendedSubjects: ['anthro', 'hist', 'eng-a-lit', 'global-pol', 'psych', 'geog'],
    requiredHL: ['anthro', 'hist'], minScore: 34, minScorePerHL: 6, icon: 'Users',
    iaEaClarification: 'IA : 6/7 en Anthropologie HL. EA : History HL 6+. UCL — département référence en anthropologie.',
    description: 'Anthropologie à UCL — cultures, sociétés, ethnographie et anthropologie médicale.',
    careerPaths: ['Anthropologue', 'ONG humanitaire', 'Consultant interculturel', 'Ethnographe']
  },
  {
    id: 'edu-mcgill', name: 'Sciences de l\'Éducation', domain: 'humanities', universityId: 'mcgill',
    recommendedSubjects: ['psych', 'eng-a-lit', 'fra-a-lit', 'hist', 'math-ai', 'anthro'],
    requiredHL: ['psych', 'eng-a-lit'], minScore: 30, minScorePerHL: 5, icon: 'GraduationCap',
    iaEaClarification: 'IA : 5/7 en Psychology HL. EA : score global 30+. McGill — excellence en pédagogie bilingue.',
    description: 'Éducation à McGill — pédagogie, didactique et formation des enseignants.',
    careerPaths: ['Enseignant', 'Conseiller pédagogique', 'Directeur d\'établissement', 'Chercheur en éducation']
  },

  // ── ARTS & COMMUNICATION ─────────────────────────────────────────────
  {
    id: 'fine-arts-sorbonne', name: 'Beaux-Arts & Arts Plastiques', domain: 'arts', universityId: 'sorbonne',
    recommendedSubjects: ['vis-arts', 'fra-a-lit', 'hist', 'phil', 'eng-b', 'anthro'],
    requiredHL: ['vis-arts', 'fra-a-lit'], minScore: 30, minScorePerHL: 6, icon: 'Palette',
    iaEaClarification: 'IA : Portfolio Arts Visuels 7/7. EA : Français A HL 6+. Concours d\'entrée spécifique avec dossier artistique.',
    description: 'Beaux-Arts à la Sorbonne — peinture, sculpture, arts numériques et critique d\'art.',
    careerPaths: ['Artiste plasticien', 'Commissaire d\'exposition', 'Designer graphique', 'Critique d\'art']
  },
  {
    id: 'journalism-sciences-po', name: 'Journalisme & Médias', domain: 'arts', universityId: 'sciences-po',
    recommendedSubjects: ['fra-a-lit', 'eng-a-lit', 'hist', 'global-pol', 'econ', 'phil'],
    requiredHL: ['fra-a-lit', 'hist'], minScore: 34, minScorePerHL: 6, icon: 'Newspaper',
    iaEaClarification: 'IA : 6/7 en Français A et History HL. EA : score 34+. Sciences Po — école des grands journalistes.',
    description: 'Journalisme à Sciences Po — presse, radio, TV et médias numériques.',
    careerPaths: ['Journaliste', 'Correspondant international', 'Rédacteur en chef', 'Présentateur TV']
  },
  {
    id: 'music-edinburgh', name: 'Music Performance', domain: 'arts', universityId: 'edinburgh',
    recommendedSubjects: ['music', 'fra-a-lit', 'eng-a-lit', 'hist', 'phil', 'eng-b'],
    requiredHL: ['music', 'eng-a-lit'], minScore: 30, minScorePerHL: 6, icon: 'Music',
    iaEaClarification: 'IA : 7/7 en Music HL. EA : audition requise en plus des scores IB. Score 30+ global.',
    description: 'Musique à Édimbourg — performance, composition et musicologie.',
    careerPaths: ['Musicien professionnel', 'Compositeur', 'Musicologue', 'Directeur artistique']
  },
  {
    id: 'film-ucl', name: 'Film Studies & Production', domain: 'arts', universityId: 'ucl',
    recommendedSubjects: ['film', 'eng-a-lit', 'hist', 'vis-arts', 'fra-a-lit', 'theatre'],
    requiredHL: ['film', 'eng-a-lit'], minScore: 34, minScorePerHL: 6, icon: 'Film',
    iaEaClarification: 'IA : 6/7 en Film HL. EA : English A HL 6+. Portfolio film requis pour l\'admission.',
    description: 'Cinéma et production à UCL — réalisation, montage, production et théorie du cinéma.',
    careerPaths: ['Réalisateur', 'Producteur', 'Scénariste', 'Critique de cinéma']
  },
  {
    id: 'comm-sciences-po', name: 'Communication & Relations Publiques', domain: 'arts', universityId: 'sciences-po',
    recommendedSubjects: ['fra-a-lit', 'eng-a-lit', 'hist', 'global-pol', 'psych', 'bus-man'],
    requiredHL: ['fra-a-lit', 'global-pol'], minScore: 33, minScorePerHL: 6, icon: 'MessageSquare',
    iaEaClarification: 'IA : 6/7 en Français A HL. EA : Global Politics HL 6+. Sciences Po forme les experts en communication.',
    description: 'Communication à Sciences Po — relations publiques, lobbying et communication de crise.',
    careerPaths: ['Directeur de communication', 'Attaché de presse', 'Lobbyiste', 'Community Manager']
  },

  // ── ENVIRONNEMENT & DURABILITÉ ──────────────────────────────────────
  {
    id: 'env-eth', name: 'Ingénierie Environnementale', domain: 'environment', universityId: 'eth-zurich',
    recommendedSubjects: ['chem', 'bio', 'math-aa', 'geog', 'phys', 'env-sys'],
    requiredHL: ['chem', 'math-aa'], minScore: 37, minScorePerHL: 6, icon: 'Leaf',
    iaEaClarification: 'IA : 6/7 en Chemistry et Maths AA HL. EA : score 37+. ETH Zurich — référence en durabilité.',
    description: 'Génie environnemental à ETH — traitement des eaux, énergie propre et gestion des ressources.',
    careerPaths: ['Ingénieur environnemental', 'Consultant durabilité', 'Chercheur en énergie verte']
  },
  {
    id: 'sustain-leiden', name: 'Sustainability & Global Development', domain: 'environment', universityId: 'leiden',
    recommendedSubjects: ['geog', 'global-pol', 'econ', 'bio', 'math-ai', 'env-sys'],
    requiredHL: ['geog', 'global-pol'], minScore: 32, minScorePerHL: 5, icon: 'Globe2',
    iaEaClarification: 'IA : 5/7 en Geography HL. EA : score 32+. Programme très tourné vers les ODD de l\'ONU.',
    description: 'Développement durable à Leiden — gouvernance, changement climatique et aide internationale.',
    careerPaths: ['Chargé de mission ODD', 'Analyste politique climat', 'Coordinateur ONG', 'Consultant ESG']
  },
  {
    id: 'renewable-kth', name: 'Énergies Renouvelables', domain: 'environment', universityId: 'kth',
    recommendedSubjects: ['phys', 'chem', 'math-aa', 'geog', 'comp-sci', 'eng-b'],
    requiredHL: ['phys', 'math-aa'], minScore: 35, minScorePerHL: 6, icon: 'Sun',
    iaEaClarification: 'IA : 6/7 en Physique et Maths AA HL. EA : score 35+. KTH — leader nordique en énergies propres.',
    description: 'Énergies renouvelables à KTH — solaire, éolien, stockage et transition énergétique.',
    careerPaths: ['Ingénieur énergie solaire', 'Consultant transition énergétique', 'Chercheur batterie']
  },
  {
    id: 'agro-um6p', name: 'Agrosciences & Food Systems', domain: 'environment', universityId: 'um6p',
    recommendedSubjects: ['bio', 'chem', 'math-ai', 'geog', 'env-sys', 'econ'],
    requiredHL: ['bio', 'chem'], minScore: 30, minScorePerHL: 5, icon: 'Sprout',
    iaEaClarification: 'IA : 5/7 en Biology et Chemistry HL. EA : score 30+. UM6P est une université africaine de classe mondiale.',
    description: 'Agrosciences à UM6P — agriculture durable, systèmes alimentaires et sécurité alimentaire.',
    careerPaths: ['Agronome', 'Expert sécurité alimentaire', 'Chercheur en agrotechnologie', 'Consultant FAO']
  },
];

export const SOUTIEN_SCOLAIRE_CONTENT = {
  pei: {
    title: "Programme d'Éducation Intermédiaire (PEI / MYP)",
    description: "Le PEI est un cadre pédagogique rigoureux pour les élèves de 11 à 16 ans. Il encourage la créativité, la pensée critique et la connexion entre les disciplines académiques et le monde réel.",
    keyPoints: [
      "8 groupes de matières : langues, sciences, mathématiques, arts, éducation physique et design.",
      "Contextes mondiaux : L'apprentissage est ancré dans des réalités concrètes pour donner du sens aux études.",
      "Projet personnel (PEI 5) : Travail de recherche indépendant CRUCIAL — valorisé par les universités mondiales.",
      "E-Assessment (PEI 5) : Examens électroniques validant les acquis et préparant la rigueur du DP.",
      "Compétences ATL : Apprendre à apprendre — pensée critique, recherche, communication.",
      "Service en tant qu'action : Engagement communautaire développant l'empathie et la responsabilité."
    ]
  },
  dp: {
    title: "Programme du Diplôme (DP)",
    description: "Le DP est un programme d'enseignement rigoureux destiné aux élèves de 16 à 19 ans, reconnu par les meilleures universités mondiales pour préparer à la réussite académique et professionnelle.",
    keyPoints: [
      "Structure des 6 groupes : 6 matières (3 Niveau Supérieur HL + 3 Niveau Moyen SL).",
      "Règle de remplacement du Groupe 6 : Si pas d'Arts, choisir un 2ème G3 ou G4.",
      "Le Mémoire (EE) : Recherche autonome de 4 000 mots, excellente préparation à l'université.",
      "Théorie de la Connaissance (TdC) : Réflexion critique sur la nature du savoir.",
      "CAS (Créativité, Activité, Service) : Équilibre personnel à travers des projets concrets.",
      "Évaluation mixte : Travaux internes (IA 20-30%) + Examens finaux (EA 70-80%)."
    ]
  },
  contacts: [
    { role: "Conseillère de Soutien Scolaire", name: "Zohra Zidane", email: "zohrazidane@alkawthar.edu.sa" },
    { role: "Conseiller d'Orientation Universitaire", name: "Mohamed Cherif", email: "mohamed_sherif@alkawthar.edu.sa" }
  ]
};
