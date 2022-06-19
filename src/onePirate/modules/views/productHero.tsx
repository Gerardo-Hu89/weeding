import { useTranslation } from 'react-i18next';
import Typography from '../components/typography';
import { ProductHeroLayout } from './productHeroLayout';

const backgroundImage = 'https://media.istockphoto.com/photos/tropical-beach-palm-trees-sea-wave-and-white-sand-picture-id1300296030?b=1&k=20&m=1300296030&s=170667a&w=0&h=w1s7kmN2TH7O326d263Cs-E44teA1hy6u29UIVf_z1w=';

export const ProductHero = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2">
        {t('letsCelebrate')}
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        {t('mainSubText')}
      </Typography>
    </ProductHeroLayout>
  );
}
