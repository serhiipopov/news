export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  isLoading: boolean;
  error: string;
  limit: number;
  allFetched: boolean;
}
