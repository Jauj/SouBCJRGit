<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  let { children } = $props();
  let menuOpen = $state(false);
  let currentPath = $state('/');

  onMount(() => {
    currentPath = window.location.pathname;
  });

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Publications', href: '/publications' },
    { label: 'Index', href: '/index-thematique' },
    { label: 'Liens', href: '/liens' },
    { label: 'Qui sommes nous ?', href: '/qui-sommes-nous' }
  ];

  function isActive(href) {
    const b = base.replace(/\/$/, '');
    const path = currentPath.startsWith(b) ? currentPath.slice(b.length) || '/' : currentPath;
    if (href === '/') return path === '/';
    return path.startsWith(href);
  }

  function closeMenu() { menuOpen = false; }
</script>

<svelte:head>
  <title>Socialisme ou Barbarie</title>
</svelte:head>

<div class="site-wrapper">
  <!-- Sidebar Bureau -->
  <aside class="sidebar">
    <div class="logo-text">
      Socialisme<br />
      <span class="ou">ou</span><br />
      Barbarie
    </div>

    <blockquote class="citation">
      "La société bourgeoise se trouve à la croisée des chemins : soit en transition vers le socialisme, soit en régression vers la barbarie."
      <span class="auteur">— Rosa Luxemburg citant F. Engels</span>
    </blockquote>

    <nav class="sidebar-nav">
      {#each navItems as item}
        <a
          href={item.href}
          class={isActive(item.href) ? 'active' : ''}
          onclick={closeMenu}
        >
          {item.label}
        </a>
      {/each}
    </nav>

    <img src="{base}/logo-cjr.jpg" alt="Logo CJR" class="logo-cjr" />

    <div class="social-links">
      <a href="https://www.instagram.com/cjr.soub/" target="_blank" rel="noopener noreferrer" title="Instagram">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
      </a>
      <a href="mailto:cjr.soub@gmail.com" title="Email">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </a>
    </div>

    <div class="newsletter-form">
      <label for="newsletter-email">Newsletter</label>
      <form action="https://buttondown.email/api/emails/embed-subscribe/cjr-soub" method="post">
        <input type="hidden" name="next" value="https://cjr-soub.fr/" />
        <input id="newsletter-email" type="email" name="email" placeholder="Votre email" required />
        <button type="submit">S'inscrire</button>
      </form>
      <p class="newsletter-note">Via Buttondown — pas de spam, désinscription en un clic.</p>
    </div>
  </aside>

  <!-- Header Mobile -->
  <header class="mobile-header">
    <div class="mobile-title">S <span class="ou">ou</span> B</div>
    <button class="burger-btn" onclick={() => menuOpen = !menuOpen} aria-label="Menu">
      {#if menuOpen}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      {:else}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      {/if}
    </button>
  </header>

  <!-- Menu Mobile Overlay -->
  {#if menuOpen}
    <div class="mobile-menu open">
      <img src="{base}/logo-cjr.jpg" alt="Logo CJR" class="logo-cjr" />
      <blockquote class="citation">
        "La société bourgeoise se trouve à la croisée des chemins : soit en transition vers le socialisme, soit en régression vers la barbarie."
        <span class="auteur">— Rosa Luxemburg citant F. Engels</span>
      </blockquote>
      <nav class="mobile-nav">
        {#each navItems as item}
          <a
            href={item.href}
            class={isActive(item.href) ? 'active' : ''}
            onclick={closeMenu}
          >
            {item.label}
          </a>
        {/each}
      </nav>
      <div class="social-links">
        <a href="https://www.instagram.com/cjr.soub/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="mailto:cjr.soub@gmail.com" title="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
      </div>
      <div class="newsletter-form">
        <label for="newsletter-email-m">Newsletter</label>
        <form action="https://buttondown.email/api/emails/embed-subscribe/cjr-soub" method="post">
          <input type="hidden" name="next" value="https://cjr-soub.fr/" />
          <input id="newsletter-email-m" type="email" name="email" placeholder="Votre email" required />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  {/if}

  <!-- Contenu Principal -->
  <main class="main-content">
    {@render children()}
  </main>
</div>