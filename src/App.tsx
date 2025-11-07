import { Route, Routes } from "react-router-dom";
import HomeLayout from "@/pages/Layout";
import HomePage from "./pages/home/home";
import NotFound from "./pages/NotFound";
import SCPC from "./pages/partners/SCPC";
import SOFAP from "./pages/partners/SOFAP";
import CIB from "./pages/partners/CIB";
import STRACAU from "./pages/partners/STRACAU";
import ScrollToTop from "./components/scroll-to-top";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/scpc" element={<SCPC />} />
          <Route path="/sofap" element={<SOFAP />} />
          <Route path="/cib" element={<CIB />} />
          <Route path="/stracau" element={<STRACAU />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
