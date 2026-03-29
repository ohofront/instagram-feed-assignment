import { formatPostDate } from '@/lib/formatDate';
import type { Post } from '@/types/post';

type PostHeaderProps = {
  post: Post;
};

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <header className='post-header'>
      <div className='post-header__left'>
        <img src={post.author.profileImage} alt={`${post.author.name} 프로필`} className='post-header__avatar' />
        <div className='post-header__text'>
          <strong className='post-header__name'>{post.author.name}</strong>
          <span className='post-header__location'>{post.location ?? 'Unknown'}</span>
        </div>
      </div>

      <div className='post-header__right'>
        <span className='post-header__date'>{formatPostDate(post.createdAt)}</span>
      </div>
    </header>
  );
}
