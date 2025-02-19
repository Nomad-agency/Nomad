import React from 'react'

const VideoParallel = ({ video1, video2 }) => {
  return (
    <>
      <div className="flex justify-between mt-5 md:mt-[50px]">
        <video
          src={video1}
          autoPlay
          loop
          muted
          playsInline
          className="w-[49%] h-auto object-cover xl:w-[570px] self-stretch"
        ></video>
        <video
          src={video2}
          autoPlay
          loop
          muted
          playsInline
          className="w-[49%] h-auto object-cover xl:w-[597px] self-stretch"
        ></video>
      </div>
    </>
  )
}

export default VideoParallel