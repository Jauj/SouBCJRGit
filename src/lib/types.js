/**
 * Types et interfaces pour l'application Socialisme ou Barbarie
 * Basé sur les types du site Firebase original
 */

/**
 * Structure pour l'indexation d'un article
 * @typedef {Object} Indexation
 * @property {string} categorie - La catégorie de l'indexation
 * @property {string} terme - Le terme spécifique de l'indexation
 */

/**
 * Structure complète d'un article
 * @typedef {Object} Article
 * @property {string} [id] - Identifiant unique (optionnel)
 * @property {string} title - Titre de l'article
 * @property {string} [slug] - URL-friendly version of the title
 * @property {string} description - Court résumé affiché dans les listes
 * @property {string} body - Texte complet au format Markdown
 * @property {string} date - Date au format AAAA-MM-JJ (pour le tri)
 * @property {string} dateAffichee - Date telle qu'elle apparaîtra sur le site
 * @property {Indexation[]} [indexations] - Liste des tags pour l'index
 * @property {string} [author] - Auteur de l'article
 * @property {string} [category] - Catégorie de l'article
 * @property {string} [pdfUrl] - URL vers un fichier PDF
 */

/**
 * Structure pour un bulletin (PDF)
 * @typedef {Object} Bulletin
 * @property {string} [id] - Identifiant unique
 * @property {string} numero - Numéro du bulletin
 * @property {string} [titre] - Titre optionnel
 * @property {string} date - Date de parution
 * @property {string} couvertureUrl - URL de l'image de couverture
 * @property {string} pdfUrl - URL du fichier PDF
 * @property {number} ordre - Pour le tri
 */

/**
 * Structure pour un lien utile
 * @typedef {Object} LienRessource
 * @property {string} [id] - Identifiant unique
 * @property {string} nom - Nom du lien
 * @property {string} url - URL du lien
 * @property {string} description - Description du lien
 */

/**
 * Structure pour les données statiques du site
 * @typedef {Object} SiteData
 * @property {string} titre - Titre du site
 * @property {string} description - Description du site
 * @property {string[]} keywords - Mots-clés du site
 * @property {string} url - URL du site
 * @property {string} logoUrl - URL du logo
 */

/**
 * Structure pour la navigation
 * @typedef {Object} NavItem
 * @property {string} label - Texte du lien
 * @property {string} href - URL du lien
 */

/**
 * Structure pour le SEO
 * @typedef {Object} SEOData
 * @property {string} title - Titre de la page
 * @property {string} description - Description de la page
 * @property {string} canonicalUrl - URL canonique
 * @property {string} ogType - Type Open Graph
 * @property {string} [ogImage] - Image Open Graph
 * @property {string[]} [keywords] - Mots-clés
 */

// Exporter les types pour JSDoc
module.exports = {
	// Ces exportations sont principalement pour la documentation
	// Les types sont disponibles via JSDoc
};