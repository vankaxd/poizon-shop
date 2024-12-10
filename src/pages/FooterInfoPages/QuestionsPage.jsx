import { useState } from "react";

import questions from "../../utils/questions.constants";
import SlideButton from "../../components/SlideButton";

export default function QuestionsPage() {
  const [openSlides, setOpenSlides] = useState({});

  const handleSlideOpen = (index) => {
    setOpenSlides((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="w-full px-32">
      <div className="flex flex-col">
        <h1 className="font-normal text-2xl mt-8">Частые вопросы</h1>
        <div className="mt-8">
          {questions.map((slide, index) => (
            <SlideButton
              key={index}
              handleSlideOpen={() => handleSlideOpen(index)}
              slideIsOpen={openSlides[index]}
              title={slide.title}
              info={slide.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
