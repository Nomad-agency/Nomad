import React from 'react';

const ImageVideo = ({ image, video, reverse = false, heightCustom = "xl:h-[710px]", widthImage = "w-[49%]", widthVideo = "w-[49%]" }) => {
  return (
    <div className={`flex justify-between mt-5 md:mt-[20px] ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className={`${widthImage} xl:w-[780px] overflow-hidden ${heightCustom}`}>
        <img src={image} alt="image" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className={`${widthVideo} xl:w-[400px] h-auto ${heightCustom}`}
      />
    </div>
  );
};

export default ImageVideo;

