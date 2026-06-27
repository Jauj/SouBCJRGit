<script>
  import { onMount } from 'svelte';
  import { loadPosts } from '$lib/posts.js';
  import { base } from '$app/paths';

  const allPosts = loadPosts();
  let recherche = $state('');
  let tagFiltre = $state(null);

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('tag')) {
      tagFiltre = params.get('tag');
    }
  });

  function getFilteredPosts() {
    let result = allPosts;
    if (tagFiltre) {
      const terme = tagFiltre.toLowerCase();
      result = result.filter(p =>
        p.indexations?.some(idx => idx.terme.toLowerCase() === terme)
      );
    }
    if (recherche.trim()) {
      const q = recherche.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q)
      );
    }
    return result;
  }
</script>

<svelte:head>
  <title>Analyses & Thèses | Socialisme ou Barbarie</title>
  <meta name="description" content="Découvrez les thèses du CJR sur le trotskysme, le marxisme et le front unique. Un fonds documentaire de combat pour la jeunesse révolutionnaire." />
  <meta name="keywords" content="marxisme, trotskysme, front unique, Rosa Luxemburg, Socialisme ou Barbarie, CJR, révolution, analyses, thèses, publications" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://jauj.github.io/SouBCJRGit/publications" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jauj.github.io/SouBCJRGit/publications" />
  <meta property="og:title" content="Analyses & Thèses | Socialisme ou Barbarie" />
  <meta property="og:description" content="Découvrez les thèses du CJR sur le trotskysme, le marxisme et le front unique. Un fonds documentaire de combat pour la jeunesse révolutionnaire." />
  <meta property="og:image" content="https://jauj.github.io/SouBCJRGit/logo-cjr.jpg" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://jauj.github.io/SouBCJRGit/publications" />
  <meta name="twitter:title" content="Analyses & Thèses | Socialisme ou Barbarie" />
  <meta name="twitter:description" content="Découvrez les thèses du CJR sur le trotskysme, le marxisme et le front unique. Un fonds documentaire de combat pour la jeunesse révolutionnaire." />
  <meta name="twitter:image" content="https://jauj.github.io/SouBCJRGit/logo-cjr.jpg" />
  
  <!-- Données structurées JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Analyses & Thèses | Socialisme ou Barbarie",
    "url": "https://jauj.github.io/SouBCJRGit/publications",
    "description": "Découvrez les thèses du CJR sur le trotskysme, le marxisme et le front unique. Un fonds documentaire de combat pour la jeunesse révolutionnaire.",
    "publisher": {
      "@type": "Organization",
      "name": "Cercle de Jeunes Révolutionnaires",
      "url": "https://jauj.github.io/SouBCJRGit/",
      "logo": "https://jauj.github.io/SouBCJRGit/logo-cjr.jpg"
    }
  }
  </script>
</svelte:head>

<div class="section-header" style="margin-bottom: 1rem;">
  <div class="section-label">
    {#if tagFiltre}
      Publications indexées : {tagFiltre}
    {:else}
      Toutes les publications
    {/if}
  </div>
  <div class="section-bar" style="margin-bottom: 2rem;"></div>
</div>

<div class="search-bar">
  <span class="search-icon">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
  </span>
  <input
    type="text"
    placeholder="Rechercher un mot-clé..."
    bind:value={recherche}
  />
  {#if recherche}
    <button class="clear-btn" onclick={() => recherche = ''} aria-label="Effacer la recherche">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    </button>
  {/if}
</div>

{#if tagFiltre}
  <a href="{base}/publications" style="display: inline-flex; align-items: center; gap: 0.25rem; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 2rem; color: black;">
    &times; Effacer le filtre par tag
  </a>
{/if}

<div style="display: flex; flex-direction: column; gap: 2rem; margin-top: 1rem;">
  {#each getFilteredPosts() as post (post.slug)}
    <article class="article-card">
      <div class="card-meta">
        <time class="card-date" datetime={post.date}>{post.dateAffichee}</time>
        <div class="card-line"></div>
      </div>
      <h3 class="card-title">
        <a href="{base}/article/{post.slug}">{post.title}</a>
      </h3>
      {#if post.indexations && post.indexations.length > 0}
        <div class="card-tags">
          {#each post.indexations as idx}
            <a href="{base}/publications?tag={encodeURIComponent(idx.terme)}" class="tag">{idx.terme}</a>
          {/each}
        </div>
      {/if}
      <p class="card-excerpt">{post.description}</p>
    </article>
  {/each}

  {#if getFilteredPosts().length === 0}
    <div style="padding: 3rem 0; text-align: center; border: 2px dashed rgba(0,0,0,0.05);">
      <p style="color: rgba(0,0,0,0.5); font-style: italic; font-family: var(--font-serif);">
        {#if recherche}
          Aucun article ne correspond à la recherche
        {:else}
          Aucun article trouvé pour ce terme d'indexation.
        {/if}
      </p>
      <a href="{base}/publications" style="display: inline-block; margin-top: 1rem; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--rouge);">
        Réinitialiser tous les filtres
      </a>
    </div>
  {/if}
</div>