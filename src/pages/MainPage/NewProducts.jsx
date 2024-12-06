import { useState } from "react";
import NewProductCard from "./NewProductCard";
import Pagination from "../../components/Pagination";

export default function NewProducts({ products, title }) {
  const itemsOnPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsOnPage; // 4
  const indexOfFirstItem = indexOfLastItem - itemsOnPage; // 0
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-16 ">
      <h1 className="text-center my-6 text-2xl mb-10 font-DMsans font-bold">
        Новые поступления {title}
      </h1>

      <div className="flex justify-evenly h-auto text-center mb-20">
        {currentItems.map((el) => (
          <NewProductCard key={el.id} product={el} />
        ))}
      </div>

      <Pagination
        itemsOnPage={itemsOnPage}
        totalItems={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <div className="flex items-center justify-center mt-8">
        <button className="align-center bg-slate-800 w-[188px] h-[49px] text-white rounded-lg text-base">
          Посмотреть все
        </button>
      </div>
    </div>
  );
}
