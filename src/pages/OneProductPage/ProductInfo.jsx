import { useParams } from "react-router";
import nikeJordan from "../../utils/oneShoe.constant";
import { shoes, anotherShoes } from "../../utils/productShoes.constants";
import AnotherProductsCard from "../../components/AnotherProductsCard";
import { useState } from "react";
import SlideButton from "./SlideButton";
import slideIcon1 from "../../assets/OneShoeImg/slideIcons/slideIcon1.svg";
import { slideInfo } from "../../utils/slide.constants";

export default function ProductInfo() {
  const { productId } = useParams();
  const shoe = shoes.find((item) => item.id === parseInt(productId));

  // Создаем состояние для всех слайдов
  const [openSlides, setOpenSlides] = useState({});

  const handleSlideOpen = (index) => {
    setOpenSlides((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      <div className="border-b-2 pb-6 mt-12 mx-[150px]">
        <p>Главная / обувь / {shoe.title}</p>
      </div>
      <div className="px-[150px] mt-8 flex">
        <div className="flex flex-wrap w-full h-auto md:w-1/2">
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
          <div className="flex flex-wrap justify-center">
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

          {slideInfo.map((slide, index) => (
            <SlideButton
              key={index}
              handleSlideOpen={() => handleSlideOpen(index)}
              slideIsOpen={openSlides[index]}
              title={slide.title}
              info={slide.description}
              icon={slideIcon1}
            />
          ))}
        </div>
      </div>

      <h1 className="mx-[150px] mb-[32px] mt-[117px] font-medium text-2xl font-DMsans">
        Вам также может понравиться
      </h1>
      <div className="mx-[150px] flex w-auto mt-6 gap-2">
        {anotherShoes.map((shoe) => (
          <AnotherProductsCard product={shoe} key={shoe.id} />
        ))}
      </div>
    </div>
  );
}
