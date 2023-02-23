import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../components/ui/title/title';

const Error: FC = () => {
  const { t } = useTranslation();

  return <Title color='error' title={t('body.error')} />
};

export default Error;
