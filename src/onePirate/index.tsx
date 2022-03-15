import React from 'react';
import withRoot from './modules/withRoot';
import { AppAppBar } from './modules/views/appBar';
import { AppFooter } from './modules/views/appFooter';
import { ProductCTA } from './modules/views/productCTA';
import { ProductHero } from './modules/views/productHero';
import { ProductValues } from './modules/views/productValues';
import { ProductHowItWorks } from './modules/views/productHowItWorks';
import { ProductCategories } from './modules/views/productCategories';
import { ProductSmokingHero } from './modules/views/productSmokingHero';

const Index = (): JSX.Element => {
  return (
    <>
      Hello!!!
      {/* <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
  <AppFooter /> */}
    </>
  );
};

export const Main = withRoot(Index);