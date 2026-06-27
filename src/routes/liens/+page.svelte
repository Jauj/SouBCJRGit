<script>
  import { LISTE_LIENS } from '$lib/data.js';
</script>

<svelte:head>
  <title>Ressources Révolutionnaires | Socialisme ou Barbarie</title>
  <meta name="description" content="Liens vers les archives marxistes, le projet Trotsky et les organisations sœurs pour la construction de l'Internationale." />
  <meta name="keywords" content="marxisme, trotskysme, liens, ressources, archives, organisations, Internationale, mouvement ouvrier" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://jauj.github.io/SouBCJRGit/liens" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jauj.github.io/SouBCJRGit/liens" />
  <meta property="og:title" content="Ressources Révolutionnaires | Socialisme ou Barbarie" />
  <meta property="og:description" content="Liens vers les archives marxistes, le projet Trotsky et les organisations sœurs pour la construction de l'Internationale." />
  <meta property="og:image" content="https://jauj.github.io/SouBCJRGit/logo-cjr.jpg" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://jauj.github.io/SouBCJRGit/liens" />
  <meta name="twitter:title" content="Ressources Révolutionnaires | Socialisme ou Barbarie" />
  <meta name="twitter:description" content="Liens vers les archives marxistes, le projet Trotsky et les organisations sœurs pour la construction de l'Internationale." />
  <meta name="twitter:image" content="https://jauj.github.io/SouBCJRGit/logo-cjr.jpg" />
  
  <!-- Données structurées JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Ressources Révolutionnaires | Socialisme ou Barbarie",
    "url": "https://jauj.github.io/SouBCJRGit/liens",
    "description": "Liens vers les archives marxistes, le projet Trotsky et les organisations sœurs pour la construction de l'Internationale.",
    "publisher": {
      "@type": "Organization",
      "name": "Cercle de Jeunes Révolutionnaires",
      "url": "https://jauj.github.io/SouBCJRGit/",
      "logo": "https://jauj.github.io/SouBCJRGit/logo-cjr.jpg"
    }
  }
  </script>
</svelte:head>

<h1 class="page-title">Liens</h1>

<div class="liens-grid">
  {#each LISTE_LIENS as lien}
    <a href={lien.url} target="_blank" rel="noopener noreferrer" class="lien-card">
      <div class="lien-header">
        <span class="lien-name">{lien.nom}</span>
        <span class="lien-visit">VISITER &nearr;</span>
      </div>
      <p class="lien-desc">{lien.description}</p>
    </a>
  {/each}
</div>