import { FC } from 'react';
import { Box, Button, Card } from '@mui/material';

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
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>
        <Button
          onClick={removeHandler}
          variant='outlined'
          size='medium'
          sx={{ mt: 1 }}
        >
          X
        </Button>
      </Card>
    </Box>
  );
};

export default NewsItem;
