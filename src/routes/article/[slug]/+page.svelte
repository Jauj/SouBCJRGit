<script>
  import { marked } from 'marked';
  import { loadPosts, loadPost, formatDateShort } from '$lib/posts.js';
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  const slug = $page.params.slug;
  const post = loadPost(slug);
  let htmlContent = '';
  if (post) htmlContent = marked.parse(post.body);
</script>

<svelte:head>
  {#if post}
    <title>{post.title} | Socialisme ou Barbarie</title>
    <meta name="description" content={post.description} />
    <meta name="keywords" content="marxisme, trotskysme, front unique, Rosa Luxemburg, Socialisme ou Barbarie, CJR, révolution, {post.indexations?.map(idx => idx.terme).join(', ')}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://jauj.github.io/SouBCJRGit/article/{post.slug}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://jauj.github.io/SouBCJRGit/article/{post.slug}" />
    <meta property="og:title" content="{post.title} | Socialisme ou Barbarie" />
    <meta property="og:description" content={post.description} />
    <meta property="og:image" content="https://jauj.github.io/SouBCJRGit/logo-cjr.jpg" />
    <meta property="og:article:published_time" content="{post.date}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://jauj.github.io/SouBCJRGit/article/{post.slug}" />
    <meta name="twitter:title" content="{post.title} | Socialisme ou Barbarie" />
    <meta name="twitter:description" content={post.description} />
    <meta name="twitter:image" content="https://jauj.github.io/SouBCJRGit/logo-cjr.jpg" />
    
    <!-- Données structurées JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "{post.title}",
      "description": "{post.description}",
      "datePublished": "{post.date}",
      "keywords": ["marxisme", "trotskysme", "front unique", "Rosa Luxemburg", "Socialisme ou Barbarie", "CJR", "révolution", {post.indexations?.map(idx => `"${idx.categorie}: ${idx.terme}"`).join(', ')}],
      "author": {
        "@type": "Organization",
        "name": "Cercle de Jeunes Révolutionnaires"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Socialisme ou Barbarie",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jauj.github.io/SouBCJRGit/logo-cjr.jpg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jauj.github.io/SouBCJRGit/article/{post.slug}"
      }
    }
    </script>
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://jauj.github.io/SouBCJRGit/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Publications",
          "item": "https://jauj.github.io/SouBCJRGit/publications"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "{post.title}",
          "item": "https://jauj.github.io/SouBCJRGit/article/{post.slug}"
        }
      ]
    }
    </script>
  {/if}
</svelte:head>

{#if post}
  <article class="article-detail">
    <a href="{base}/publications" class="back-link">&larr; Retour à la liste</a>
    <header>
      <div class="article-date">{post.dateAffichee}</div>
      <h1 class="article-title">{post.title}</h1>
      {#if post.indexations && post.indexations.length > 0}
        <div class="article-tags">
          {#each post.indexations as idx}
            <a href="{base}/publications?tag={encodeURIComponent(idx.terme)}" class="tag">{idx.terme}</a>
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
    <a href="{base}/" class="btn">Retour à l'accueil</a>
  </div>
{/if}