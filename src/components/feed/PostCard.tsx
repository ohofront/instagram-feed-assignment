import type { Post } from '@/types/post';
import PostActions from './PostActions';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

type PostCardProps = {
  post: Post;
  onToggleLike: (postId: number) => void;
};

export default function PostCard({ post, onToggleLike }: PostCardProps) {
  return (
    <article className='post-card'>
      <PostHeader post={post} />
      <PostImage images={post.images} alt={`${post.author.name} 게시물 이미지`} />
      <PostActions liked={post.liked} likeCount={post.likeCount} onToggleLike={() => onToggleLike(post.id)} />

      <div className='post-card__content'>
        <p className='post-card__caption'>
          <strong>{post.author.name}</strong> {post.caption}
        </p>
        <time className='post-card__date' dateTime={post.createdAt}>
          {post.createdAt}
        </time>
      </div>
    </article>
  );
}
