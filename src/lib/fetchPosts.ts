import { MOCK_POSTS } from '@/data/mockPosts';
import type { FetchPostsResult } from '@/types/post';

export const PAGE_SIZE = 4;

export async function fetchPosts(page: number, limit: number = PAGE_SIZE): Promise<FetchPostsResult> {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const posts = MOCK_POSTS.slice(startIndex, endIndex);

  return {
    posts,
    hasMore: endIndex < MOCK_POSTS.length,
  };
}
