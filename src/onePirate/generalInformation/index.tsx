import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import Typography from '../modules/components/typography';
import { BackToHomeBtn } from '../components/backToHomeBtn';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const image = {
  height: 55,
  my: 4,
};

const quintaHotel = require("../../resources/images/quinta.jpeg");
const suitCaseImg = require("../static/themes/onepirate/productValues1.svg").default;

export const GeneralInformation = (): JSX.Element => {
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
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          {t('generalInfo')}
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12}>
            <Box sx={item}>
              <Box
                component="img"
                src={suitCaseImg}
                alt="suitcase"
                sx={image}
              />
              <Typography variant="h5" align="center">
                {t('generalInfoText')}
                <br />
                <a target="_blank" rel="noreferrer" href="https://www.quintasantamonica.com/">https://www.quintasantamonica.com/</a>
                <br /><br />
                <img width="100%" src="https://static.wixstatic.com/media/64cded_a1207f4b8f2649548c7b2f8cd13d826c~mv2.jpg/v1/fill/w_940,h_468,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/64cded_a1207f4b8f2649548c7b2f8cd13d826c~mv2.jpg" alt="Quinta Santa Monica"/>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <BackToHomeBtn />
      </Container>
    </Box>
  );
}