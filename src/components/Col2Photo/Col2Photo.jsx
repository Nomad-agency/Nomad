import React from 'react';

const Col2Photo = ({ image1, image2 }) => {
  return (
    <div className="flex justify-between mt-5 md:mt-[50px]">
      <img src={image1} alt="photo" className="w-[49%] xl:w-auto h-auto object-cover" loading='lazy'/>
      <img src={image2} alt="photo" className="w-[49%] xl:w-auto h-auto object-cover" loading='lazy'/>
    </div>
  );
};

export default Col2Photo;
