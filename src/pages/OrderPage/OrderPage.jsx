import jordan1 from "../../assets/OneShoeImg/jordan1.png";

export default function OrderPage() {
  return (
    <div className=" w-[600px] m-auto mt-4">
      <h1 className="text-3xl">Оформление заказа</h1>
      <div className="flex mt-6">
        <img src={jordan1} alt="jordan" className="w-56" />
        <div className="ml-4 space-y-2">
          <p>Nike Air Force 1 07</p>
          <p className="text-[#58C94E]">Оригинал</p>
        </div>
      </div>
      <div className="bg-[#EFEFEF] w-full rounded-xl p-4 mt-4 h-16">
        <div className="flex gap-2 justify-center">
          {["44", "45", "43", "42", "41", "40", "39", "38"].map(
            (size, index) => (
              <button
                key={index}
                className="flex justify-center items-center w-[40px] h-[35px]  text-black border border-gray-300 rounded-md hover:bg-gray-200 transition"
              >
                {size}
              </button>
            )
          )}
        </div>
      </div>

      <p className="text-2xl mt-2">Как получать</p>
      <div className="flex gap-4 mt-4">
        <button className="bg-[#EFEFEF] w-52 p-4 rounded-lg hover:bg-gray-200 transition">
          Самовывоз
        </button>
        <button className="bg-[#EFEFEF] w-52 p-4 rounded-lg hover:bg-gray-200 transition">
          Доставка
        </button>
      </div>
      <input
        type="text"
        placeholder="Выбрать пункт выдачи"
        className="mt-4 w-80 p-2 border-2 shadow-xl font-light rounded-lg"
      />
      <p className="text-2xl mt-8">Кому выдать</p>
      <div className="flex flex-col gap-2 py-6 border-b-2">
        <input
          type="text"
          placeholder="Имя и фамилия"
          className="w-80 p-2 border-2 shadow-xl font-light rounded-lg"
        />
        <input
          type="number"
          placeholder="+7"
          className="w-80 p-2 border-2 shadow-xl font-light rounded-lg"
        />
      </div>

      <div className="flex flex-col mt-4 gap-2">
        <div className="flex justify-between">
          <p className="text-xl">Товар</p>
          <p className="text-xl">{"12 185 ₽"}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xl">Доставка</p>
          <p className="text-xl">{"≈400 ₽"}</p>
        </div>
      </div>
      <button className="p-4 bg-[#F8095F] mt-2 rounded-lg w-full text-white">
        {"12 185 ₽ Оплатить"}
      </button>
    </div>
  );
}
