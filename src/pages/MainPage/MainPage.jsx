import Categories from "./Categories";
import Footer from "../../components/Footer";
import FooterPromo from "./FooterPromo";
import Info from "./Info";
import newProducts from "../../utils/newProducts.constants";
import NewProducts from "./NewProducts";

export default function MainPage() {
  return (
    <div>
      <Info />
      <Categories />
      <NewProducts products={newProducts} title="обувь" />
      {/* <NewProducts products={newProducts} title=''/>
      <NewProducts products={newProducts} title=''/> */}
      <FooterPromo />
      <Footer />
    </div>
  );
}
