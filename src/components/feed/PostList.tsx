import type { Post } from '@/types/post';
import PostCard from './PostCard';

type PostListProps = {
  posts: Post[];
  onToggleLike: (postId: number) => void;
};

export default function PostList({ posts, onToggleLike }: PostListProps) {
  return (
    <section className='post-list' aria-label='게시물 목록'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onToggleLike={onToggleLike} />
      ))}
    </section>
  );
}
