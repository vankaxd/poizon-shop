import { useParams } from "react-router";
import nikeJordan from "../utils/oneShoe.constant";
import { shoes } from "../utils/productShoes.constants";

export default function ProductInfo() {
  const { productId } = useParams();
  console.log(productId);
  const shoe = shoes.find((item) => item.id === parseInt(productId));
  console.log(shoe);
  return (
    <div>
      <div className="border-b-2 pb-6 mt-12 mx-[150px]">
        <p>Главная / обувь / {shoe.title}</p>
      </div>
      <div className=" px-[150px] mt-8 flex">
        <div className="flex flex-wrap border-2 w-full h-auto">
          <div className="w-full">
            <img src={nikeJordan.images[0]} />
          </div>
          <div className="flex flex-wrap w-[1019px] ">
            {nikeJordan.images.slice(1).map((img, index) => (
              <div key={index} className="w-1/2">
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="ml-6">
          <p className="text-mainText">{nikeJordan.brand}</p>
          <h1 className="font-light text-5xl w-full]">{shoe.title}</h1>
          <p className="mt-4">{shoe.price}</p>
          <p className="mt-4 font-light">
            Все налоги и таможенные сборы включены. Стоимость доставки
            рассчитывается на этапе оформления заказа.
          </p>
          <p className="border-b-2 pb-4 mt-8 font-normal">
            *Бирка на ваших кроссовках поможет выбрать правильный размер.
          </p>
          <div className="flex flex-wrap  justify-center">
            {nikeJordan.sizes.map((size, index) => (
              <button
                key={index}
                className="border-2 p-4 w-1/5 m-2 text-center h-[75px]"
              >
                {size}
              </button>
            ))}
          </div>
          <button className="w-full mt-[56px] bg-[#1F2A37] text-white font-light rounded-lg h-[50px]">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}
