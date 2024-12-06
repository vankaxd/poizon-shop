import infoPicture from "../../assets/info-picture.png";

export default function Info() {
  return (
    <div className="flex justify-evenly bg-mainbg py-6">
      <div className="flex flex-col mt-12">
        <h1 className="font-bold text-3xl">Оригинальные товары от POIZON </h1>
        <ul className="list-disc pl-5 text-mainText mt-4">
          <li>Доставка по всей России бесплатно</li>
          <li>Официально зарегистрированное юридическое лицо</li>
          <li>Оформление и оплата заказа как в магазине</li>
          <li>Только сертифицированные товары из каталога POIZON</li>
          <li>Доставили более 10 000 посылок за 3 года</li>
        </ul>
      </div>
      <img src={infoPicture} alt="infoPicture" className="w-96 h-72" />
    </div>
  );
}
