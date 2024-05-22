import { useState, useRef } from "react";

const Slider = ({ sliderData, onSlideClick, numberSlider }) => {
  const [start, end] = numberSlider;
  const [currentIndex, setCurrentIndex] = useState(start);

  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? sliderData.length - 3 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (sliderData.length - 2));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      handleNextClick();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swiped right
      handlePrevClick();
    }
  };

  return (
    <div
      className='relative w-full overflow-hidden flex items-center py-5'
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={handlePrevClick}
        className='absolute left-0 top-1/2 cursor-pointer z-10'
      >
        <svg
          width='8'
          height='14'
          viewBox='0 0 8 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7 1L1 7L7 13'
            stroke='#C811AA'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <div className='flex mx-auto mt-2'>
        {sliderData.slice(currentIndex, currentIndex + end).map((el) => (
          <div className='' key={el.id} onClick={() => onSlideClick(el.text)}>
            {el.text ? (
              <div className='bg-primary mx-1 text-[12px] font-semibold text-[#fff] rounded-md py-[6px] px-2'>
                {el.text}
              </div>
            ) : (
              <img
                className='w-[90%] h-[100px] mx-auto rounded-md'
                src={el.img}
              />
            )}
          </div>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        className='absolute right-0 top-1/2 cursor-pointer z-10'
      >
        <svg
          width='8'
          height='14'
          viewBox='0 0 8 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1 13L7 7L0.999999 1'
            stroke='#C811AA'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
