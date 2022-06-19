import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import Grid from '@mui/material/Grid';
import { Theme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import Typography from '../modules/components/typography';
import SevereColdIcon from '@mui/icons-material/SevereCold';
// import { BackToHomeBtn } from '../components/backToHomeBtn';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const OutfitBox = ({title, bodyText, icon}:any): JSX.Element => (
  <Grid item xs={12} md={6}>
    <Box sx={item}>
      <Box sx={number}>{title}</Box>
      <IconButton>
        {icon}
      </IconButton>
      <Typography variant="h5" align="center">
        {bodyText}
      </Typography>
    </Box>
  </Grid>
);

export const Outfit = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Box
      id="outfit"
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
          {t('outfit')}
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          <ul>
            <li>{t('outfitText1')}</li>
            <li>{t('outfitText2')}</li>
          </ul>
        </Typography>
        <Grid container spacing={5}>
          <OutfitBox
            title={"°"}
            bodyText={t('outfitText4')}
            icon={<LightModeIcon sx={{ fontSize: "80px", color: '#000000' }} />}
          />
          <OutfitBox
            title={"°"}
            bodyText={t('outfitText3')}
            icon={<SevereColdIcon sx={{ fontSize: "80px", color: '#000000' }} />}
          />
        </Grid>
      </Container>
    </Box>
  );
}
