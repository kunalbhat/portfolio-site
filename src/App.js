import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="app-container mt-8">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
