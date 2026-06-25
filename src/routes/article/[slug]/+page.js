import { loadPosts } from '$lib/posts.js';

export function entries() {
  const posts = loadPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export const prerender = true;