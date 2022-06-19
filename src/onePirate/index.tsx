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

import { GeneralInformation } from './generalInformation';
import { Itinerary } from './itinerary';
// import { Outfit } from './outfit';
// import { Kids } from './kids/kids';

const Index = (): JSX.Element => {
  return (
    <>
      <AppAppBar />
      <ProductHero />
      {/* <ProductValues /> */}
      <ProductCategories />
      {/* <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero /> */}
      <GeneralInformation />
      <Itinerary />
      {/* <Outfit />
      <Kids /> */}
      <AppFooter />
    </>
  );
};

export const Main = withRoot(Index);