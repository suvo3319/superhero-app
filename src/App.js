import { Route, Routes } from "react-router";
import { HomePage } from "./components/HomePage";
import { SuperheroPage } from "./components/SuperHeroPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/super-hero" element={<SuperheroPage />} />
    </Routes>
  );
}

export default App;
