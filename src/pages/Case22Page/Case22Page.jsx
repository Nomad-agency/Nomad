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
import video1 from './assets/video_1.mp4';
import video2 from './assets/video_2.mp4';
import video3 from './assets/video_3.mp4';
import video4 from './assets/video_4.mp4';
import video5 from './assets/video_5.mp4';
import video6 from './assets/video_6.mp4';
import video7 from './assets/video_7.mp4';
import video8 from './assets/video_8.mp4';
import video9 from './assets/video_9.mp4';
import video10 from './assets/video_10.mp4';
import video11 from './assets/video_11.mp4';
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import VideoParallel from '../../components/VideoParallel/VideoParallel';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
const Case22Page = () => {
  const caseData = {
    projectTitle: 'Медиа бильярд',
    clientTitle: 'BetBoom',
    cards: ['events', 'Digital'],
    description:
      'Перед нами стояла задача создать уникальное шоу на базе бильярда, опираясь на рост популярности игры как модного лайфстайл-развлечения. Формат должен был быть интересен аудитории Twitch и оживить классические, часто скучные трансляции.',
    result: [
      {
        title: '8ч',
        desc: 'Длительность',
      },
      {
        title: '13 700',
        desc: 'аудитория онлайн',
      },
      {
        title: '337к',
        desc: 'уникальных просмотров',
      },
      {
        title: '641к',
        desc: 'Общих просмотров',
      },
      {
        title: '5млн',
        desc: 'общий pr охват',
      },
      {
        title: '1,5млн',
        desc: 'Просмотров в telegram',
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
      <video src={video1} autoPlay loop muted playsInline preload="metadata" className="mt-5 md:mt-[50px] w-full h-auto"></video>

      <div className="mt-5 md:mt-[50px] mb-5 md:mb-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify tracking-[-0.03em]">
          Мы отошли от привычного образа спорт-бара и стандартной Twitch-трансляции. Создали целый сценарий и сняли шоу как фильм — с декорациями, светом, костюмами и продуманным сетапом.
        </p>
      </div>

      <img src={image3} alt="photo1" className="mt-5 md:mt-[3.125rem] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image1} image2={image2} />

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify tracking-[-0.03em]">
          Концепция опиралась на стиль «олдскульного цирка»: театрально, харизматично, с лёгким гротеском. Площадкой стал театральный зал, где бильярдный стол был главным героем спектакля.
        </p>
      </div>

      <video src={video2} autoPlay loop muted playsInline className="mt-5 md:mt-[50px] w-full h-auto"></video>


      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify tracking-[-0.03em]">
          Для трансляции привлекли дружественных стримеров, трансляция велась на Twitch-е Саши Парадеевича. Фокус был не на мастерстве игры, а на развлекательном контенте в кадре.
        </p>
      </div>

      <img src={image4} alt="photo1" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <div className="mt-5 md:mt-[50px] mb-5 md:mb-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify tracking-[-0.03em]">
          Понимая, что классический бильярд может показаться скучным, мы придумали собственные правила и задания. Они делали розыгрыши непредсказуемыми, добавляли юмор и ставили участников в интересные, иногда забавные ситуации.
        </p>
      </div>

      {/* <Col2Photo image1={image5} image2={image6} /> */}

      <video src={video3} autoPlay loop muted playsInline className="mt-5 md:mt-[20px] w-full h-auto"></video>

      <VideoParallel video1={video4} video2={video5} />

      <div className="mt-5 md:mt-[50px] mb-5 md:mb-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify tracking-[-0.03em]">
          Мы превратили бильярд в полноценное шоу с высоким удержанием. Игра на контрастах, ставка на уникальную визуальную эстетику, необычные правила сделали контент увлекательным и заметным в Twitch.
        </p>
      </div>

      <Col2Photo image1={image7} image2={image8} />

      <VideoParallel video1={video6} video2={video7} />

      <VideoParallel video1={video8} video2={video9} />

      <VideoParallel video1={video10} video2={video11} />


      {/* Section 14 */}
      <NextPrevCase dataPrev={casesData[17]} dataNext={casesData[15]} link={"/case16"}/>

      <Footer />
    </main>
  );
};

export default Case22Page;