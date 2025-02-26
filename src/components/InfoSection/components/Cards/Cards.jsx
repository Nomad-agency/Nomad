import React from 'react';
import arrow from "./assets/up_right.svg"
const Cards = ({ cards, nomad }) => {
  return (
    <div className="w-full sm:w-[40%] flex items-center flex-wrap gap-[3px] mt-5">
      {cards.map((item, index) => (
        <div
          className={`inline-flex items-center justify-center bg-[#E9E8E8CC] rounded-[100px] h-[29px] sm:h-[35px] px-[16px] text-[10px] lg:text-xs font-semibold whitespace-nowrap uppercase`}
          key={index}
        >
          {item}
        </div>
      ))}
    {nomad &&  <a
        href='http://nomad-arch.ru' target='_blank'
        className={`flex items-center justify-center gap-[8px] rounded-[100px] h-[29px] sm:h-[35px] px-[16px] text-[10px] lg:text-xs font-semibold whitespace-nowrap uppercase bg-[#393939] text-[white]`}
      >
        nomad.arch
        <img src={arrow} alt="" className='w-[8px] sm:w-[10px] h-auto'/>
      </a>}
    </div>
  );
};

export default Cards;
