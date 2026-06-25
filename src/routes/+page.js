import { loadPosts } from '$lib/posts.js';

export async function entries() {
  const posts = loadPosts();
  return [
    '/',
    '/publications',
    '/index-thematique',
    '/liens',
    '/qui-sommes-nous',
    ...posts.map(post => `/article/${post.slug}`)
  ];
}