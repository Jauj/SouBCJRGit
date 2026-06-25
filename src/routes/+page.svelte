<script>
  import { loadPosts, formatDateShort } from '$lib/posts.js';
  import { LISTE_NUMEROS } from '$lib/data.js';
  import { base } from '$app/paths';

  const posts = loadPosts();
  const articlesAccueil = posts.slice(0, 10);
</script>

<svelte:head>
  <title>Socialisme ou Barbarie | Cercle de Jeunes Révolutionnaires</title>
  <meta name="description" content="Bulletin de liaison du Cercle de Jeunes Révolutionnaires combattant pour le socialisme." />
  <link rel="canonical" href="https://cjr-soub.fr/" />
</svelte:head>

<!-- Section : Derniers numéros PDF -->
{#if LISTE_NUMEROS.length > 0}
  <div style="margin-bottom: 6rem;">
    <div class="section-header">
      <div class="section-label">Bulletin papier & PDF</div>
      <div class="section-bar"></div>
    </div>
    <div class="numeros-grid">
      {#each LISTE_NUMEROS.slice().reverse() as num}
        <a href="{base}{num.fichier}" target="_blank" rel="noopener noreferrer" class="numero-card">
          <div class="numero-badge">N°{num.numero}</div>
          <div class="numero-info">
            <h3 class="numero-titre">{num.titre}</h3>
            <time class="numero-date">{new Date(num.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            <p class="numero-desc">{num.description}</p>
          </div>
          <span class="numero-download">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </span>
        </a>
      {/each}
    </div>
  </div>
{/if}

<!-- Section : Dernières publications -->
<div style="margin-bottom: 6rem;">
  <div class="section-header">
    <div class="section-label">Dernières publications</div>
    <div class="section-bar"></div>
  </div>

  {#each articlesAccueil as post}
    <article class="article-card">
      <div class="card-meta">
        <time class="card-date" datetime={post.date}>{post.dateAffichee}</time>
        <div class="card-line"></div>
      </div>
      <h3 class="card-title">
        <a href="/article/{post.slug}">{post.title}</a>
      </h3>
      {#if post.indexations && post.indexations.length > 0}
        <div class="card-tags">
          {#each post.indexations as idx}
            <a href="/publications?tag={encodeURIComponent(idx.terme)}" class="tag">{idx.terme}</a>
          {/each}
        </div>
      {/if}
      <p class="card-excerpt">{post.description}</p>
    </article>
  {/each}

  {#if articlesAccueil.length === 0}
    <p style="font-size: 0.875rem; font-style: italic; opacity: 0.5;">Aucun article disponible pour le moment.</p>
  {/if}
</div>