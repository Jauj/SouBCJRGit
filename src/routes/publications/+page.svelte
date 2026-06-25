<script>
  import { marked } from 'marked';
  import { loadPosts, formatDate } from '$lib/posts.js';

  const posts = loadPosts();
</script>

<svelte:head>
  <title>Analyses & Thèses | Socialisme ou Barbarie</title>
  <meta name="description" content="L'ensemble des analyses et thèses publiées par le Cercle de Jeunes Révolutionnaires." />
  <meta property="og:title" content="Analyses & Thèses | Socialisme ou Barbarie" />
  <link rel="canonical" href="https://cjr-soub.fr/publications" />
</svelte:head>

<div class="publications-page">
  <h1>Analyses & Thèses</h1>
  <p class="intro">L'ensemble des analyses, thèses et contributions théoriques publiées par le Cercle de Jeunes Révolutionnaires. Ces textes constituent le travail collectif de réflexion et d'élaboration politique de notre organisation.</p>

  {#each posts as post}
    <article class="post-card">
      <h2>
        <a href="/article/{post.slug}">{post.title}</a>
      </h2>
      <div class="post-meta">
        <span class="category-tag">{post.category}</span>
        <span>{formatDate(post.date)}</span>
      </div>
      <p class="description">{post.description}</p>
    </article>
  {/each}
</div>