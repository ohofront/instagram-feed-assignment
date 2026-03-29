import type { Post } from '@/types/post';

// 👉 사용할 이미지 8개
const IMAGE_POOL = [
  '/images/posts/post-1.jpg',
  '/images/posts/post-2.jpg',
  '/images/posts/post-3.jpg',
  '/images/posts/post-4.jpg',
  '/images/posts/post-5.jpg',
  '/images/posts/post-6.jpg',
  '/images/posts/post-7.jpg',
  '/images/posts/post-8.jpg',
];

// 👉 랜덤 이미지 여러 개 뽑기
const getRandomImages = (min = 1, max = 4) => {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;

  const shuffled = [...IMAGE_POOL].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, count);
};

// 👉 랜덤 좋아요 수
const getRandomLikes = () => Math.floor(Math.random() * 300) + 10;

// 👉 랜덤 캡션
const CAPTIONS = [
  '오늘만 기다렸어요. 연봉인상 앱, 드디어 런칭 🚀',
  '이제 연봉인상의 모든 봉켓팅은 앱에서 더 간편하게 신청할 수 있어요.',
  '봉사 신청부터 참여까지, 더 빠르고 직관적인 경험을 제공합니다.',
  '연봉인상은 더 많은 봉사 경험을 연결하는 플랫폼을 만들고 있습니다.',
  '지금 바로 앱스토어와 플레이스토어에서 “연봉인상”을 검색해보세요.',
  '더 나은 사용자 경험을 위해 계속 개선하고 있습니다.',
  '연봉인상 팀과 함께 더 큰 가치를 만들어가세요.',
  '작은 변화가 더 큰 경험을 만듭니다.',
];

// 👉 게시글 생성 함수
const generatePosts = (count: number): Post[] => {
  return Array.from({ length: count }).map((_, index) => ({
    id: index + 1,
    author: {
      name: 'yvis_official',
      profileImage: '/images/profiles/yvis.png',
    },
    createdAt: `2026-03-${String(index + 1).padStart(2, '0')}`,
    images: getRandomImages(),
    caption: CAPTIONS[Math.floor(Math.random() * CAPTIONS.length)],
    liked: Math.random() > 0.7,
    likeCount: getRandomLikes(),
    location: '연봉인상',
  }));
};

// 👉 최종 export (게시글 20개 생성)
export const MOCK_POSTS: Post[] = generatePosts(20);
