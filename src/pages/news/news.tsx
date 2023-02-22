import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deletePostAsync, fetchPostsAsync, updateLimit } from '../../store/reducers/post/slice';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@mui/material';
import NewsList from '../../components/news-list/news-list';

const News: FC = () => {
  const dispatch = useAppDispatch();
  const {
    isLoading,
    error,
    posts,
    limit,
    allFetched
  } = useAppSelector(state => state.postReducer);
  const { t } = useTranslation();

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
        {t('headers.news')}
      </Typography>

      { isLoading && <Typography variant='h5'> {t('body.loading')}</Typography> }
      { error && <Typography variant='h5'>{error}</Typography> }

      <NewsList posts={posts} removeHandler={removePostHandler} />
      { !isLoading && !allFetched &&
        <Button
          variant='outlined'
          size='large'
          sx={{ mt: 1 }}
          onClick={morePostsHandler}
        >
          {t('body.more')}
        </Button>
      }

      { allFetched && <Typography variant='h5'>{t('body.noMores')}</Typography> }
    </div>

  )
};

export default News;
