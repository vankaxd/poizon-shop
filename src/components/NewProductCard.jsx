export default function NewProductCard({ product, title }) {
  return (
    <div className="w-64 h-42 flex flex-col gap-2 justify-between">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p className="text-mainText">{product.brand}</p>
      <p>{product.price}</p>
    </div>
  );
}
