import React, { FC } from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { languages } from '../../__mocks__';

const LanguagesToggle: FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
      <Select
        id='language'
        label='Language'
        defaultValue='en'
        size='small'
        sx={{ minWidth: 150 }}
        onChange={handleLanguageChange}
      >
        {languages.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
  );
}

export default LanguagesToggle;
