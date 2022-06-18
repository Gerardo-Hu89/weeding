import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { AppBar } from '../components/appBar';
import { useTranslation } from 'react-i18next';
import { Toolbar } from '../components/toolBar';
import i18n from '../../../i18n';

export const AppAppBar = (): JSX.Element => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<string>('es');

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <h4>{t('language')}: &nbsp;</h4>
          <Select
            value={language}
            style={{background:'white', maxHeight:'30px', marginTop:'18px'}}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {/* <MenuItem value="en">En</MenuItem> */}
            <MenuItem value="es">Es</MenuItem>
            {/* <MenuItem value="fr">Fr</MenuItem> */}
          </Select>
        </Box>
      </Toolbar>
    </AppBar>
  );
}