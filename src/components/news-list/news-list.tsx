import { FC } from 'react';
import NewsItem from '../news-item/news-item';
import { Post } from '../../types/post';
import '../../index.css'

interface NewsListProps {
  posts: Post[];
  removeHandler: (id: number) => void;
}

const NewsList: FC<NewsListProps> = ({ posts,removeHandler }) => {
  return (
    <ul className='wrapperList'>
      {posts.map((post) => (
        <NewsItem
          removeHandler={removeHandler}
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </ul>
  );
};

export default NewsList;