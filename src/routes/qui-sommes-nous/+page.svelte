<script>
  import { marked } from 'marked';
  import { CONTENU_A_PROPOS } from '$lib/data.js';

  const htmlContent = marked.parse(CONTENU_A_PROPOS);
</script>

<svelte:head>
  <title>Projet & Combat du CJR | Socialisme ou Barbarie</title>
  <meta name="description" content="Histoire et objectifs du Cercle de Jeunes Révolutionnaires. Notre lien avec Socialisme ou Barbarie et la Quatrième Internationale." />
  <link rel="canonical" href="https://cjr-soub.fr/qui-sommes-nous" />
</svelte:head>

<h1 class="page-title">Qui sommes nous ?</h1>

<div class="article-body">
  {@html htmlContent}
</div>