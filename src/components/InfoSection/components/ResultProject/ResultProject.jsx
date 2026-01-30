import * as React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
const ResultProject = ({ data = [] }) => {
  return (
    <div className="mt-10 md:mt-[3.125rem]">
      <div className="flex justify-between items-start">
        <span className="text-[0.5rem] md:text-sm font-bold uppercase tracking-tighter">[результаты]</span>

        {
          data.length < 4 ?
          <div className={`${data.length <= 3 ? 'w-[74%] md:w-[48%]' : 'w-auto'} flex items-start md:justify-normal md:gap-16 gap-7`}>
            {data.map((item, index) => (
              <div className="flex flex-col gap-2 md:gap-5" key={index}>
                <span className="text-[25px] md:text-[65px] font-medium leading-[20px] md:leading-[51.5px] whitespace-nowrap">{item.title}</span>
                <span className="text-[10px] md:text-[16px] font-medium whitespace-pre-line tracking-[-0.04em]">{item.desc}</span>
              </div>
            ))}
          </div>
          :
          <div className='w-[70%] md:w-[85%]'>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                576: {
                  slidesPerView: 5,
                  spaceBetween: 21, // Уменьшено на 30% для ПК (было 30)
                },
              }}
              loop={true} //important for autoplay
              speed={2000} //important for autoplay
              autoplay={{ //important for autoplay
                // enabled: true,
                delay: 0,
                disableOnInteraction: false
              }}
              modules={[Autoplay]} //important for autoplay
              className="mySwiper"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <div className="flex flex-col gap-2 md:gap-5" >
                      <span className="text-[25px] md:text-[65px] font-medium leading-[20px] md:leading-[51.5px] whitespace-nowrap">{item.title}</span>
                      <span className="text-[10px] md:text-[16px] font-medium whitespace-normal md:whitespace-pre-line tracking-[-0.04em]">{item.desc}</span>
                    </div>
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
