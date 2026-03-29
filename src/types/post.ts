export type PostAuthor = {
  name: string;
  profileImage: string;
};

export type Post = {
  id: number;
  author: PostAuthor;
  createdAt: string;
  images: string[];
  caption: string;
  liked: boolean;
  likeCount: number;
  location?: string;
};

export type FetchPostsResult = {
  posts: Post[];
  hasMore: boolean;
};
