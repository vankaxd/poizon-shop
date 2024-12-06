import Logo from "../assets/logo.svg";
import ShoppingCart from "../assets/ShoppingCart.svg";
import WhiteLogo from "../assets/whiteLogo.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="border-b-4 ">
      <div className="ml-40 mr-40 flex items-center justify-between h-24">
        <Link to="/">
          {" "}
          <img src={Logo} alt="logo" />
        </Link>
        <ul className="flex flex-row space-x-8 ">
          <li>
            <Link to="/обувь">Обувь</Link>
          </li>
          <li>
            <a href="#">Одежда</a>
          </li>
          <li>
            <a href="#">Аксессуары</a>
          </li>
          <li>
            <a href="#">Калькулятор стоимости</a>
          </li>
          <li>
            <a href="#">Помощь</a>
          </li>
          <li>
            <a href="#">Подобрать размер</a>
          </li>
        </ul>

        <div className="flex items-center">
          <img src={ShoppingCart} alt="shoppingCart" className="mr-2" />

          <button className="flex justify-center items-center bg-poizonColor space-x-2 text-white rounded-lg px-4">
            <img src={WhiteLogo} alt="buttonLogo" className="w-8 h-6s" />
            <div className="text-left">
              <p>Наш телеграм канал</p>
              <p className="font-extralight">Telegram web app</p>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
