'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchPosts, PAGE_SIZE } from '@/lib/fetchPosts';
import type { Post } from '@/types/post';

export function useInfinitePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadPosts = async () => {
      setLoading(true);

      try {
        const result = await fetchPosts(page, PAGE_SIZE);

        if (cancelled) return;

        setPosts((prevPosts) => {
          const existingIds = new Set(prevPosts.map((post) => post.id));
          const nextPosts = result.posts.filter((post) => !existingIds.has(post.id));

          return [...prevPosts, ...nextPosts];
        });

        setHasMore(result.hasMore);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadPosts();

    return () => {
      cancelled = true;
    };
  }, [page]);

  const loadMoreRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          const firstEntry = entries[0];

          if (firstEntry?.isIntersecting && hasMore && !loading) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        {
          threshold: 0.2,
        }
      );

      if (node) {
        observerRef.current.observe(node);
      }
    },
    [hasMore, loading]
  );

  const toggleLike = useCallback((postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id !== postId) {
          return post;
        }

        const nextLiked = !post.liked;
        const nextLikeCount = nextLiked ? post.likeCount + 1 : post.likeCount - 1;

        return {
          ...post,
          liked: nextLiked,
          likeCount: nextLikeCount,
        };
      })
    );
  }, []);

  return {
    posts,
    loading,
    hasMore,
    loadMoreRef,
    toggleLike,
  };
}
