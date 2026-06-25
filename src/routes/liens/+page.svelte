<script>
  import { LISTE_LIENS } from '$lib/data.js';
</script>

<svelte:head>
  <title>Ressources Révolutionnaires | Socialisme ou Barbarie</title>
  <meta name="description" content="Liens vers les archives marxistes, le projet Trotsky et les organisations sœurs pour la construction de l'Internationale." />
  <link rel="canonical" href="https://cjr-soub.fr/liens" />
</svelte:head>

<h1 class="page-title">Liens</h1>

<div class="liens-grid">
  {#each LISTE_LIENS as lien}
    <a href={lien.url} target="_blank" rel="noopener noreferrer" class="lien-card">
      <div class="lien-header">
        <span class="lien-name">{lien.nom}</span>
        <span class="lien-visit">VISITER &nearr;</span>
      </div>
      <p class="lien-desc">{lien.description}</p>
    </a>
  {/each}
</div>