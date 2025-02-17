import React from 'react';

const AboutProject = ({ description }) => {
  return (
    <div className="mt-[3.125rem]">
      <div className="flex justify-between items-start gap-12 sm:gap-0">
        <span className="text-[0.5rem] md:text-sm font-bold uppercase tracking-tighter whitespace-nowrap">[о проекте]</span>

        <p className="w-auto sm:w-[48%] text-[0.625rem] sm:text-sm md:text-xl lg:text-[1.4375rem] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};

export default AboutProject;
