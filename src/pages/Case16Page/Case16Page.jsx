import * as React from 'react';
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack';
import InfoSection from '../../components/InfoSection/InfoSection';
import image1 from './assets/image_1.png';
import image2 from './assets/image_2.png';
import image3 from './assets/image_3.png';
import image4 from './assets/image_4.png';
import image5 from './assets/image_5.png';
import image6 from './assets/image_6.png';
import image7 from './assets/image_7.png';
import image8 from './assets/image_8.png';
import video1 from './assets/video_1_cr.mp4';
import video2 from './assets/video_2_cr.mp4';
import video3 from './assets/video_3_cr.mp4';
import video4 from './assets/video_4_cr.mp4';
import video5 from './assets/video_5_cr.mp4';
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
import Type3 from '../../components/Type3/Type3';
const Case16Page = () => {
  const caseData = {
    projectTitle: 'Branding',
    clientTitle: '«ХВОЯ. ЛЕСНОЕ БИСТРО»',
    cards: ['брендинг'],
    description:
      'Проект «Хвоя» — это бистро при природном отеле, которое предлагает гостям уникальный опыт: сочетание современной концепции в сердце соснового леса и доступной итальянской гастрономии в формате бистро.',
    titleWidth: 'w-[54%]', // Кастомная ширина для этого кейса
    titleAlign: 'items-center', // Выравнивание заголовка
  };
  const type1Data = {
    title1:
      'Задачей было создать визуальную систему, которая передаёт атмосферу места — современного бистро, расположенного среди леса. Мы разработали фирменный стиль и собрали все решения в брендбук.',
    title2:
      'Логотип выполнен в технике леттеринга, сочетая рукотворную графику с брусковыми формами. Неровные линии и уютный характер создают образ лесной таблички, передавая экологичность, гастрономические ассоциации и теплую атмосферу места.',
    image1: image2,
    image2: image3,
    widthTitle2: 'w-[70%] md:w-[calc(50%-10px)]',
  };
  return (
    <main className="container mx-auto">
      <HeaderBlack />

      {/* Section 1 */}
      <InfoSection caseData={caseData} />

      {/* Section 2 */}
      <img src={image1} alt="photo1" className="mt-5 md:mt-[3.125rem] w-full h-auto" loading='lazy'/>

      {/* Section 3 */}
      <div className="mt-5 md:mt-[20px]">
        <Type3 type1Data={type1Data} />
      </div>

      {/* Section 5 */}
      <video src={video1} autoPlay loop muted playsInline className="mt-5 md:mt-[50px] w-full h-auto"></video>

      {/* Section 6 */}
      <video src={video2} autoPlay loop muted playsInline className="mt-5 md:mt-[20px] w-full h-auto"></video>

      {/* Section 7 - Палитра цветов */}
      <div className="mt-5 md:mt-[30px]">
        <p className="w-auto sm:w-[calc(50%-10px)] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Фирменная палитра это продолжение диалога между лесной эстетикой и гастрономической темой. Каждый оттенок выбран осознанно и имеет свою историю. Палитра сочетает насыщенность леса и тёплые бистро-акценты. Тёмные оттенки делают светлые ещё уютнее. Нет кислотных цветов — только «съедобные» тона.
        </p>
        <img src={image4} alt="Палитра цветов" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>
      </div>

      {/* Section 8 */}
      <img src={image5} alt="photo11" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/>

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Визуальный язык бренда построен на технике ручной печати — каждый элемент будто оттиснут на бумаге вручную, сохраняя живую фактуру и органичную несовершенность линий. Такой подход создаёт ощущение подлинности и связи с природными ритмами, отражая философию заведения.
        </p>
      </div>

      {/* Section 9 */}
      <video src={video3} autoPlay loop muted playsInline className="mt-5 md:mt-[20px] w-full h-auto"></video>

      {/* Section 10 */}
      <img src={image6} alt="photo14" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/>

      {/* Section 11 */}
      <video src={video4} autoPlay loop muted playsInline className="mt-5 md:mt-[20px] w-full h-auto"></video>

      <div className="mt-5 md:mt-[20px] mb-5 md:mb-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Форма сотрудников становится продолжением всей визуальной концепции фирменного стиля, вмещая в себе харизматичные вординги и ключевые визуальные приемы бренда.
        </p>
      </div>

      {/* Section 12 */}
      <Col2Photo image1={image7} image2={image8} />

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Финальным этапом стало создание визуального руководства, в котором все элементы стиля были систематизированы и объединены в единую структуру. Мы задали логику и правила их использования, чтобы обеспечить целостность и последовательность визуальной коммуникации бренда.
        </p>
      </div>

      {/* Section 13 */}
      <video src={video5} autoPlay loop muted playsInline className="mt-5 md:mt-[50px] w-full h-auto"></video>

      {/* Section 14 */}
      <NextPrevCase dataPrev={casesData[21]} dataNext={casesData[18]} link={"/case19"}/>

      <Footer />
    </main>
  );
};

export default Case16Page;


