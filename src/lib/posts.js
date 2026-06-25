// Utilitaires pour charger et parser les articles Markdown

/**
 * Charge tous les fichiers Markdown du dossier posts
 * et retourne un tableau d'objets structurés
 */
export function loadPosts() {
  const modules = import.meta.glob('/src/posts/*.md', { eager: true, query: '?raw', import: 'default' });

  const posts = Object.entries(modules).map(([path, content]) => {
    const slug = path.split('/').pop().replace('.md', '');
    const frontmatter = extractFrontmatter(content);
    const body = content.replace(/^---[\s\S]*?---\n?/, '').trim();

    return {
      slug,
      title: frontmatter.title || 'Sans titre',
      date: frontmatter.date || 'Date inconnue',
      description: frontmatter.description || '',
      category: frontmatter.category || 'Article',
      author: frontmatter.author || 'CJR',
      body
    };
  });

  // Trie du plus récent au plus ancien
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

/**
 * Charge un article spécifique par son slug
 */
export function loadPost(slug) {
  const modules = import.meta.glob('/src/posts/*.md', { eager: true, query: '?raw', import: 'default' });

  for (const [path, content] of Object.entries(modules)) {
    const currentSlug = path.split('/').pop().replace('.md', '');
    if (currentSlug === slug) {
      const frontmatter = extractFrontmatter(content);
      const body = content.replace(/^---[\s\S]*?---\n?/, '').trim();

      return {
        slug: currentSlug,
        title: frontmatter.title || 'Sans titre',
        date: frontmatter.date || 'Date inconnue',
        description: frontmatter.description || '',
        category: frontmatter.category || 'Article',
        author: frontmatter.author || 'CJR',
        body
      };
    }
  }

  return null;
}

/**
 * Extrait le frontmatter YAML d'un fichier Markdown
 */
function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const fm = {};
  const lines = match[1].split('\n');
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      fm[key] = value;
    }
  }

  return fm;
}

/**
 * Formate une date en français
 */
export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}