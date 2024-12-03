import Categories from "../components/Categories";
import Info from "../components/Info";
import NavBar from "../components/NavBar";

export default function MainPage() {
  return (
    <div>
      <NavBar />
      <Info />
      <Categories />
    </div>
  );
}