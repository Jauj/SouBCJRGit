<script>
  import { marked } from 'marked';
  import { loadPosts, formatDateShort } from '$lib/posts.js';

  const posts = loadPosts();
  const articlesAccueil = posts.slice(0, 10);
</script>

<svelte:head>
  <title>Socialisme ou Barbarie | Cercle de Jeunes Révolutionnaires</title>
  <meta name="description" content="Bulletin de liaison du Cercle de Jeunes Révolutionnaires combattant pour le socialisme." />
  <link rel="canonical" href="https://cjr-soub.fr/" />
</svelte:head>

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