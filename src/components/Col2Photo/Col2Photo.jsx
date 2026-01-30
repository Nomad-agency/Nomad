import React from 'react';

const Col2Photo = ({
  image1,
  image2,
  widthImage1 = "w-[49%]",
  widthImage2 = "w-[49%]",
  styleImage1 = {},
  styleImage2 = {}
}) => {
  return (
    <div className="flex justify-between mt-5 md:mt-[20px]">
      <img
        src={image1}
        alt="photo"
        className={`${widthImage1} xl:w-[calc(50% - 10px)] h-auto object-cover`}
        style={styleImage1}
        loading="lazy"
      />
      <img
        src={image2}
        alt="photo"
        className={`${widthImage2} xl:w-[calc(50% - 10px)] h-auto object-cover`}
        style={styleImage2}
        loading="lazy"
      />
    </div>
  );
};

export default Col2Photo;
