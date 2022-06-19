import { Home } from './home';
import withRoot from './modules/withRoot';
import { ScrollToTop } from '../resources/misc';
import { Itinerary } from './itinerary/itinerary';
import { Routes, Route } from "react-router-dom";
import { AppAppBar } from './modules/views/appBar';
import { AppFooter } from './modules/views/appFooter';
import { GeneralInformation } from './generalInformation';

const Index = (): JSX.Element => {
  return (
    <>
      <ScrollToTop />
      <AppAppBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/general-information" element={<GeneralInformation />}/>
        <Route path="/itinerary" element={<Itinerary />}/>
        {/* TODO: Not found section */}
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <AppFooter />
    </>
  );
};

export const Main = withRoot(Index);