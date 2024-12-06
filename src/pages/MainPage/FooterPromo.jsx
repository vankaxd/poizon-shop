import qr from "../../assets/PromoCardImg/qr.png";
import promoShoe from "../../assets/PromoCardImg/promoShoe.png";
import gift from "../../assets/PromoCardImg/gift.svg";
import bigGift from "../../assets/PromoCardImg/bigGift.svg";
import whiteLogo from "../../assets/whiteLogo.svg";

export default function FooterPromo() {
  return (
    <div className="flex  gap-8 mt-12 mr-[142px] ml-[142px] mb-12">
      <div className="h-[460px] w-[540px] bg-footer rounded-[50px] flex flex-col items-center justify-around px-10 py-8 ">
        <h1 className="text-xl text-center p-6 font-DMsans font-medium w-[290px]">
          Рассчитай стоимость заказа прямо на сайте
        </h1>

        <input
          type="text"
          placeholder="Цена на товар в юанях"
          className="border-[#57BFC180] border-2 placeholder-[#57BFC180] rounded-full px-6 py-2"
        />

        <div className="flex justify-between gap-6">
          <button className="bg-[#57BFC126] text-[#57BFC1] px-4 py-2 rounded-full w-40">
            Обувь
          </button>
          <button className="rounded-full bg-poizonColor w-12 text-white">
            {">>"}
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-medium">
            Итоговая соимость: <span className="font-semibold">3500₽</span>
          </h1>
          <p className="text-[#050F0F80]">С учётом доставки</p>
        </div>
      </div>

      <div className="h-[480px] w-[1032px] bg-poizonColor rounded-[50px] relative m-auto">
        <img
          src={whiteLogo}
          alt="logo"
          className="w-[416px] h-[297px] absolute right-24 top-12 opacity-20"
        />
        <div className="flex flex-col space-y-4 pl-12 pt-12 h-full ">
          <h1 className="text-white text-[40px] leading-[48px] font-bold">
            Подходит цена? <br /> - скорее заказывай!
          </h1>
          <p className="text-[#F9FFFF80] text-[20px] w-[477px]">
            Выбирайте товары в POIZON или покупайте прямо с нашего склада в
            Москве
          </p>
          {/* QR-код */}
          <div className="bg-stone-600 p-4 rounded-lg max-w-32">
            <img src={qr} alt="QR Code" className="w-24 h-24" />
          </div>
          <button
            className=" bg-teal-600 text-white px-4 py-2 rounded-md absolute -bottom-6
           left-12"
          >
            Сделать заказ
          </button>
        </div>
        <div className="">
          <img
            src={promoShoe}
            alt="promoShoe"
            className="w-[800px] h-auto object-contain absolute bottom-0 right-0 "
          />

          <img
            src={gift}
            alt="smallGift"
            className="w-[60px] h-auto object-contain top-4 absolute bottom-[400px] right-[270px]"
          />
          <img
            src={bigGift}
            alt="bigGift"
            className="w-[100px] h-auto object-contain top-2 absolute bottom-[300px] right-[350px]"
          />
        </div>
      </div>
    </div>
  );
}
