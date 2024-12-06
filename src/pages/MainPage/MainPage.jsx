import Categories from "./Categories";
import Footer from "../../components/Footer";
import FooterPromo from "./FooterPromo";
import Info from "./Info";

import NewProducts from "./NewProducts";
import newProducts from "../../utils/newProducts.constants";

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
