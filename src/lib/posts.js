// Utilitaires pour charger et parser les articles Markdown

export function loadPosts() {
  const modules = import.meta.glob('/src/posts/*.md', { eager: true, query: '?raw', import: 'default' });

  const posts = Object.entries(modules).map(([path, content]) => {
    const slug = path.split('/').pop().replace('.md', '');
    const frontmatter = extractFrontmatter(content);
    const body = content.replace(/^---[\s\S]*?---\n?/, '').trim();

    // Parse tags : "Catégorie: Terme1, Terme2; AutreCatégorie: Terme3"
    const indexations = parseIndexations(frontmatter.tags || '');

    return {
      slug,
      title: frontmatter.title || 'Sans titre',
      date: frontmatter.date || 'Date inconnue',
      dateAffichee: formatDateShort(frontmatter.date),
      description: frontmatter.description || '',
      category: frontmatter.category || 'Article',
      author: frontmatter.author || 'CJR',
      body,
      indexations
    };
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}

export function loadPost(slug) {
  const modules = import.meta.glob('/src/posts/*.md', { eager: true, query: '?raw', import: 'default' });

  for (const [path, content] of Object.entries(modules)) {
    const currentSlug = path.split('/').pop().replace('.md', '');
    if (currentSlug === slug) {
      const frontmatter = extractFrontmatter(content);
      const body = content.replace(/^---[\s\S]*?---\n?/, '').trim();
      const indexations = parseIndexations(frontmatter.tags || '');

      return {
        slug: currentSlug,
        title: frontmatter.title || 'Sans titre',
        date: frontmatter.date || 'Date inconnue',
        dateAffichee: formatDateShort(frontmatter.date),
        description: frontmatter.description || '',
        category: frontmatter.category || 'Article',
        author: frontmatter.author || 'CJR',
        body,
        indexations
      };
    }
  }
  return null;
}

/**
 * Récupère l'index thématique structuré par catégorie
 */
export function loadIndex() {
  const posts = loadPosts();
  const index = {};

  posts.forEach(post => {
    if (!post.indexations) return;
    post.indexations.forEach(({ categorie, terme }) => {
      if (!terme.trim()) return;
      const cat = categorie || 'Non classé';
      if (!index[cat]) index[cat] = {};
      if (!index[cat][terme]) index[cat][terme] = [];
      if (!index[cat][terme].find(a => a.slug === post.slug)) {
        index[cat][terme].push(post);
      }
    });
  });

  return index;
}

function parseIndexations(tagsStr) {
  if (!tagsStr) return [];
  const result = [];
  // Format: "Catégorie: Terme1, Terme2; Cat2: Terme3"
  const groups = tagsStr.split(';').map(g => g.trim()).filter(Boolean);
  for (const group of groups) {
    const [cat, termes] = group.split(':').map(s => s.trim());
    if (!cat || !termes) continue;
    for (const terme of termes.split(',').map(t => t.trim()).filter(Boolean)) {
      result.push({ categorie: cat, terme });
    }
  }
  return result;
}

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

export function formatDateShort(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}