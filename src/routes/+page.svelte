<script>
  import { loadPosts, formatDateShort } from '$lib/posts.js';
  import { LISTE_NUMEROS } from '$lib/data.js';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  const posts = loadPosts();
  const articlesAccueil = posts.slice(0, 10);
  
  let scrollContainer;
  let prevBtn;
  let nextBtn;
  
  onMount(() => {
    scrollContainer = document.querySelector('.bulletin-scroll');
    prevBtn = document.querySelector('.bulletin-prev');
    nextBtn = document.querySelector('.bulletin-next');
    
    if (scrollContainer && prevBtn && nextBtn) {
      const updateButtons = () => {
        prevBtn.style.display = scrollContainer.scrollLeft > 0 ? 'block' : 'none';
        nextBtn.style.display = scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth ? 'block' : 'none';
      };
      
      scrollContainer.addEventListener('scroll', updateButtons);
      updateButtons();
    }
  });
  
  function scrollBulletins(amount) {
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: amount, behavior: 'smooth' });
    }
  }
</script>

<svelte:head>
  <title>Socialisme ou Barbarie | Cercle de Jeunes Révolutionnaires</title>
  <meta name="description" content="Bulletin de liaison du Cercle de Jeunes Révolutionnaires combattant pour le socialisme, pour la construction d'une Organisation Révolutionnaire de la jeunesse, d'une Internationale Révolutionnaire de la Jeunesse" />
  <meta name="keywords" content="marxisme, trotskysme, front unique, Rosa Luxemburg, Socialisme ou Barbarie, CJR, révolution, marxisme révolutionnaire, lutte des classes, bolchevisme" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://jauj.github.io/SouBCJRGit/" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://jauj.github.io/SouBCJRGit/" />
  <meta property="og:title" content="Socialisme ou Barbarie | Cercle de Jeunes Révolutionnaires" />
  <meta property="og:description" content="Bulletin de liaison du Cercle de Jeunes Révolutionnaires combattant pour le socialisme, pour la construction d'une Organisation Révolutionnaire de la jeunesse, d'une Internationale Révolutionnaire de la Jeunesse" />
  <meta property="og:image" content="https://jauj.github.io/SouBCJRGit/logo-cjr.jpg" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://jauj.github.io/SouBCJRGit/" />
  <meta name="twitter:title" content="Socialisme ou Barbarie | Cercle de Jeunes Révolutionnaires" />
  <meta name="twitter:description" content="Bulletin de liaison du Cercle de Jeunes Révolutionnaires combattant pour le socialisme, pour la construction d'une Organisation Révolutionnaire de la jeunesse, d'une Internationale Révolutionnaire de la Jeunesse" />
  <meta name="twitter:image" content="https://jauj.github.io/SouBCJRGit/logo-cjr.jpg" />
  
  <!-- Données structurées JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Socialisme ou Barbarie",
    "url": "https://jauj.github.io/SouBCJRGit/",
    "description": "Bulletin de liaison du Cercle de Jeunes Révolutionnaires combattant pour le socialisme, pour la construction d'une Organisation Révolutionnaire de la jeunesse, d'une Internationale Révolutionnaire de la Jeunesse",
    "keywords": "marxisme, trotskysme, front unique, Rosa Luxemburg, Socialisme ou Barbarie, CJR, révolution, marxisme révolutionnaire, lutte des classes, bolchevisme",
    "publisher": {
      "@type": "Organization",
      "name": "Cercle de Jeunes Révolutionnaires",
      "url": "https://jauj.github.io/SouBCJRGit/",
      "logo": "https://jauj.github.io/SouBCJRGit/logo-cjr.jpg",
      "description": "Organisation marxiste révolutionnaire travaillant à la construction d'une Internationale Révolutionnaire de la Jeunesse"
    }
  }
  </script>
</svelte:head>

<!-- Section : Bulletin -->
{#if LISTE_NUMEROS.length > 0}
  <div style="margin-bottom: 6rem;">
    <div class="section-header">
      <div class="section-label">Bulletin</div>
      <div class="section-bar"></div>
    </div>
    
    <!-- Menu déroulant horizontal avec couvertures -->
    <div class="bulletin-container">
      <div class="bulletin-scroll">
        {#each LISTE_NUMEROS.slice().reverse() as num, i}
          <div class="bulletin-item">
            <a href="{num.lienGoogleDrive}" target="_blank" rel="noopener noreferrer" class="bulletin-link">
              <div class="bulletin-cover">
                {#if num.couverture}
                  <img src="{base}{num.couverture}" alt="Couverture N°{num.numero}" class="bulletin-img"/>
                {:else}
                  <div class="bulletin-placeholder">
                    <span>N°{num.numero}</span>
                  </div>
                {/if}
                <div class="bulletin-overlay">
                  <div class="bulletin-info">
                    <div class="bulletin-titre">{num.titre}</div>
                    <div class="bulletin-date">{new Date(num.date).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        {/each}
      </div>
      
      <button class="bulletin-nav bulletin-prev" on:click={() => scrollBulletins(-200)} aria-label="Précédent">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="bulletin-nav bulletin-next" on:click={() => scrollBulletins(200)} aria-label="Suivant">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
    
    <style>
      .bulletin-container {
        position: relative;
        margin: 1rem 0;
      }
      .bulletin-scroll {
        display: flex;
        gap: 1rem;
        overflow-x: auto;
        padding-bottom: 0.5rem;
        scrollbar-width: thin;
        scrollbar-color: var(--rouge) transparent;
        -ms-overflow-style: none;
      }
      .bulletin-scroll::-webkit-scrollbar {
        height: 6px;
      }
      .bulletin-scroll::-webkit-scrollbar-thumb {
        background-color: var(--rouge);
        border-radius: 3px;
      }
      .bulletin-item {
        min-width: 180px;
        flex-shrink: 0;
      }
      .bulletin-link {
        text-decoration: none;
        color: inherit;
        display: block;
      }
      .bulletin-cover {
        position: relative;
        border: 2px solid var(--rouge);
        border-radius: 8px;
        overflow: hidden;
        aspect-ratio: 3/4;
        transition: transform 0.3s, box-shadow 0.3s;
      }
      .bulletin-cover:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
      }
      .bulletin-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
      }
      .bulletin-cover:hover .bulletin-img {
        transform: scale(1.05);
      }
      .bulletin-placeholder {
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, var(--rouge), #888);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bulletin-placeholder span {
        color: white;
        font-weight: bold;
        font-size: 3rem;
      }
      .bulletin-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
      }
      .bulletin-link:hover .bulletin-overlay {
        opacity: 1;
      }
      .bulletin-info {
        color: white;
        text-align: center;
        padding: 1rem;
      }
      .bulletin-titre {
        font-weight: bold;
        font-size: 1.1rem;
        margin-bottom: 0.25rem;
      }
      .bulletin-date {
        font-size: 0.85rem;
      }
      .bulletin-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: var(--rouge);
        color: white;
        border: none;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        cursor: pointer;
        display: none;
        z-index: 10;
        transition: opacity 0.3s;
      }
      .bulletin-prev {
        left: -40px;
      }
      .bulletin-next {
        right: -40px;
      }
      .bulletin-nav:hover {
        opacity: 0.8;
      }
    </style>
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

  {#if articlesAccueil.length === 0}
    <p style="font-size: 0.875rem; font-style: italic; opacity: 0.5;">Aucun article disponible pour le moment.</p>
  {/if}
</div>