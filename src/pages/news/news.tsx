import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deletePostAsync, fetchPostsAsync, updateLimit} from '../../store/reducers/post/slice';
import NewsList from '../../components/news-list/news-list';
import { Button } from '@mui/material';
import { strings } from '../../constants/strings';

const News: FC = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    error,
    posts,
    limit,
    allFetched
  } = useAppSelector(state => state.postReducer);

  const removePostHandler = (id: number) => {
    dispatch(deletePostAsync(id))
  }

  const morePostsHandler = ()  => {
    dispatch(updateLimit(50))
  }

  useEffect(() => {
    dispatch(fetchPostsAsync(limit))
  },[dispatch, limit])


  return (
    <div>
      <h1 className='titleNews'>{strings.news}</h1>

      { isLoading && <h2>Loading...</h2> }
      { error && <h3>{error}</h3> }

      <NewsList posts={posts} removeHandler={removePostHandler} />
      { !isLoading && !allFetched &&
        <Button
          variant='outlined'
          size='medium'
          sx={{ mt: 1 }}
          onClick={morePostsHandler}
        >
          {strings.more}
        </Button>
      }

      {allFetched && <span>No mores</span> }

    </div>

  )
};

export default News;
