import Categories from "../components/Categories";
import Footer from "../components/Footer";
import FooterPromo from "../components/FooterPromo";
import Info from "../components/Info";
import NavBar from "../components/NavBar";
import NewProducts from "../components/NewProducts";
import newProducts from "../utils/newProducts.constants";

export default function MainPage() {
  return (
    <div>
      <NavBar />
      <Info />
      <Categories />
      <NewProducts products={newProducts} title="обуви" />
      {/* <NewProducts products={newProducts} title=''/>
      <NewProducts products={newProducts} title=''/> */}
      <FooterPromo />
      <Footer />
    </div>
  );
}
