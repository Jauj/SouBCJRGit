// Données statiques : numéros PDF, liens et contenu "Qui sommes nous"

export const LISTE_NUMEROS = [
  {
    numero: 1,
    titre: 'Premier bulletin — Fondation du CJR',
    date: '2025-01-15',
    fichier: '/pdfs/soub-n1.pdf',
    // Lien Google Drive (à remplacer par vos vrais liens)
    lienGoogleDrive: 'https://drive.google.com/file/d/VOTRE_ID_1/view?usp=drive_link',
    // URL de l'image de couverture (première page du PDF)
    couverture: '/images/couverture-n1.jpg',
    description: 'Éditorial de fondation, nos statuts, premier appel à la construction.'
  },
  {
    numero: 2,
    titre: 'Crise du capitalisme et intervention de masse',
    date: '2025-04-01',
    fichier: '/pdfs/soub-n2.pdf',
    lienGoogleDrive: 'https://drive.google.com/file/d/VOTRE_ID_2/view?usp=drive_link',
    couverture: '/images/couverture-n2.jpg',
    description: 'Analyse de la crise économique, perspectives d\'intervention dans les luttes sociales.'
  },
  {
    numero: 3,
    titre: 'Écologie, question nationale et internationalisme',
    date: '2025-09-01',
    fichier: '/pdfs/soub-n3.pdf',
    lienGoogleDrive: 'https://drive.google.com/file/d/VOTRE_ID_3/view?usp=drive_link',
    couverture: '/images/couverture-n3.jpg',
    description: 'Contributions sur la crise écologique, la question nationale et la construction de l\'Internationale.'
  }
];

export const LISTE_LIENS = [
  {
    nom: 'Archives Rosa Luxemburg',
    url: 'https://www.marxists.org/francais/luxembur/index.htm',
    description: 'Textes fondamentaux de Rosa Luxemburg en français.'
  },
  {
    nom: 'Marxists Internet Archive',
    url: 'https://www.marxists.org/',
    description: 'La plus grande bibliothèque numérique de textes marxistes.'
  },
  {
    nom: 'Critique Sociale',
    url: 'https://www.critique-sociale.info/',
    description: "Revue de réflexion et de combat pour l'émancipation."
  },
  {
    nom: 'Contretemps',
    url: 'https://www.contretemps.eu/',
    description: 'Revue de critique communiste et de réflexion stratégique.'
  }
];

export const CONTENU_A_PROPOS = `
## Notre Mission

"Socialisme ou Barbarie" est un espace de réflexion politique dédié à l'analyse critique de la société contemporaine.

### Fondements théoriques

Inspiré par les travaux de **Rosa Luxemburg** et les courants de la pensée marxiste hétérodoxe, ce blog explore les tensions entre la transition vers une société socialiste et la régression vers de nouvelles formes de barbarie.

### Objectifs

Notre objectif est de fournir des outils théoriques pour :

*   **Comprendre le présent** : Analyser les rapports de force et les contradictions du capitalisme moderne.
*   **Imaginer un futur émancipateur** : Proposer des pistes de réflexion pour une transformation radicale de la société.
*   **Diffuser la pensée critique** : Rendre accessible les théories révolutionnaires à un public large.

> "La liberté, c'est toujours la liberté de celui qui pense autrement." — Rosa Luxemburg

Pour toute question ou contribution, n'hésitez pas à nous contacter via les liens en bas de page.
`;