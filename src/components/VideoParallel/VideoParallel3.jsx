import React from 'react'

const VideoParallel3 = ({ video1, video2, video3, widthVideo1 = "w-[32%]", widthVideo2 = "w-[32%]", widthVideo3 = "w-[32%]" }) => {
  return (
    <>
      <div className="flex mt-5 md:mt-[20px] gap-x-[24px]">
        <video
          src={video1}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`${widthVideo1} h-auto object-cover xl:w-[384px] self-stretch`}
        ></video>
        <video
          src={video2}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`${widthVideo2} h-auto object-cover xl:w-[384px] self-stretch`}
        ></video>
        <video
          src={video3}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`${widthVideo3} h-auto object-cover xl:w-[384px] self-stretch`}
        ></video>
      </div>
    </>
  )
}

export default VideoParallel3
