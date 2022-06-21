import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '../components/typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export const ProductCategories = (): JSX.Element => {
  const { t } = useTranslation();
  const images = [
    {
      url: require('../../../resources/images/stars.png'),
      title: t('generalInfo'),
      width: '40%',
      link: 'general-information'
    },
    {
      url: require('../../../resources/images/pineapple.png'),
      title: t('itinerary'),
      width: '20%',
      link: 'itinerary'
    },
    {
      url: 'https://images.unsplash.com/photo-1636138105000-6e8eb02a744e?auto=format&fit=crop&w=1470&q=80',
      title: t('transport'),
      width: '40%',
      link: 'transport'
    },
    {
      url: 'https://images.unsplash.com/photo-1498877877506-bddff9f7207e?auto=format&fit=crop&w=687&q=80',
      title: t('outfit'),
      width: '24%',
      link: 'outfit'
    },
    {
      url: require('../../../resources/images/palmTree.png'),
      title: t('gifts'),
      width: '36%',
      link: 'gifts'
    },
    {
      url: 'https://images.unsplash.com/photo-1522432111935-cd9ae647fc8b?auto=format&fit=crop&w=1470&q=80',
      title: t('kidsInfo'),
      width: '20%',
      link: 'kids-info'
    },
    {
      url: require('../../../resources/images/palmTrees.png'),
      title: t('tips'),
      width: '20%',
      link: 'tips'
    },
  ];

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{width: image.width}}
          >
            <a href={`#${image.link}`}>
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 40%',
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <ImageBackdrop className="imageBackdrop" />
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'common.white',
                }}
              >
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className="imageTitle"
                >
                  {image.title}
                  <div className="imageMarked" />
                </Typography>
              </Box>
            </a>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
