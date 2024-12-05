export default function Pagination({
  itemsOnPage,
  totalItems,
  paginate,
  currentPage,
}) {
  const totalPages = Math.ceil(totalItems / itemsOnPage); // Количество страниц

  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Стрелка влево */}
      <button
        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        className="px-4 py-2 text-black rounded  text-xl"
        disabled={currentPage === 1} // Отключить кнопку, если текущая страница первая
      >
        {"<"}
      </button>

      {/* Отображение текущей страницы и общего количества страниц */}
      <span className="text-light">
        {currentPage} / {totalPages}
      </span>

      {/* Стрелка вправо */}
      <button
        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        className="px-4 py-2  text-black rounded text-xl"
        disabled={currentPage === totalPages} // Отключить кнопку, если текущая страница последняя
      >
        {">"}
      </button>
    </div>
  );
}
