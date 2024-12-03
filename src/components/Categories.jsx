import { useRef } from "react";
import categories from "../utils/categories.constants";
import CategoriesCard from "./CategoriesCard";

export default function Categories() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="flex justify-around items-center my-6">
        <h1 className="text-2xl font-bold">
          Категории.{" "}
          <span className="text-mainText font-normal">
            Гарантированно оригинальные товары
          </span>
        </h1>
        <div className="flex space-x-2">
          <button
            className="rounded-full border-2 border-slate-300 px-2"
            onClick={scrollLeft}
          >
            {"<"}
          </button>
          <button
            className="rounded-full border-2 border-slate-300 px-2"
            onClick={scrollRight}
          >
            {">"}
          </button>
        </div>
      </div>
      <div
        className="flex overflow-x-auto space-x-6 mx-12"
        ref={scrollContainerRef}
      >
        {categories.map((category) => {
          return <CategoriesCard key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
}
