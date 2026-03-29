type PostActionsProps = {
  liked: boolean;
  likeCount: number;
  onToggleLike: () => void;
};

export default function PostActions({ liked, likeCount, onToggleLike }: PostActionsProps) {
  return (
    <div className='post-actions'>
      <div className='post-actions__top'>
        <button
          type='button'
          className={`like-button ${liked ? 'is-liked' : ''}`}
          onClick={onToggleLike}
          aria-label={liked ? '좋아요 취소' : '좋아요'}
        >
          <svg viewBox='0 0 24 24' aria-hidden='true' className='like-button__icon'>
            <path d='M12 21.35 10.55 20C5.4 15.24 2 12.09 2 8.28 2 5.24 4.42 3 7.4 3c1.74 0 3.41.81 4.6 2.09C13.19 3.81 14.86 3 16.6 3 19.58 3 22 5.24 22 8.28c0 3.81-3.4 6.96-8.55 11.72L12 21.35Z' />
          </svg>
        </button>
      </div>

      <p className='post-actions__likes'>좋아요 {likeCount.toLocaleString()}개</p>
    </div>
  );
}
