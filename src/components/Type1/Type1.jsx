import * as React from 'react';

const Type1 = ({ type1Data }) => {
  return (
    <section className="text-secondary">
      <div className="flex justify-between items-start">
        <div className="w-[50%] self-stretch relative"> {/* pt-[1.875rem] */}
          <p className="text-[10px] sm:text-[1.4375rem] leading-[10px] sm:leading-[26.45px] font-medium whitespace-normal md:whitespace-pre-line tracking-tight">{type1Data.title1}</p>

          <img src={type1Data.image1} alt="photo1" className="absolute bottom-0 left-0 w-[40%] sm:w-auto" loading='lazy'/>
        </div>

        <div className="w-1/2 sm:w-auto">
          <img src={type1Data.image2} alt="photo2" className="w-auto sm:w-full h-[168px] sm:h-auto" loading='lazy'/>
        </div>
      </div>

      {type1Data.widthTitle2 && (
        <div className={`mt-5 sm:mt-[3.125rem] ${type1Data.widthTitle2} sm:ml-auto text-xs sm:text-[1.4375rem] leading-[13px] sm:leading-[26.45px] font-medium`}>
          {type1Data.title2}
        </div>
      )}
    </section>
  );
};

export default Type1;
