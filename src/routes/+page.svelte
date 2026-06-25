<script>
  import { marked } from 'marked';
  import { loadPosts, formatDate } from '$lib/posts.js';

  const posts = loadPosts();
  const latestPosts = posts.slice(0, 6);
</script>

<svelte:head>
  <title>Socialisme ou Barbarie — Bulletin du CJR</title>
  <meta name="description" content="Bulletin de liaison du Cercle de Jeunes Révolutionnaires combattant pour le socialisme." />
</svelte:head>

<section class="hero">
  <h1>Socialisme ou <span class="accent">Barbarie</span></h1>
  <p class="tagline">Bulletin de liaison du Cercle de Jeunes Révolutionnaires combattant pour le socialisme.</p>
  <div class="separator"></div>
</section>

<section class="posts-section">
  <h2 class="section-title">Derniers articles</h2>

  {#each latestPosts as post}
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
</section>