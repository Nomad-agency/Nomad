import * as React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const ResultProject = ({ data = [] }) => {
  return (
    <div className="mt-[3.125rem]">
      <div className="flex justify-between items-start">
        <span className="text-[0.5rem] md:text-sm font-bold uppercase tracking-tighter">[результаты]</span>

        {
          data.length < 4 ?
          <div className={`${data.length <= 3 ? 'w-[70%] md:w-[48%]' : 'w-auto'} flex items-start md:justify-normal justify-between md:gap-16`}>
            {data.map((item, index) => (
              <div className="flex flex-col gap-2 md:gap-5" key={index}>
                <span className="text-[25px] md:text-[4.0625rem] font-medium leading-[20px] md:leading-[51.5px] whitespace-nowrap">{item.title}</span>
                <span className="text-[10px] md:text-base font-medium whitespace-pre-line">{item.desc}</span>
              </div>
            ))}
          </div>
          :
          <div className='w-[70%] md:w-[90%]'>
            <Swiper
              slidesPerView={window.innerWidth > 576 ? 5 : 3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-2 md:gap-5" >
                    <span className="text-[25px] md:text-[4.0625rem] font-medium leading-[20px] md:leading-[51.5px] whitespace-nowrap">{item.title}</span>
                    <span className="text-[10px] md:text-base font-medium whitespace-normal md:whitespace-pre-line">{item.desc}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        }
      </div>
    </div>
  );
};

export default ResultProject;
