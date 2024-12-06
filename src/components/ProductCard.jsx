import { useNavigate } from "react-router";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/обувь/${product.id}`);
  };
  return (
    <div>
      <div
        className="w-[494] h-[394px] flex flex-col justify-evenly"
        onClick={handleProductClick}
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
