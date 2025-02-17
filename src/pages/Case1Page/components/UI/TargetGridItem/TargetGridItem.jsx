import React from 'react';

const TargetGridItem = ({ id, title }) => {
  return (
    <div className="flex items-center gap-[36px] md:gap-[45px]">
      <span className="text-[40px] md:text-[5rem] font-medium text-[#D04944]">0{id}</span>
      <div className={`text-[10px] md:text-[1.375rem] font-normal leading-[13px] md:leading-[28.6px] ${id === 3 ? '' : 'tracking-tight'} w-[60%] md:w-auto`}>{title}</div>
    </div>
  );
};

export default TargetGridItem;
