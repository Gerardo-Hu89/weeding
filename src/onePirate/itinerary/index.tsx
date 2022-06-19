import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';
import Grid from '@mui/material/Grid';
import WcIcon from '@mui/icons-material/Wc';
import { Theme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import SurfingIcon from '@mui/icons-material/Surfing';
import Typography from '../modules/components/typography';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import RestaurantIcon from '@mui/icons-material/Restaurant';

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

const ItineraryBox = ({title, bodyText, icon}:any): JSX.Element => (
  <Grid item xs={12} md={4}>
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

export const Itinerary = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Box
      id="itinerary"
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
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 5 }}>
          {t('itinerary')}
        </Typography>
        <div>
          <Grid container spacing={5}>
            <ItineraryBox
              title={"1"}
              bodyText={t('dynamics')}
              icon={<SurfingIcon sx={{ fontSize: "80px", color: '#000000' }} />}
            />
            <ItineraryBox
              title={"2"}
              bodyText={t('ceremony')}
              icon={<WcIcon sx={{ fontSize: "80px", color: '#000000' }} />}
            />
            <ItineraryBox
              title={"3"}
              bodyText={t('cocktailsAndSnacks')}
              icon={<SportsBarIcon sx={{ fontSize: "80px", color: '#000000' }} />}
            />
            <ItineraryBox
              title={"4"}
              bodyText={t('mariachi')}
              icon={<MusicNoteIcon sx={{ fontSize: "80px", color: '#000000' }} />}
            />
            <ItineraryBox
              title={"5"}
              bodyText={t('dinner')}
              icon={<RestaurantIcon sx={{ fontSize: "80px", color: '#000000' }} />}
            />
          </Grid>
        </div>
        <br /><br />
        <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
          {t('continueTheParty')}
        </Typography>
        <NightlifeIcon sx={{ fontSize: "100px", color: '#000000' }}/>
      </Container>
    </Box>
  );
}
