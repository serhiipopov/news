import { FC } from 'react';
import NewsItem from '../news-item/news-item';
import { Stack } from '@mui/material';
import { Post } from '../../types/post';
import '../../index.css'

interface NewsListProps {
  posts: Post[];
  removeHandler: (id: number) => void;
}

const NewsList: FC<NewsListProps> = ({ posts,removeHandler }) => {
  return (
    <Stack spacing={2}>
      {posts.map((post) => (
        <NewsItem
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          removeHandler={() => removeHandler(post.id)}
        />
      ))}
    </Stack>
  );
};

export default NewsList;
