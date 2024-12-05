import NewProductCard from "./NewProductCard";

export default function NewProducts({ products, title }) {
  return (
    <div className="mt-16 ">
      <h1 className="font-bold text-center my-6 text-2xl mb-10 font-DMsans font-bold">
        Новые поступления {title}
      </h1>
      <div className="flex justify-evenly text-center">
        {products.map((el) => (
          <NewProductCard key={el.id} product={el} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-8">
        <button className="align-center bg-slate-800 w-[188px] h-[49px] text-white rounded-lg text-base">
          Посмотреть все
        </button>
      </div>
    </div>
  );
}
