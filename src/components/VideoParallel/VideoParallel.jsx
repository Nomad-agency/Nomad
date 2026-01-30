import React from 'react'

const VideoParallel = ({ video1, video2, widthVideo1 = "w-[49%]", widthVideo2 = "w-[49%]" }) => {
  return (
    <>
      <div className="flex justify-between mt-5 md:mt-[20px]">
        <video
          src={video1}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`${widthVideo1} h-auto object-cover xl:w-[570px] self-stretch`}
        ></video>
        <video
          src={video2}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`${widthVideo2} h-auto object-cover xl:w-[597px] self-stretch`}
        ></video>
      </div>
    </>
  )
}

export default VideoParallel