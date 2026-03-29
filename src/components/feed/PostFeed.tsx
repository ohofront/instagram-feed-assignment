'use client';

import PostList from './PostList';
import { useInfinitePosts } from '@/hooks/useInfinitePosts';

export default function PostFeed() {
  const { posts, loading, hasMore, loadMoreRef, toggleLike } = useInfinitePosts();

  return (
    <div className='feed-page'>
      <div className='feed-page__intro'>
        <p className='feed-page__eyebrow'>Instagram Feed Assignment</p>
        <h1 className='feed-page__title'>인스타그램 스타일 게시물 피드</h1>
        <p className='feed-page__description'>
          게시물 목록, 좋아요 인터랙션, 날짜 정보, 무한 스크롤을 포함한 과제 구현 예시입니다.
        </p>
      </div>

      <PostList posts={posts} onToggleLike={toggleLike} />

      {loading && <p className='feed-status'>게시물을 불러오는 중...</p>}

      {!loading && hasMore && <div ref={loadMoreRef} className='feed-trigger' />}

      {!hasMore && <p className='feed-status'>모든 게시물을 불러왔습니다.</p>}
    </div>
  );
}
