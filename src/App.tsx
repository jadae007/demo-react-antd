import "./App.less";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/about";
const App = () => {
  return (
    <PageLayout>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
    </PageLayout>
  );
};

export default App;
