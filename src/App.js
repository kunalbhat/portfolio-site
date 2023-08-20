import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Footer } from "./Components/Footer";

import { Home } from "./pages/Home";
import { SkytellerCaseStudy } from "./pages/case-studies/Skyteller";

function App() {
  return (
    <div className="app-container container mt-8">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/case-studies/skyteller"
          element={<SkytellerCaseStudy />}
        ></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
