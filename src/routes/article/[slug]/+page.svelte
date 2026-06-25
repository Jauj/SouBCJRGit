<script>
  import { marked } from 'marked';
  import { loadPost, formatDate } from '$lib/posts.js';
  import { page } from '$app/stores';

  const slug = $page.params.slug;
  const post = loadPost(slug);
  let htmlContent = '';

  if (post) {
    htmlContent = marked.parse(post.body);
  }
</script>

<svelte:head>
  {#if post}
    <title>{post.title} | Socialisme ou Barbarie</title>
    <meta name="description" content={post.description} />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.description} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://cjr-soub.fr/article/{post.slug}" />
    <link rel="canonical" href="https://cjr-soub.fr/article/{post.slug}" />
  {/if}
</svelte:head>

{#if post}
  <article class="article-page">
    <a href="/" class="article-back">&larr; Retour à l'accueil</a>

    <div class="article-header">
      <h1>{post.title}</h1>
      <div class="article-meta">
        <span class="category-tag">{post.category}</span>
        <span>{formatDate(post.date)}</span>
        {#if post.author}
          <span>Par {post.author}</span>
        {/if}
      </div>
    </div>

    <div class="article-content">
      {@html htmlContent}
    </div>
  </article>
{:else}
  <div class="not-found">
    <h1>404</h1>
    <p>Cet article n'existe pas ou a été déplacé.</p>
    <a href="/">Retour à l'accueil</a>
  </div>
{/if}