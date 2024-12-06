import { useState } from "react";
import ProductUI from "../../components/ProductUI";
import { shoes } from "../../utils/productShoes.constants";
import useFilter from "../../hooks/useFilter";

export default function ShoesPage({ title }) {
  const [filters, setFilters] = useState({
    priceRange: [3000, 100000],
    brands: [],
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    console.log(newFilters);
  };

  const filteredProducts = useFilter(shoes, filters);

  const toggleFilters = () => {
    setIsFiltersOpen((prev) => !prev);
  };

  return (
    <div className="clothing-page">
      <ProductUI
        product={filteredProducts}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        isFiltersOpen={isFiltersOpen}
        toggleFilters={toggleFilters}
        title={title}
      />
    </div>
  );
}
