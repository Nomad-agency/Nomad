import React from 'react';

const ImageVideo = ({ image, video, reverse = false, heightCustom = "xl:h-[710px]" }) => {
  return (
    <div className={`flex justify-between mt-[50px] ${reverse ? 'flex-row-reverse' : ''}`}>
      <img src={image} alt="image" className="w-[49%] xl:w-auto h-auto object-cover" />
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className={`w-[49%] xl:w-[598px] h-auto ${heightCustom}`}
      ></video>
    </div>
  );
};

export default ImageVideo;

