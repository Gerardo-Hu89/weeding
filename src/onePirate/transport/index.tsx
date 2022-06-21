import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import Grid from '@mui/material/Grid';
import { Theme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import Typography from '../modules/components/typography';
// import { BackToHomeBtn } from '../components/backToHomeBtn';

export const Transport = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Box
      id="transport"
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 3 }}>
          {t('transport')}
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          {t('transportText')}
        </Typography>
      </Container>
    </Box>
  );
}
