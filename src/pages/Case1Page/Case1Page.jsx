import * as React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import video from './assets/video_1.mp4';
import video2 from './assets/video_2.mp4';
import Type1 from '../../components/Type1/Type1';
import image1 from './assets/image_1.svg';
import image2 from './assets/image_2.svg';
import image3 from './assets/image_3.svg';
import image4 from './assets/image_4.svg';
import image5 from './assets/image_5.svg';
import image6 from './assets/image_6.svg';
import image7 from './assets/image_7.svg';
import image8 from './assets/image_8.svg';
import image9 from './assets/image_9.svg';
import image10 from './assets/image_10.svg';
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import TargetGrid from './components/TargetGrid/TargetGrid';
import Footer from '../../components/Footer/Footer';
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';

import { casesData } from "../utils/const";
const Case1Page = () => {
  const caseData = {
    projectTitle: 'Маскот Гаврюша',
    clientTitle: 'УК«Альфа-капитал»',
    cards: ['3d', 'стратегия', 'digital'],
    description:
      'В инвестиционной сфере широко используют понятие «бычий тренд», поэтому УК «Альфа-Капитал» взяла под опеку огненно-рыжего бычка по имени Гаврюша из Московского зоопарка, сделав его маскотом бренда.\n\n Затем бренд решил создать 3D-маскота Гаврюшу для коммуникации в цифровой среде.',
  };
  const type1Data = {
    title1: 'Прототипом цифрового маскота стал тот самый реальный бык прямиком из Московского \n зоопарка — Гаврюша.',
    title2:
      'Для начала мы создали 2D-изображение маскота для определения его телосложения, поз, одежды и эмоций. Это помогло нам лучше понять, как будет выглядеть Гаврюша онлайн и какие детали необходимо учесть при его 3D-моделировании.',
    image1: image1,
    image2: image2,
    widthTitle2: 'w-[80%] sm:w-[47%]',
  };
  return (
    <main className="container mx-auto">
      <HeaderBlack />

      {/* Section 1 */}
      <InfoSection caseData={caseData} />

      {/* Section 2 video */}
      <video src={video} autoPlay loop muted playsInline className="mt-12 w-full h-auto"></video>

      {/* Section 3 */}
      <div className="mt-5 md:mt-[50px]">
        <Type1 type1Data={type1Data} />
      </div>

      {/* Section 4 */}
      <img src={image3} alt="photo3" className="mt-5 sm:mt-[3.125rem] w-full h-auto" />

      {/* Section 5 */}
      <Col2Photo image1={image4} image2={image5} />

      {/* Section 6 */}
      <img src={image6} alt="photo6" className="mt-5 md:mt-[50px] w-full h-auto" />

      {/* Section 7 */}
      <Col2Photo image1={image7} image2={image8} />
      {/* Section 8 */}
      <img src={image9} alt="photo9" className="mt-5 md:mt-[50px] w-full h-auto" />

      {/* Section 9 video*/}
      <video src={video2} autoPlay loop muted playsInline className="mt-5 md:mt-[50px] w-full h-auto"></video>

      <div className="text-[17px] sm:text-[3.125rem] font-normal text-justify tracking-tighter leading-[18px] sm:leading-[52px] mt-5 sm:mt-28">
        Главная цель создания маскота — продвижение бренда. Поэтому мы разработали коммуникационную стратегию для внедрения
        цифрового маскота и изменения восприятия компании, сделав ее более доступной и понятной широкой аудитории.
      </div>

      {/* Section 11 */}
      <TargetGrid />

      {/* Section 12 */}
      <img src={image10} alt="photo9" className="mt-5 md:mt-20 w-full h-auto" />

      <NextPrevCase dataPrev={casesData[0]} dataNext={casesData[3]} link={"/case10"}/>

      <Footer />
    </main>
  );
};

export default Case1Page;
