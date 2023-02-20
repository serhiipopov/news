import { FC } from 'react';
import { Box, Button, Card, Typography } from '@mui/material';

interface NewsItemProps {
  title: string;
  body: string;
  id: number;
  removeHandler: () => void;
}

const NewsItem: FC<NewsItemProps> = ({
  title,
  body,
  id,
  removeHandler
  }) => {
  return (
    <Box sx={{ minWidth: 275, pb: 2 }}>
      <Card variant='outlined' sx={{ py: 3, px: 6 }}>
        <Typography variant='h6'>{id}</Typography>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='body1'>{body}</Typography>
        <Button
          onClick={removeHandler}
          variant='outlined'
          size='large'
          sx={{ mt: 1 }}
        >
          X
        </Button>
      </Card>
    </Box>
  );
};

export default NewsItem;
