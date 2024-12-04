export default function FooterCalc() {
  return (
    <div className="flex justify-around w-full border-4 gap-8">
      <div className="h-[460px] w-[340px] bg-footer rounded-[50px] flex flex-col items-center py-12">
        <h1 className="text-xl text-center p-6">
          Рассчитай стоимость заказа прямо на сайте
        </h1>
        <input
          type="text"
          placeholder="Цена на товар в юанях"
          className="border-[#57BFC180] border-2 placeholder-[#57BFC180] rounded-full px-6 py-2"
        />
      </div>
      <div className="h-[480px] w-[800px] bg-poizonColor rounded-[50px] p-12">
        Second
      </div>
    </div>
  );
}
