# Alkawthar IB PathFinder

Un système d'orientation intelligent conçu spécifiquement pour les élèves des **Écoles Internationales Alkawthar**. Cet outil aide les élèves de PEI5 et DP1 à choisir leurs matières du Baccalauréat International (IB) en fonction de leurs ambitions universitaires mondiales.

## 🚀 Fonctionnalités

- **Simulateur de Choix de Matières (IB Wizard)** : Validation stricte des règles de l'IB (6 groupes, HL/SL, remplacement du Groupe 6).
- **Orientation Universitaire** : Base de données mondiale (France, UK, Canada, USA, Maroc, Suisse, Espagne, Belgique, Allemagne, Pays-Bas).
- **IA Advisor** : Conseils personnalisés basés sur les matières choisies et les objectifs de carrière (via Google Gemini API).
- **Soutien Scolaire** : Guide complet sur les programmes PEI (MYP) et DP.
- **Design Moderne** : Interface "Bento Grid" responsive et élégante.

## 🛠️ Installation Locale

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-compte/alkawthar-ib-pathfinder.git
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Créez un fichier `.env` à la racine et ajoutez votre clé API :
   ```env
   VITE_GEMINI_API_KEY=votre_cle_api
   ```
4. Lancez le projet :
   ```bash
   npm run dev
   ```

## 🌐 Déploiement sur Vercel

Ce projet est optimisé pour Vercel. Lors du déploiement, n'oubliez pas d'ajouter la variable d'environnement `GEMINI_API_KEY` dans les paramètres de votre projet Vercel.

## 🎓 À propos d'Alkawthar
Les Écoles Internationales Alkawthar sont dédiées à l'excellence académique à travers les programmes de l'IB, préparant les élèves à devenir des citoyens du monde informés et responsables.

---
© 2024 Alkawthar International School - Service d'Orientation IB
