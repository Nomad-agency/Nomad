import React from 'react';
import Col2Photo from '../Col2Photo/Col2Photo';
import HalfText from '../HalfText/HalfText';

const Type2 = ({ type2Data }) => {
  return (
    <section className="text-secondary">
      <div className="hidden md:flex justify-between items-start">
        <div>
          <img src={type2Data.image1} alt="photo2" className="w-full h-auto" loading='lazy'/>
        </div>
        <div className={`${type2Data.customWidth ? type2Data.customWidth : 'w-1/2'} self-stretch relative`}>
          <p className="text-[1.4375rem] leading-[26.45px] font-medium">{type2Data.title1}</p>

          <img src={type2Data.image2} alt="photo1" className="absolute bottom-0 right-0" loading='lazy'/>
        </div>
      </div>

      <div className="block md:hidden">
        <HalfText 
          title={type2Data.title1}
        />
        <Col2Photo image1={type2Data.image1} image2={type2Data.image2} />
      </div>

      {type2Data.title2 && (
        <div className="mt-[3.152rem] w-[47%] mr-auto text-[1.4375rem] leading-[26.45px] font-medium">
          {type2Data.title2}
        </div>
      )}
    </section>
  );
};

export default Type2;
