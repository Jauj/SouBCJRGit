<script>
  import '../app.css';

  let { children } = $props();
  let menuOpen = $state(false);

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<svelte:head>
  <title>Socialisme ou Barbarie</title>
</svelte:head>

<div class="site">
  <!-- En-tête -->
  <header class="site-header">
    <div class="header-inner">
      <a href="/" class="logo-link" onclick={closeMenu}>
        <span class="logo-title">Socialisme ou Barbarie</span>
        <span class="logo-subtitle">Bulletin du CJR</span>
      </a>

      <button class="menu-toggle" onclick={toggleMenu} aria-label="Menu">
        <span class="menu-bar" class:open={menuOpen}></span>
        <span class="menu-bar" class:open={menuOpen}></span>
        <span class="menu-bar" class:open={menuOpen}></span>
      </button>

      <nav class="main-nav" class:open={menuOpen}>
        <a href="/" onclick={closeMenu}>Accueil</a>
        <a href="/publications" onclick={closeMenu}>Publications</a>
        <a href="/a-propos" onclick={closeMenu}>À propos</a>
      </nav>
    </div>
  </header>

  <!-- Contenu principal -->
  <main class="site-main">
    {@render children()}
  </main>

  <!-- Pied de page -->
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <strong>Socialisme ou Barbarie</strong>
        <p>Bulletin de liaison du Cercle de Jeunes Révolutionnaires</p>
      </div>
      <div class="footer-copy">
        <p>&copy; {new Date().getFullYear()} CJR — Tous droits réservés</p>
      </div>
    </div>
  </footer>
</div>