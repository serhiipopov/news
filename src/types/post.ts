export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  isLoading: boolean;
  error: string;
}
