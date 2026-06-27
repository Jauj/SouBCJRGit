<script>
  import { marked } from 'marked';
  import { CONTENU_A_PROPOS } from '$lib/data.js';

  const htmlContent = marked.parse(CONTENU_A_PROPOS);
</script>

<svelte:head>
  <title>Qui sommes-nous | Socialisme ou Barbarie</title>
  <meta name="description" content="Histoire et objectifs du Cercle de Jeunes Révolutionnaires. Notre lien avec Socialisme ou Barbarie et la Quatrième Internationale." />
  <meta name="keywords" content="CJR, Cercle de Jeunes Révolutionnaires, Socialisme ou Barbarie, histoire, objectifs, Quatrième Internationale, marxisme, trotskysme, révolution" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://jauj.github.io/SouBCJRGit/qui-sommes-nous" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jauj.github.io/SouBCJRGit/qui-sommes-nous" />
  <meta property="og:title" content="Qui sommes-nous | Socialisme ou Barbarie" />
  <meta property="og:description" content="Histoire et objectifs du Cercle de Jeunes Révolutionnaires. Notre lien avec Socialisme ou Barbarie et la Quatrième Internationale." />
  <meta property="og:image" content="https://jauj.github.io/SouBCJRGit/logo-cjr.jpg" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://jauj.github.io/SouBCJRGit/qui-sommes-nous" />
  <meta name="twitter:title" content="Qui sommes-nous | Socialisme ou Barbarie" />
  <meta name="twitter:description" content="Histoire et objectifs du Cercle de Jeunes Révolutionnaires. Notre lien avec Socialisme ou Barbarie et la Quatrième Internationale." />
  <meta name="twitter:image" content="https://jauj.github.io/SouBCJRGit/logo-cjr.jpg" />
  
  <!-- Données structurées JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Qui sommes-nous | Socialisme ou Barbarie",
    "url": "https://jauj.github.io/SouBCJRGit/qui-sommes-nous",
    "description": "Histoire et objectifs du Cercle de Jeunes Révolutionnaires. Notre lien avec Socialisme ou Barbarie et la Quatrième Internationale.",
    "publisher": {
      "@type": "Organization",
      "name": "Cercle de Jeunes Révolutionnaires",
      "url": "https://jauj.github.io/SouBCJRGit/",
      "logo": "https://jauj.github.io/SouBCJRGit/logo-cjr.jpg",
      "foundingDate": "2019",
      "description": "Organisation marxiste révolutionnaire travaillant à la construction d'une Internationale Révolutionnaire de la Jeunesse"
    }
  }
  </script>
</svelte:head>

<h1 class="page-title">Qui sommes nous ?</h1>

<div class="article-body">
  {@html htmlContent}
</div>