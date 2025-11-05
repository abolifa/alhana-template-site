import { Route, Routes } from "react-router-dom";
import HomeLayout from "@/pages/Layout";
import HomePage from "./pages/home/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
