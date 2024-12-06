export default function Pagination({
  itemsOnPage,
  totalItems,
  paginate,
  currentPage,
}) {
  const totalPages = Math.ceil(totalItems / itemsOnPage);

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        className="px-4 py-2 text-black rounded  text-xl"
        disabled={currentPage === 1}
      >
        {"<"}
      </button>

      <span className="text-light">
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        className="px-4 py-2  text-black rounded text-xl"
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
}
