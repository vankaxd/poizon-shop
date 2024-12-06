const useFilter = (products, filters) => {
  return products.filter((product) => {
    const price = parseFloat(
      product.price.split(" ")[0].replace(".", "").replace(",", ".")
    );

    const minPrice = filters.priceRange[0] || 0;
    const maxPrice = filters.priceRange[1] || Infinity;

    const matchesPrice = price >= minPrice && price <= maxPrice;

    const matchesBrand =
      filters.brands.length === 0 || filters.brands.includes(product.brand);

    return matchesPrice && matchesBrand;
  });
};

export default useFilter;
