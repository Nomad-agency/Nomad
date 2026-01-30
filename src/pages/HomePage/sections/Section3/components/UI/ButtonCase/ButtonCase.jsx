import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowUpRight } from 'react-icons/hi2';

const ButtonCase = ({ link, disabled = false }) => {
  if (disabled || !link) {
    return (
      <span
        aria-disabled="true"
        className="absolute top-5 right-5 w-[29px] sm:w-[35px] aspect-square flex items-center justify-center bg-[#FFFFFFCC] rounded-full cursor-default opacity-60"
      >
        <HiArrowUpRight />
      </span>
    );
  }

  return (
    <Link
      to={link}
      className="absolute top-5 right-5 w-[29px] sm:w-[35px] aspect-square flex items-center justify-center bg-[#FFFFFFCC] rounded-full cursor-pointer transition-all duration-200 hover:bg-[#000000CC] hover:text-white"
    >
      <HiArrowUpRight />
    </Link>
  );
};

export default ButtonCase;
