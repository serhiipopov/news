import { FC } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PROFILE } from '../../__mocks__';

const Profile: FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 5 }}>
      <Grid container spacing={6} columns={2}>
        <Grid item md={1}>
          <img
            src={PROFILE.img}
            alt='profile'
            style={{ maxWidth: '100%' }}
          />
        </Grid>
        <Grid item md={1} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <Typography variant='subtitle2' color='blue'>
              {t('body.fullName')}
            </Typography>
            <Stack direction='row' spacing={2}>
              <Typography variant='h4'>{PROFILE.firstName}</Typography>
              <Typography variant='h4'>{PROFILE.lastName}</Typography>
            </Stack>
            <Typography variant='subtitle2' color='blue'>
              {t('body.generalInformation')}
            </Typography>
            <Typography variant='body1'>{PROFILE.information}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
