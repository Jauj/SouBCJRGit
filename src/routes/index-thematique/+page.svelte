<script>
  import { loadIndex } from '$lib/posts.js';

  const indexData = loadIndex();
</script>

<svelte:head>
  <title>Index Thématique | Socialisme ou Barbarie</title>
  <meta name="description" content="Naviguez par concepts : Front Unique, Capitalisme, Écologie, Impérialisme. Le lexique de la révolution." />
  <link rel="canonical" href="https://cjr-soub.fr/index-thematique" />
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
        <a href="/publications?tag={encodeURIComponent(terme)}" class="index-term">
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