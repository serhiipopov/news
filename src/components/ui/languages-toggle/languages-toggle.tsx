import React, { FC, useEffect, useState } from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { languages } from '../../../constants/languages';

const LanguagesToggle: FC = () => {
  const { i18n } = useTranslation();
  const [selectedLng, setSelectedLng] = useState<string>(languages[0].value);

  useEffect(() => {
    const storedSelectedLanguage = sessionStorage.getItem('selectedLng') || 'en';
    setSelectedLng(storedSelectedLanguage);
  }, [])

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
    setSelectedLng(lng);
    sessionStorage.setItem('selectedLng', lng);
  }

  return (
      <Select
        id='language'
        size='small'
        value={selectedLng}
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
};

export default LanguagesToggle;
