import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../title/title';

interface ErrorProps {
  error: string | null;
}

const Error: FC<ErrorProps> = ({ error }) => {
  const { t } = useTranslation();
  return <Title title={t('body.error')} color='error' />
};

export default Error;
