<script>
  import { marked } from 'marked';
  import { loadPosts, loadPost, formatDateShort } from '$lib/posts.js';
  import { page } from '$app/stores';

  const slug = $page.params.slug;
  const post = loadPost(slug);
  let htmlContent = '';
  if (post) htmlContent = marked.parse(post.body);
</script>

<svelte:head>
  {#if post}
    <title>{post.title} | Socialisme ou Barbarie</title>
    <meta name="description" content={post.description} />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.description} />
    <meta property="og:type" content="article" />
    <link rel="canonical" href="https://cjr-soub.fr/article/{post.slug}" />
  {/if}
</svelte:head>

{#if post}
  <article class="article-detail">
    <a href="/publications" class="back-link">&larr; Retour à la liste</a>
    <header>
      <div class="article-date">{post.dateAffichee}</div>
      <h1 class="article-title">{post.title}</h1>
      {#if post.indexations && post.indexations.length > 0}
        <div class="article-tags">
          {#each post.indexations as idx}
            <a href="/publications?tag={encodeURIComponent(idx.terme)}" class="tag">{idx.terme}</a>
          {/each}
        </div>
      {/if}
    </header>
    <div class="article-body">
      {@html htmlContent}
    </div>
  </article>
{:else}
  <div class="not-found">
    <h2>404</h2>
    <p class="font-serif" style="font-style: italic;">Cet article semble avoir disparu dans les méandres de l'histoire.</p>
    <a href="/" class="btn">Retour à l'accueil</a>
  </div>
{/if}