import { useState, useEffect } from "react";

export default function Filters({ filters, onFiltersChange }) {
  const [priceRange, setPriceRange] = useState(
    filters?.priceRange || [0, 100000]
  );
  const [brands, setBrands] = useState(filters?.brands || []);

  useEffect(() => {
    if (
      priceRange !== filters.priceRange ||
      JSON.stringify(brands) !== JSON.stringify(filters.brands)
    ) {
      onFiltersChange({ priceRange, brands });
    }
  }, [priceRange, brands, filters, onFiltersChange]);

  const handlePriceChange = (value, index) => {
    const newRange = [...priceRange];
    newRange[index] = value === "" ? "" : parseInt(value, 10) || 0;
    setPriceRange(newRange);
  };

  const handleBrandToggle = (brand) => {
    if (brands.includes(brand)) {
      setBrands(brands.filter((b) => b !== brand));
    } else {
      setBrands([...brands, brand]);
    }
  };

  const handleResetFilters = () => {
    const defaultFilters = { priceRange: [0, 100000], brands: [] };
    setPriceRange(defaultFilters.priceRange);
    setBrands(defaultFilters.brands);
    onFiltersChange(defaultFilters);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-8 mt-4">
      <h2 className="text-lg font-semibold mb-4">Фильтры</h2>

      <div className="mb-4">
        <label className="block font-medium mb-2">Цена:</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e.target.value, 0)}
            className="border px-2 py-1 w-full"
            placeholder="От"
          />
          <input
            type="text"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e.target.value, 1)}
            className="border px-2 py-1 w-full"
            placeholder="До"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">Бренды:</label>
        {["Nike", "Adidas", "Puma", "New Balance"].map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={brands.includes(brand)}
              onChange={() => handleBrandToggle(brand)}
              className="mr-2"
            />
            <span>{brand}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2">
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={handleResetFilters}
        >
          Сбросить
        </button>
      </div>
    </div>
  );
}
