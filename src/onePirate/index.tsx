import { Home } from './home';
import withRoot from './modules/withRoot';
import { Routes, Route } from "react-router-dom";
import { AppAppBar } from './modules/views/appBar';
import { AppFooter } from './modules/views/appFooter';
import { GeneralInformation } from './generalInformation';

const Index = (): JSX.Element => {
  return (
    <>
      <AppAppBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/general-information" element={<GeneralInformation />}/>
        {/* TODO: Not found section */}
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <AppFooter />
    </>
  );
};

export const Main = withRoot(Index);