<script>
  import { loadIndex } from '$lib/posts.js';
  import { base } from '$app/paths';

  const indexData = loadIndex();
</script>

<svelte:head>
  <title>Index Thématique | Socialisme ou Barbarie</title>
  <meta name="description" content="Naviguez par concepts : Front Unique, Dualité de pouvoir, Dialectique, Rosa Luxemburg. Le lexique de la révolution." />
  <meta name="keywords" content="marxisme, trotskysme, index, thématique, concepts, front unique, Rosa Luxemburg, Socialisme ou Barbarie, CJR, lexique, révolution" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://jauj.github.io/SouBCJRGit/index-thematique" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jauj.github.io/SouBCJRGit/index-thematique" />
  <meta property="og:title" content="Index Thématique | Socialisme ou Barbarie" />
  <meta property="og:description" content="Naviguez par concepts : Front Unique, Dualité de pouvoir, Dialectique, Rosa Luxemburg. Le lexique de la révolution." />
  <meta property="og:image" content="https://jauj.github.io/SouBCJRGit/logo-cjr.jpg" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://jauj.github.io/SouBCJRGit/index-thematique" />
  <meta name="twitter:title" content="Index Thématique | Socialisme ou Barbarie" />
  <meta name="twitter:description" content="Naviguez par concepts : Front Unique, Dualité de pouvoir, Dialectique, Rosa Luxemburg. Le lexique de la révolution." />
  <meta name="twitter:image" content="https://jauj.github.io/SouBCJRGit/logo-cjr.jpg" />
  
  <!-- Données structurées JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Index Thématique | Socialisme ou Barbarie",
    "url": "https://jauj.github.io/SouBCJRGit/index-thematique",
    "description": "Naviguez par concepts : Front Unique, Dualité de pouvoir, Dialectique, Rosa Luxemburg. Le lexique de la révolution.",
    "publisher": {
      "@type": "Organization",
      "name": "Cercle de Jeunes Révolutionnaires",
      "url": "https://jauj.github.io/SouBCJRGit/",
      "logo": "https://jauj.github.io/SouBCJRGit/logo-cjr.jpg"
    }
  }
  </script>
</svelte:head>

<div class="section-header" style="margin-bottom: 3rem;">
  <div class="section-label">Index thématique</div>
  <div class="section-bar"></div>
</div>

{#each Object.entries(indexData) as [categorie, termes]}
  <div class="index-category">
    <h3 class="index-category-title">{categorie}</h3>
    <div class="index-grid">
      {#each Object.entries(termes) as [terme, articles]}
        <a href="{base}/publications?tag={encodeURIComponent(terme)}" class="index-term">
          <span class="term-name">{terme}</span>
          <span class="term-count">{articles.length} ARTICLES &rarr;</span>
        </a>
      {/each}
    </div>
  </div>
{/each}

{#if Object.keys(indexData).length === 0}
  <p style="color: rgba(0,0,0,0.3); font-style: italic;">Aucun index thématique disponible.</p>
{/if}