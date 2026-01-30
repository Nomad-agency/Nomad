import React from 'react'

const ImageCustom = ({ image }) => {
  return (
    <img src={image} alt="image 12" className="mt-[20px] sm:mt-[20px]" loading='lazy'/>
  )
}

export default ImageCustom