import SlideInfo from "./SlideInfo";

export default function SlideButton({
  handleSlideOpen,
  slideIsOpen,
  title,
  info,
  icon,
}) {
  return (
    <div className="relative mt-4">
      <button
        className={`w-full h-[40px] flex justify-between items-center text-sm font-medium px-[19px] ${
          slideIsOpen ? "border-0" : "border-b-2"
        }`}
        onClick={handleSlideOpen}
      >
        <div className="flex gap-2">
          <img src={icon} alt="" />
          <p className="text-[#1F2A37]">{title}</p>
        </div>
        <p>{">"}</p>
      </button>

      {slideIsOpen && (
        <div
          className={`absolute top-full left-0 w-full  py-4 animate-slideDown bg-white z-10`}
        >
          <SlideInfo info={info} />
        </div>
      )}
    </div>
  );
}
