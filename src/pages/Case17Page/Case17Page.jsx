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
import image9 from './assets/image_9.png';
import image10 from './assets/image_10.png';
import image11 from './assets/image_11.png';
import image12 from './assets/image_12.png';
import image13 from './assets/image_13.png';
import image14 from './assets/image_14.png';
import image15 from './assets/image_15.png';
import image16 from './assets/image_16.png';
import image17 from './assets/image_17.png';
import image18 from './assets/image_18.png';
import image19 from './assets/image_19.png';
import image20 from './assets/image_20.png';
import image21 from './assets/image_21.png';
import image22 from './assets/image_22.png';
import image23 from './assets/image_23.png';
import video1 from './assets/video_1.mp4';
import video2 from './assets/video_2.mp4';
import video3 from './assets/video_3.mp4';
import video4 from './assets/video_4.mp4';
import video5 from './assets/video_5.mp4';
import video6 from './assets/video_6.mp4';
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
const Case17Page = () => {
  const caseData = {
    projectTitle: 'Фирменный стиль',
    clientTitle: '«Тим Фест»',
    cards: ['брендинг', 'партнерство', 'стратегия', 'позиционирование'],
    description:
      'Команда «ТИМ Фест» обратилась к нам с амбициозной задачей — создать с нуля формат и визуальную систему для нового фестиваля о спорте, здоровье и инновациях.',
    result: [
      {
        title: '2млн',
        desc: 'охват без продвижения',
      },
      {
        title: '5000',
        desc: 'посетителей',
      },
      {
        title: '100',
        desc: 'патнеров за 1 год',
      }
    ],
    titleAlign: 'items-center', // Выравнивание заголовка
  };
  return (
    <main className="container mx-auto">
      <HeaderBlack />

      {/* Section 1 */}
      <InfoSection caseData={caseData} />

      {/* Section 2 */}
      <img src={image1} alt="photo1" className="mt-5 md:mt-[3.125rem] w-full h-auto" loading='lazy'/>

      {/* Section 3 */}
      <div className="mt-5 md:mt-[50px] mb-5 md:mb-[50px]">
        <p className="w-auto md:w-[50%] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Нам предстояло не просто разработать айдентику, а стать стратегическим партнёром проекта: сформировать концепцию, коммерческое предложение для партнёров и визуальный язык, способный объединить комьюнити и привлечь аудиторию.
        </p>
        {/* <img src={image2} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/> */}
      </div>

      {/* Section 4 */}
      <Col2Photo image1={image3} image2={image4} />

      {/* Section 5 */}
      <video src={video2} autoPlay loop muted playsInline className="mt-5 md:mt-[20px] w-full h-auto"></video>

      {/* Section */}
      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Мы взяли на себя полный цикл работ:
          <br />
          — разработку концепции и формата фестиваля;
          <br />
          — создание бренд-платформы и айдентики;
          <br />
          — подготовку презентации для партнёров;
          <br />
          — дизайн всех онлайн- и офлайн-носителей.
        </p>
        {/* <img src={image5} alt="photo11" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/> */}
        <img src={image6} alt="photo11" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>
      </div>

      {/* Section 6 */}
      <video src={video6} autoPlay loop muted playsInline className="mt-5 md:mt-[20px] w-full h-auto"></video>

      {/* Section */}
      <div className="mt-5 md:mt-[40px]">
        <p className="w-auto sm:w-[50%] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          «ТИМ Фест» был задуман как трехдневное событие для тех, кто видит в спорте стиль жизни, а в здоровье&nbsp;- главный тренд. Наша задача — передать эту энергию в визуальной форме.
        </p>
        {/* <img src={image7} alt="Фото кейса" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/> */}
      </div>

      {/* Section 4 */}
      {/* <Col2Photo image1={image8} image2={image9} /> */}

      {/* Section */}
      <img src={image10} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      {/* Section 9 */}
      {/* <video src={video1} autoPlay loop muted playsInline className="mt-5 md:mt-[20px] w-full h-auto"></video> */}

      {/* Section 8 */}
      <div className="mt-5 md:mt-[50px] mb-5 md:mb-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Эта идея легла в основу целостной визуальной системы, где волны стали главным графическим элементом, отражающим энергию, которая объединяет людей.
        </p>
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Концепция масштабировалась от оформления площадки и мерча до анимированного контента для соцсетей.
        </p>
      </div>

      {/* Section */}
      {/* <img src={image11} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/> */}

      {/* Section 4 */}
      <Col2Photo image1={image12} image2={image13} />

      {/* Section 4 */}
      <Col2Photo image1={image14} image2={image15} />

      {/* Section */}
      <div className="mt-5 md:mt-[50px] mb-5 md:mb-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Для привлечения партнёров мы подготовили презентацию с проработанной концепцией, айдентикой, зонированием площадки, активностями и возможностями для брендов.
        </p>
      </div>

      {/* Section */}
      {/* <img src={image16} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/> */}

      {/* Section 4 */}
      <Col2Photo image1={image17} image2={image18} />

      {/* Section */}
      <video src={video3} autoPlay loop muted playsInline className="mt-5 md:mt-[20px] w-full h-auto"></video>

      {/* Section 4 */}
      <Col2Photo image1={image19} image2={image20} />
      
      {/* Section */}
      <video src={video4} autoPlay loop muted playsInline className="mt-5 md:mt-[20px] w-full h-auto"></video>

      {/* Section */}
      <div className="mt-5 md:mt-[20px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          В результате проект прошёл путь от идеи до полноценного бренда с чёткой стратегией, визуальной идентичностью и коммерческим потенциалом.
        </p>
      </div>

      {/* Section */}
      <img src={image21} alt="Фото кейса" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/>

      {/* Section */}
      <img src={image22} alt="Фото кейса" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/>

      {/* Section */}
      <img src={image23} alt="Фото кейса" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/>

      {/* Section */}
      {/* <video src={video5} autoPlay loop muted playsInline className="mt-5 md:mt-[20px] w-full h-auto"></video> */}

      {/* Section 14 */}
      <NextPrevCase dataPrev={casesData[19]} dataNext={casesData[3]} link={"/case10"}/>

      <Footer />
    </main>
  );
};

export default Case17Page;