import * as React from 'react';
import { Theme, styled } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

interface ProductHeroLayoutProps {
  sxBackground: SxProps<Theme>;
}

const wonderImg = require("../../static/themes/onepirate/productHeroWonder.png");
const arrowDownImg = require("../../static/themes/onepirate/productHeroArrowDown.png");

export const ProductHeroLayout = (
  props: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps,
) => {
  const { sxBackground, children } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '50px'
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
      </Container>
    </ProductHeroLayoutRoot>
  );
}
