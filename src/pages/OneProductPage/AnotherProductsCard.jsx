export default function AnotherProductsCard({ product }) {
  return (
    <div className=" w-full text-center flex flex-col justify-between">
      <img src={product.image} alt="cardImage" className="w-full" />
      <h1>{product.title}</h1>
      <p className="text-mainText font-light">{product.brand}</p>
      <p>{product.price}</p>
    </div>
  );
}
