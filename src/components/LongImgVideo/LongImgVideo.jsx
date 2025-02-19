import React from 'react'

const LongImgVideo = ({ image, video }) => {
  return (
    <>
      <div className="flex justify-between mt-5 md:mt-[50px]">
        <img src={image} alt="" className="h-[175px] xs:h-[195px] sm:h-[335px] md:h-[425px] lg:h-[560px] w-[65%] md:w-full xl:h-[675px] xl:w-[800px] object-cover"/>

        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="h-[175px] xs:h-[195px] sm:h-[335px] md:h-[425px] lg:h-[560px] w-[33%] md:w-full xl:h-[675px] xl:w-[380px]"
        ></video>
      </div>
    </>
  )
}

export default LongImgVideo