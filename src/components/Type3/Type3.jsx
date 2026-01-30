import * as React from 'react';
import HalfText from '../HalfText/HalfText';
import Col2Photo from '../Col2Photo/Col2Photo';

const Type3 = ({ type1Data }) => {
  return (
    <section className="text-secondary">
      <div className="hidden md:flex justify-between items-start">
        <div className="w-[50%] self-stretch relative"> {/* pt-[1.875rem] */}
          <p className="max-w-[570px] text-[10px] sm:text-[23px] leading-[13px] sm:leading-[26.45px] font-medium whitespace-pre-line tracking-tight text-justify">{type1Data.title1}</p>

          <img src={type1Data.image1} alt="photo1" className="absolute bottom-0 left-0 w-1/2" loading='lazy'/>
        </div>

        <div className="w-1/2 sm:w-[calc(50%-10px)]">
          <img src={type1Data.image2} alt="photo2" className="w-auto sm:w-full h-[168px] sm:h-auto" loading='lazy'/>
        </div>
      </div>

      <div className="block md:hidden">
        <HalfText 
          title={type1Data.title1}
        />
        <Col2Photo image1={type1Data.image1} image2={type1Data.image2} />
      </div>

      {type1Data.widthTitle2 && (
        <div className={`mt-5 sm:mt-[50px] ${type1Data.widthTitle2} sm:ml-auto text-[10px] sm:text-[23px] leading-[11px] sm:leading-[26.45px] font-medium text-justify`}>
          {type1Data.title2}
        </div>
      )}
    </section>
  );
};

export default Type3;
