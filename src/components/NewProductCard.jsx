export default function NewProductCard({ product }) {
  return (
    <div className="w-64 h-[250px] flex flex-col gap-4 justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[150px] object-cover"
      />
      <h2 className="text-center">{product.title}</h2>
      <p className="text-mainText text-center">{product.brand}</p>
      <p className="text-center">{product.price}</p>
    </div>
  );
}
