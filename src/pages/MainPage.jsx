import Categories from "../components/Categories";
import FooterCalc from "../components/FooterCalc";
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
      <FooterCalc />
    </div>
  );
}
