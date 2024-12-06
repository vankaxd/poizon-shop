import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ShoesPage from "./pages/ProductsPages/ShoesPage";
// import ClothingPage from "./pages/ProductsPages/ClothingPage";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/обувь" element={<ShoesPage title={"Обувь"} />} />
        {/* <Route path="/одежда" element={<ClothingPage title={"Одежда"} />} /> */}
        <Route path="/test" element={<ProductInfo />} />
        <Route path="/одежда/:productId" element={<ProductInfo />} />
        <Route path="/обувь/:productId" element={<ProductInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
