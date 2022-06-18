import { ProductHero } from '../modules/views/productHero';
import { ProductCTA } from '../modules/views/productCTA';
import { ProductValues } from '../modules/views/productValues';
import { ProductHowItWorks } from '../modules/views/productHowItWorks';
import { ProductCategories } from '../modules/views/productCategories';
import { ProductSmokingHero } from '../modules/views/productSmokingHero';

export const Home = () => (
  <>
    <ProductHero />
    <ProductValues />
    <ProductCategories />
    <ProductHowItWorks />
    <ProductCTA />
    <ProductSmokingHero />
  </>
);