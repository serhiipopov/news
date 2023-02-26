import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deletePostAsync, fetchPostsAsync, updateLimit } from '../../store/reducers/post/slice';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@mui/material';
import NewsList from '../../components/news-list/news-list';
import Error from '../../components/ui/error/error';
import Title from '../../components/ui/title/title';
import Spinner from '../../components/ui/spinner/spinner';

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

  const countNews = posts.length;

  const removePostHandler = (id: number) => {
    dispatch(deletePostAsync(id))
  }

  const morePostsHandler = ()  => {
    dispatch(updateLimit(30))
  }

  useEffect(() => {
    dispatch(fetchPostsAsync(limit))
  },[dispatch, limit])

  return (
    <div>
      <Title title= {t('headers.news')} color='grey' />

      { isLoading && <Spinner /> }
      { error && <Error error={error} /> }
      { !error && !countNews && !isLoading && <Title title={t('body.noNews')} /> }

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
  );
};

export default News;
