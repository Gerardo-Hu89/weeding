import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import Typography from '../components/typography';

// const iconStyle = {
//   width: 48,
//   height: 48,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: 'info.main',
//   mr: 1,
//   '&:hover': {
//     bgcolor: 'info.dark',
//   },
// };

// const facebookImg = require("../../static/themes/onepirate/appFooterFacebook.png");

export const AppFooter = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 100 }}
            >
              {/* <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="https://www.facebook.com/lyken8" sx={iconStyle}>
                  <img src={facebookImg} alt="Facebook" />
                </Box>
                <Box component="a" href="https://www.facebook.com/maurane.sagot" sx={iconStyle}>
                  <img src={facebookImg} alt="Facebook" />
                </Box>
              </Grid> */}
              <Grid item>
                © Momo & Gera &nbsp;
                {new Date().getFullYear()}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {t('footerAppInfo')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
