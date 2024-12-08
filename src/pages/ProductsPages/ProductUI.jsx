import ProductCard from "../../components/ProductCard";
import Filters from "../../components/Filters";

export default function ProductUI({
  product,
  filters,
  onFiltersChange,
  isFiltersOpen,
  toggleFilters,
  title,
}) {
  return (
    <div className="px-[150px] h-full mt-12">
      <div className="border-b-2 pb-6">
        <h1>{title}</h1>
        <p>Главная / {title}</p>
      </div>

      <button
        onClick={toggleFilters}
        className="mt-4 px-4 py-2 bg-poizonColor text-white rounded"
      >
        {isFiltersOpen ? "Скрыть фильтры" : "Показать фильтры"}
      </button>

      {isFiltersOpen && (
        <Filters filters={filters} onFiltersChange={onFiltersChange} />
      )}

      <div className="flex flex-wrap gap-8 items-center justify-center mb-20 mt-8">
        {product.map((el) => (
          <div
            key={el.id}
            className="w-[494px] h-[394px] flex justify-center gap-5"
          >
            <ProductCard product={el} />
          </div>
        ))}
      </div>
    </div>
  );
}
