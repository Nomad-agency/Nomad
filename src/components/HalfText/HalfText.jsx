/* eslint-disable react/prop-types */
import React from 'react'

const HalfText = ({ title, custom="w-[70%] sm:w-1/2" }) => {
  return (
    <div className={`mt-5 md:mt-12 ${custom} text-[10px] md:text-[23px] leading-[11px] md:leading-[29.9px] font-medium whitespace-pre-line`}>
      {title}
    </div>
  )
}

export default HalfText