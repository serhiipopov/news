import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deletePostAsync, fetchPostsAsync, updateLimit } from '../../store/reducers/post/slice';
import NewsList from '../../components/news-list/news-list';
import { Button, Typography } from '@mui/material';
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
    dispatch(updateLimit(20))
  }

  useEffect(() => {
    dispatch(fetchPostsAsync(limit))
  },[dispatch, limit])


  return (
    <div>
      <Typography className='titleNews' variant='h2'>
        {strings.news}
      </Typography>

      { isLoading && <Typography variant='h5'>{strings.loading}</Typography> }
      { error && <Typography variant='h5'>{error}</Typography> }

      <NewsList posts={posts} removeHandler={removePostHandler} />
      { !isLoading && !allFetched &&
        <Button
          variant='outlined'
          size='large'
          sx={{ mt: 1 }}
          onClick={morePostsHandler}
        >
          {strings.more}
        </Button>
      }

      {allFetched && <Typography variant='h5'>{strings.noMores}</Typography> }
    </div>

  )
};

export default News;
