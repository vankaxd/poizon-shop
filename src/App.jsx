import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ShoesPage from "./pages/ProductsPages/ShoesPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/обувь" element={<ShoesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
