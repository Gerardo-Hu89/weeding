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
import { BackToHomeBtn } from '../components/backToHomeBtn';
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

const curvyLinesImg = require("../static/themes/onepirate/productCurvyLines.png").default;

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
        <Box
          component="img"
          src={curvyLinesImg}
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          {t('itinerary')}
        </Typography>
        <div>
          <Grid container spacing={5}>
            <ItineraryBox
              title={"1"}
              bodyText={"Dinamicas - 11:00a.m  a 1:00p.m"}
              icon={<SurfingIcon sx={{ fontSize: "80px", color: '#000000' }} />}
            />
            <ItineraryBox
              title={"2"}
              bodyText={"Ceremonia - 4:00p.m"}
              icon={<WcIcon sx={{ fontSize: "80px", color: '#000000' }} />}
            />
            <ItineraryBox
              title={"3"}
              bodyText={"Cocteleria y snacks - 5:00p.m"}
              icon={<SportsBarIcon sx={{ fontSize: "80px", color: '#000000' }} />}
            />
            <ItineraryBox
              title={"4"}
              bodyText={"Mariachi - 6:00p.m a 8:00p.m"}
              icon={<MusicNoteIcon sx={{ fontSize: "80px", color: '#000000' }} />}
            />
            <ItineraryBox
              title={"5"}
              bodyText={"Cena en Quinta Santa Monica - 9:00a.m"}
              icon={<RestaurantIcon sx={{ fontSize: "80px", color: '#000000' }} />}
            />
          </Grid>
        </div>
        <br /><br />
        <Typography variant="h4" component="h2" sx={{ mb: 14 }}>
          Y que siga la fiesta hasta que el cuerpo aguante!
        </Typography>
        <NightlifeIcon sx={{ fontSize: "100px", color: '#000000' }}/>
        <BackToHomeBtn />
      </Container>
    </Box>
  );
}
