import React from 'react';

const Cards = ({ cards }) => {
  return (
    <div className="w-full sm:w-[40%] flex items-center flex-wrap gap-[3px] mt-5">
      {cards.map((item, index) => (
        <div
          className={`inline-flex items-center justify-center bg-[#E9E8E8CC] rounded-[100px] h-[29px] sm:h-[35px] px-[20px] sm:px-[26px] text-[10px] lg:text-xs font-semibold whitespace-nowrap uppercase`}
          key={index}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Cards;
