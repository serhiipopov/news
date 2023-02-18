import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deletePostAsync, fetchPostsAsync } from '../../store/reducers/post/slice';
import NewsList from '../../components/news-list/news-list';
import { Button } from '@mui/material';
import { strings } from '../../constants/strings';

const News: FC = () => {
  const dispatch = useAppDispatch()
  const { isLoading, error, posts } = useAppSelector(state => state.postReducer)

  const  removePostHandler = (id: number) => {
    dispatch(deletePostAsync(id))
  }

  useEffect(() => {
    dispatch(fetchPostsAsync())
  },[])

  return (
    <div>
      <h1 className='titleNews'>{strings.news}</h1>
      { isLoading && <h2>Loading...</h2> }
      { error && <h2>{error}</h2> }
      <NewsList posts={posts} removeHandler={removePostHandler} />
      <Button variant='outlined' size='medium' sx={{ mt: 1 }}>{strings.more}</Button>
    </div>

  )
};

export default News;
