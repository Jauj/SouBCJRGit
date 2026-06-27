# Socialisme ou Barbarie - Site Web

Site web du **Cercle de Jeunes Révolutionnaires** hebergé sur GitHub Pages.

---

## 📌 Table des matières

1. [🚀 Déploiement initial](#-déploiement-initial)
2. [📂 Structure du projet](#-structure-du-projet)
3. [✍️ Ajouter du contenu](#-ajouter-du-contenu)
   - [Ajouter un article](#ajouter-un-article)
   - [Ajouter un bulletin PDF](#ajouter-un-bulletin-pdf)
   - [Modifier les pages statiques](#modifier-les-pages-statiques)
4. [🖼️ Gestion des images et PDFs](#-gestion-des-images-et-pdfs)
   - [Images de couverture des bulletins](#images-de-couverture-des-bulletins)
   - [Héberger les PDFs sur Google Drive](#héberger-les-pdfs-sur-google-drive)
5. [📧 Newsletter](#-newsletter)
6. [🔧 CMS (Gestion du contenu)](#-cms-gestion-du-contenu)
7. [📊 Référencement (SEO)](#-référencement-seo)
8. [🔄 Mise à jour et maintenance](#-mise-à-jour-et-maintenance)
9. [⚠️ Dépannage](#-dépannage)
10. [📞 Support](#-support)

---

## 🚀 Déploiement initial

### Prérequis

- Un compte **GitHub** (vous avez déjà le dépôt : `https://github.com/Jauj/SouBCJRGit`)
- **Node.js** (version 20 ou supérieure) installé sur votre machine
- Un navigateur web moderne (Chrome, Firefox, Edge)

### Étapes pour déployer le site

1. **Cloner le dépôt** (si ce n'est pas déjà fait) :
   ```bash
   git clone https://github.com/Jauj/SouBCJRGit.git
   cd SouBCJRGit
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```
   *(Cela installe tous les paquets nécessaires : SvelteKit, Vite, etc.)*

3. **Builder le site** :
   ```bash
   npm run build
   ```
   *(Crée un dossier `build/` avec le site statique)*

4. **Configurer GitHub Pages** :
   - Allez sur : `https://github.com/Jauj/SouBCJRGit/settings/pages`
   - **Source** : Sélectionnez **"GitHub Actions"**
   - **Workflows** : Le fichier `.github/workflows/deploy.yml` est déjà configuré
   - ⏳ Attendez quelques minutes, votre site sera disponible à :
     **`https://jauj.github.io/SouBCJRGit/`**

5. **Vérifier le déploiement** :
   - Allez sur `https://jauj.github.io/SouBCJRGit/`
   - Le site devrait s'afficher correctement
   - Si vous voyez une page 404, attendez 5-10 minutes et rafraîchissez

> ✅ **Le workflow se déclenche automatiquement** à chaque `git push` vers la branche `main`. Vous n'avez pas besoin de builder manuellement.

---

## 📂 Structure du projet

```
SouBCJRGit/
├── src/                          # Code source du site
│   ├── routes/                   # Pages du site
│   │   ├── +layout.svelte        # Layout principal (menu, footer)
│   │   ├── +page.svelte          # Page d'accueil
│   │   ├── article/
│   │   │   └── [slug]/
│   │   │       ├── +page.js      # Configuration des articles
│   │   │       └── +page.svelte  # Template des articles
│   │   ├── publications/
│   │   │   └── +page.svelte     # Page des publications
│   │   ├── index-thematique/
│   │   │   └── +page.svelte     # Index thématique
│   │   ├── liens/
│   │   │   └── +page.svelte      # Page des liens
│   │   └── qui-sommes-nous/
│   │       └── +page.svelte     # Page "Qui sommes-nous"
│   ├── lib/                      # Bibliothèques et données
│   │   ├── data.js               # ⭐ Données des bulletins (à modifier !)
│   │   ├── posts.js              # Fonctions pour charger les articles
│   │   └── types.js              # Types JSDoc
│   └── app.html                 # Template HTML principal
├── static/                       # Fichiers statiques (accessibles directement)
│   ├── images/                  # ⭐ Images du site
│   │   └── README.md             # Instructions pour les images
│   ├── pdfs/                     # ⭐ PDFs des bulletins
│   │   └── README.md             # Instructions pour les PDFs
│   ├── logo-cjr.jpg             # Logo du CJR
│   ├── robots.txt               # Configuration pour les robots
│   ├── sitemap.xml              # Sitemap pour le référencement
│   └── admin/                   # CMS (Netlify CMS)
│       ├── index.html
│       └── config.yml
├── .github/
│   └── workflows/
│       └── deploy.yml           # Configuration du déploiement automatique
├── package.json                 # Configuration Node.js
├── svelte.config.js             # Configuration SvelteKit
├── vite.config.js               # Configuration Vite
└── README.md                    # Ce fichier
```

---

## ✍️ Ajouter du contenu

### Ajouter un article

Les articles sont écrits en **Markdown** (format `.md`) et placés dans le dossier `src/posts/`.

#### Étapes :

1. **Créer un nouveau fichier Markdown** dans `src/posts/` :
   - Nom du fichier : `nom-de-l-article.md` (en minuscules, sans espaces)
   - Exemple : `nouvelle-analyse-economique.md`

2. **Structure d'un article** :
   ```markdown
   ---
   title: "Titre de l'article"
   slug: nom-de-l-article
   date: 2025-06-27
   dateAffichee: 27 juin 2025
   description: "Résumé court de l'article (affiché dans les listes)"
   ---

   # Titre de l'article

   Contenu de l'article en Markdown...

   ## Sous-titre

   - Liste à puces
   - Autre élément

   **Texte en gras** et *italique*
   ```

3. **Indexation (tags)** :
   Pour ajouter des tags à votre article, ajoutez une section `indexations` en YAML :
   ```markdown
   ---
   title: "Exemple"
   slug: exemple
   date: 2025-06-27
   dateAffichee: 27 juin 2025
   description: "Description"
   indexations:
     - categorie: "Théorie"
       terme: "Marxisme"
     - categorie: "Théorie"
       terme: "Luxemburgisme"
   ---
   ```

4. **Vérifier l'article** :
   - Lancez le serveur de développement : `npm run dev`
   - Allez sur `http://localhost:5173/article/nom-de-l-article`
   - Si tout va bien, faites un commit et push :
     ```bash
     git add src/posts/nom-de-l-article.md
     git commit -m "Ajout article: Titre de l'article"
     git push origin main
     ```

> 💡 **Astuce** : Le slug doit être unique et sera utilisé dans l'URL : `https://jauj.github.io/SouBCJRGit/article/nom-de-l-article`

---

### Ajouter un bulletin PDF

#### Méthode 1 : Hébergement sur Google Drive (recommandé)

1. **Uploader le PDF sur Google Drive** :
   - Allez sur [https://drive.google.com](https://drive.google.com)
   - Cliquez sur **"Nouveau" → "Téléchargement de fichiers"**
   - Sélectionnez votre PDF (ex: `soub-n4.pdf`)

2. **Rendre le PDF accessible publiquement** :
   - Faites un clic droit sur le fichier → **"Partager"**
   - Cliquez sur **"Modifier"** à côté de "Restreint"
   - Sélectionnez **"Toute personne possédant le lien"**
   - Cliquez sur **"Copier le lien"**

3. **Modifier le lien dans `data.js`** :
   - Ouvrez `src/lib/data.js`
   - Trouvez l'entrée correspondante ou ajoutez-en une nouvelle :
     ```javascript
     {
       numero: 4,
       titre: 'Nouveau bulletin - Analyse 2025',
       date: '2025-07-15',
       fichier: '/pdfs/soub-n4.pdf',  // Garder pour compatibilité
       lienGoogleDrive: 'https://drive.google.com/file/d/VOTRE_ID_DU_FICHIER/view?usp=drive_link',  // ⭐ À remplacer
       couverture: '/images/couverture-n4.jpg',  // Image de couverture
       description: 'Description du bulletin...'
     }
     ```

4. **Ajouter l'image de couverture** :
   - Placez une image `couverture-n4.jpg` dans `static/images/`
   - Format recommandé : **600x800px**, JPG, < 500 Ko

5. **Commiter et pousser** :
   ```bash
   git add src/lib/data.js static/images/couverture-n4.jpg
   git commit -m "Ajout bulletin N°4 avec couverture"
   git push origin main
   ```

#### Méthode 2 : Hébergement directement dans le dépôt (alternative)

1. **Placer le PDF dans `static/pdf/`** :
   ```bash
   # Copier votre PDF
   cp soub-n4.pdf static/pdf/
   ```

2. **Modifier `data.js`** :
   ```javascript
   {
     numero: 4,
     titre: 'Nouveau bulletin',
     date: '2025-07-15',
     fichier: '/pdfs/soub-n4.pdf',
     lienGoogleDrive: '/pdfs/soub-n4.pdf',  // Lien local
     couverture: '/images/couverture-n4.jpg',
     description: 'Description...'
   }
   ```

3. **Commiter et pousser** (les PDFs peuvent être lourds) :
   ```bash
   git add static/pdf/soub-n4.pdf src/lib/data.js
   git commit -m "Ajout PDF bulletin N°4"
   git push origin main
   ```

---

### Modifier les pages statiques

Les pages statiques (Qui sommes-nous, Liens, etc.) sont dans `src/routes/[nom-de-la-page]/+page.svelte`.

#### Exemple : Modifier "Qui sommes-nous"

1. Ouvrir `src/routes/qui-sommes-nous/+page.svelte`
2. Modifier le contenu HTML directement
3. Le titre, description et meta tags sont dans la section `<svelte:head>`

#### Exemple : Modifier les liens

1. Ouvrir `src/lib/data.js`
2. Modifier le tableau `LISTE_LIENS` :
   ```javascript
   export const LISTE_LIENS = [
     {
       nom: 'Nouveau Lien',
       url: 'https://exemple.com',
       description: 'Description du lien'
     },
     // ... autres liens
   ];
   ```

---

## 🖼️ Gestion des images et PDFs

### Images de couverture des bulletins

- **Dossier** : `static/images/`
- **Noms de fichiers** : `couverture-n1.jpg`, `couverture-n2.jpg`, etc.
- **Format recommandé** :
  - **Ratio** : 3:4 (portrait)
  - **Taille** : 600x800 pixels
  - **Format** : JPG ou PNG
  - **Poids** : < 500 Ko par image
  - **Qualité** : Bonne qualité mais optimisée pour le web

#### Outils pour redimensionner les images :

- **En ligne** : [https://resizeimage.net](https://resizeimage.net)
- **Logiciel** : GIMP (gratuit), Photoshop, Paint.NET
- **Commande ligne** (si vous avez ImageMagick) :
  ```bash
  magick input.jpg -resize 600x800 -quality 85 output.jpg
  ```

### Héberger les PDFs sur Google Drive

#### Pour obtenir un lien direct :

1. Uploader le PDF sur Google Drive
2. **Clique droit → Partager → Copier le lien**
3. Le lien ressemble à :
   ```
   https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/view?usp=sharing
   ```
4. **Remplacer `view?usp=sharing` par `view?usp=drive_link`** :
   ```
   https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/view?usp=drive_link
   ```

#### Problèmes courants :

- **"Accès refusé"** : Vérifiez que le partage est bien sur "Toute personne avec le lien"
- **"Fichier introuvable"** : Vérifiez l'ID du fichier dans l'URL
- **Lien qui change** : Les liens Google Drive sont stables tant que vous ne modifiez pas les permissions

---

## 📧 Newsletter

### Fonctionnement actuel

Le site utilise un système **simplifié** sans dépendance externe :

1. L'utilisateur saisit son email dans le formulaire
2. Un message s'affiche : **"Merci ! Votre email : [email]\n\nCopiez cette adresse dans votre liste de diffusion privée."**
3. Vous devez **copier manuellement** les emails pour les ajouter à votre liste

### Options pour gérer les emails

#### Option 1 : Liste manuelle (la plus simple)

- Créer un fichier texte `newsletter-emails.txt`
- Copier-coller les emails dedans
- Utiliser ce fichier pour envoyer vos newsletters

#### Option 2 : Google Groups (recommandé)

1. **Créer un groupe Google** :
   - Allez sur [https://groups.google.com](https://groups.google.com)
   - Cliquez sur **"Créer un groupe"**
   - Donnez un nom : `cjr-newsletter`
   - Configurez le groupe comme **"Liste de diffusion"**

2. **Ajouter des membres** :
   - Allez dans **"Gérer" → "Membres"**
   - Cliquez sur **"Ajouter des membres"**
   - Collez les emails un par un ou en bloc

3. **Envoyer une newsletter** :
   - Allez dans le groupe
   - Cliquez sur **"Nouvelle discussion"** ou **"Envoyer un email au groupe"**
   - Écrivez votre newsletter
   - Tous les membres recevront l'email

#### Option 3 : Google Contacts + Gmail

1. **Créer un groupe de contacts** :
   - Allez sur [https://contacts.google.com](https://contacts.google.com)
   - Créez un label "Newsletter CJR"
   - Ajoutez les emails à ce label

2. **Envoyer un email groupé** :
   - Dans Gmail, cliquez sur **"Rédiger"**
   - Dans le champ "À", tapez le nom du label
   - Tous les contacts du label seront ajoutés

---

## 🔧 CMS (Gestion du contenu)

Le site inclut **Netlify CMS** (anciennement Decap CMS), un système de gestion de contenu qui vous permet d'éditer le site sans toucher au code.

### Accéder au CMS

- **URL** : `https://jauj.github.io/SouBCJRGit/admin/`
- **Ou depuis le site** : Cliquez sur l'icône 📝 (CMS) dans le menu des réseaux sociaux

### Configuration du CMS

Le CMS est configuré dans `static/admin/config.yml` :

```yaml
backend:
  name: github
  repo: Jauj/SouBCJRGit
  branch: main
  # Pour que le CMS fonctionne, vous devez configurer l'authentification
```

### Pour activer le CMS complet :

> ⚠️ **Le CMS nécessite une configuration supplémentaire pour fonctionner sur GitHub Pages**

#### Option A : Utiliser Netlify (recommandé pour le CMS)

1. **Déployer sur Netlify** (en plus de GitHub Pages) :
   - Allez sur [https://app.netlify.com](https://app.netlify.com)
   - Importez votre dépôt GitHub
   - Netlify détectera automatiquement la configuration CMS

2. **Configurer l'authentification GitHub** :
   - Dans Netlify, allez dans **Site settings → Access control → OAuth**
   - Connectez votre compte GitHub
   - Autorisez Netlify à accéder à votre dépôt

3. **Le CMS fonctionnera** à l'URL : `https://votre-site.netlify.app/admin/`

#### Option B : Utiliser GitHub Pages avec Git Gateway (avancé)

Si vous voulez absolument utiliser le CMS sur GitHub Pages :

1. **Installer l'application Netlify CMS Git Gateway** :
   - Suivez : [https://www.netlifycms.org/docs/authentication-backends/#git-gateway](https://www.netlifycms.org/docs/authentication-backends/#git-gateway)

2. **Configurer `config.yml`** :
   ```yaml
   backend:
     name: git-gateway
     branch: main
   ```

> 💡 **Pour l'instant, utilisez simplement le workflow manuel** (éditer les fichiers et pousser sur GitHub). Le bouton CMS dans le menu permet d'accéder à l'interface, mais l'authentification nécessite une configuration supplémentaire.

---

## 📊 Référencement (SEO)

Le site est **optimisé pour le référencement** (fixant les problèmes de SPA du site Firebase original) :

### ✅ Ce qui est déjà configuré :

1. **Pages statiques** : Chaque page est pré-générée en HTML (pas de JavaScript requis)
2. **Meta tags** : Titres, descriptions, keywords sur toutes les pages
3. **Open Graph** : Pour le partage sur les réseaux sociaux
4. **JSON-LD** : Données structurées pour Google
5. **Sitemap** : `https://jauj.github.io/SouBCJRGit/sitemap.xml`
6. **robots.txt** : `https://jauj.github.io/SouBCJRGit/robots.txt`
7. **URLs propres** : Pas de `#` dans les URLs (contrairement à une SPA classique)

### Pour améliorer le référencement :

1. **Soumettre à Google Search Console** :
   - Allez sur [https://search.google.com/search-console](https://search.google.com/search-console)
   - Ajoutez votre propriété : `https://jauj.github.io/SouBCJRGit/`
   - Soumettez le sitemap : `https://jauj.github.io/SouBCJRGit/sitemap.xml`

2. **Mettre à jour le sitemap** :
   - Le fichier `static/sitemap.xml` contient les pages principales
   - Pour ajouter une nouvelle page, ajoutez une entrée manuellement

3. **Vérifier l'indexation** :
   - Dans Google, tapez : `site:jauj.github.io/SouBCJRGit`
   - Vous devriez voir vos pages apparaître dans les résultats

---

## 🔄 Mise à jour et maintenance

### Mettre à jour les dépendances

Occasionnellement, mettez à jour les dépendances :

```bash
npm update
```

Ou pour une mise à jour majeure :
```bash
npm install
```

### Vérifier le build localement

Avant de pousser des changements, testez le build :

```bash
npm run build
```

Si le build échoue, corrigez les erreurs avant de commiter.

### Serveur de développement

Pour travailler localement avec rafraîchissement automatique :

```bash
npm run dev
```

- Le site sera disponible à : `http://localhost:5173/`
- Les modifications seront visibles **instantanément**
- Pour arrêter : `Ctrl + C`

### Workflow typique pour une modification :

```bash
# 1. Faire un pull des dernières modifications
.git pull origin main

# 2. Créer une nouvelle branche (optionnel mais recommandé)
git checkout -b ma-nouvelle-fonctionnalite

# 3. Faire vos modifications (fichiers, articles, etc.)

# 4. Tester localement
npm run dev

# 5. Builder pour vérifier
npm run build

# 6. Commiter
.git add .
git commit -m "Description des modifications"

# 7. Pousser
.git push origin ma-nouvelle-fonctionnalite

# 8. Créer une Pull Request sur GitHub (optionnel)
# Ou si vous êtes sûr :
git checkout main
git merge ma-nouvelle-fonctionnalite
git push origin main
```

---

## ⚠️ Dépannage

### Problème : Le site ne se déploie pas après un push

**Solutions** :

1. **Vérifiez le workflow** :
   - Allez sur : `https://github.com/Jauj/SouBCJRGit/actions`
   - Vérifiez que le workflow "Déployer sur GitHub Pages" s'est exécuté
   - Si échec, cliquez sur le workflow pour voir les logs

2. **Vérifiez la branche** :
   - Le workflow se déclenche uniquement sur la branche `main`
   - Vérifiez que vous avez poussé vers `main` :
     ```bash
     git branch
     ```
     *(Doit afficher `* main`)*

3. **Vérifiez le build local** :
   - Essayez de builder localement :
     ```bash
     npm run build
     ```
   - Si ça échoue, corrigez les erreurs

4. **Attendez quelques minutes** :
   - GitHub Pages peut mettre 5-10 minutes pour se mettre à jour

5. **Vider le cache** :
   - Essayez en navigation privée
   - Ou videz le cache de votre navigateur

### Problème : Les images/PDFs ne s'affichent pas

**Solutions** :

1. **Vérifiez les chemins** :
   - Les images doivent être dans `static/images/`
   - Les PDFs doivent être dans `static/pdf/` ou lié via Google Drive

2. **Vérifiez les majuscules** :
   - Linux/GitHub est sensible à la casse : `Image.jpg` ≠ `image.jpg`

3. **Vérifiez les liens dans `data.js`** :
   - Ouvrez `src/lib/data.js`
   - Vérifiez que les chemins sont corrects :
     ```javascript
     couverture: '/images/couverture-n1.jpg',  // Doit correspondre au fichier
     lienGoogleDrive: 'https://drive.google.com/...'  // Doit être un lien valide
     ```

### Problème : Les liens du menu ne fonctionnent pas

**Solutions** :

1. **Vérifiez le base path** :
   - Dans `svelte.config.js`, vérifiez :
     ```javascript
     paths: {
       base: '/SouBCJRGit'
     }
     ```
   - Si vous changez ce path, vous devez re-builder tout le site

2. **Vérifiez les liens dans les templates** :
   - Tous les liens doivent utiliser `{base}/page` ou `{base}/article/...`

### Problème : Le CSS ne se charge pas

**Solutions** :

1. **Vérifiez que `app.css` est importé** :
   - Dans `src/routes/+layout.svelte`, vérifiez :
     ```svelte
     <script>
       import '../app.css';
     </script>
     ```

2. **Vider le cache du navigateur**

3. **Vérifiez le build** :
   - Les fichiers CSS doivent être dans `build/_app/immutable/assets/`

### Problème : Le CMS ne fonctionne pas

**Solutions** :

1. **Le CMS nécessite un backend** :
   - Sur GitHub Pages, le CMS est en mode "lecture seule" sans configuration supplémentaire
   - Pour éditer, utilisez **Netlify** ou modifiez directement les fichiers

2. **Utilisez le workflow manuel** :
   - Modifiez les fichiers localement
   - Testez avec `npm run dev`
   - Commitez et poussez

---

## 📞 Support

### Ressources utiles :

- **SvelteKit Documentation** : [https://kit.svelte.dev](https://kit.svelte.dev)
- **Markdown Guide** : [https://www.markdownguide.org](https://www.markdownguide.org)
- **Google Drive Partage** : [https://support.google.com/drive/answer/2494822](https://support.google.com/drive/answer/2494822)
- **GitHub Pages** : [https://pages.github.com](https://pages.github.com)

### Problème persistant ?

1. **Vérifiez les logs du workflow** :
   - `https://github.com/Jauj/SouBCJRGit/actions`

2. **Testez le build localement** :
   - `npm run build`

3. **Consultez la documentation SvelteKit** :
   - [https://kit.svelte.dev/docs](https://kit.svelte.dev/docs)

---

## 🎯 Checklist avant déploiement

- [ ] J'ai ajouté mes PDFs dans `static/pdf/` OU configuré les liens Google Drive dans `data.js`
- [ ] J'ai ajouté les images de couverture dans `static/images/`
- [ ] J'ai testé le site localement avec `npm run dev`
- [ ] Le build fonctionne sans erreur (`npm run build`)
- [ ] J'ai vérifié que tous les liens fonctionnent
- [ ] J'ai mis à jour le sitemap si j'ai ajouté des pages
- [ ] J'ai commité et poussé mes modifications
- [ ] J'ai vérifié que le workflow s'est exécuté sur GitHub Actions
- [ ] J'ai vérifié le site sur `https://jauj.github.io/SouBCJRGit/`

---

## 💡 Conseils supplémentaires

1. **Noms de fichiers** :
   - Utilisez toujours des **minuscules** et des **tirets** (`-`) pour les fichiers
   - Évitez les espaces et les caractères spéciaux
   - Exemple : `mon-article.md` ✅, `Mon Article.md` ❌

2. **Images optimisées** :
   - Utilisez [TinyPNG](https://tinypng.com) ou [Squoosh](https://squoosh.app) pour compresser vos images
   - Les images légères chargent plus vite et améliorent le SEO

3. **Backup** :
   - Faites régulièrement des backups de votre dépôt
   - Vous pouvez utiliser `git clone` pour cloner le dépôt sur une autre machine

4. **Collaboration** :
   - Si plusieurs personnes travaillent sur le site, utilisez des **branches**
   - Créez une Pull Request pour chaque fonctionnalité

---

**Dernière mise à jour** : 27 juin 2025

*Généré par Mistral Vibe - Co-Authored-By: Mistral Vibe <vibe@mistral.ai>*
