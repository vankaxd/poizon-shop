import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ShoesPage from "./pages/ProductsPages/ShoesPage";
import ProductInfo from "./pages/OneProductPage/ProductInfo";
import OrderPage from "./pages/OrderPage/OrderPage";
import QuestionsPage from "./pages/FooterInfoPages/QuestionsPage";
import DeliveryPage from "./pages/FooterInfoPages/DeliveryPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/вопросы" element={<QuestionsPage />} />
        <Route path="/доставка" element={<DeliveryPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/обувь" element={<ShoesPage title={"Обувь"} />} />
        <Route path="/одежда" element={<ShoesPage title={"Одежда"} />} />
        <Route path="/test" element={<ProductInfo />} />
        <Route path="/одежда/:productId" element={<ProductInfo />} />
        <Route path="/обувь/:productId" element={<ProductInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
