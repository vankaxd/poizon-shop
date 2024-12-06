export default function CategoriesCard({ category }) {
  return (
    <div className=" bg-categoryBg flex min-w-[500px] p-4 rounded-lg shadow-md">
      <div className="flex justify-center flex-col space-y-4">
        <h2 className="font-bold">{category.title}</h2>
        <p className="text-xs text-mainText">{category.description}</p>
        <button className="text-xs rounded-full bg-white p-4 w-24">
          Выбрать
        </button>
      </div>
      {category.image && (
        <img
          src={category.image}
          alt={category.title}
          className="w-40 h-auto mt-4"
        />
      )}
    </div>
  );
}
