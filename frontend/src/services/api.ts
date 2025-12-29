import type { Post } from '../types/post';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API_BASE_URL}/api/posts`);

  if (!response.ok) {
    throw new Error(`Failed to load posts: ${response.status}`);
  }

  const data: Post[] = await response.json();
  return data;
};
