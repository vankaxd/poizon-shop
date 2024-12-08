import { useProductNavigation } from "../hooks/useProductNavigation";

export default function ProductCard({ product }) {
  const handleProductClick = useProductNavigation();
  return (
    <div>
      <div
        className="w-[494] h-[394px] flex flex-col justify-evenly"
        onClick={() => handleProductClick("обувь", product.id)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-[430] h-[257px] object-cover"
        />
        <h2 className="text-center text-base font-normal">{product.title}</h2>
        <p className="text-mainText text-center font-normal text-base">
          {product.brand}
        </p>
        <p className="text-center font-light text-lg">{product.price}</p>
      </div>
    </div>
  );
}
