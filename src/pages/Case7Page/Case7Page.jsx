import React from 'react'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import InfoSection from '../../components/InfoSection/InfoSection'
import image1 from "./assets/image_1.png"
import image6 from "./assets/image_6.png"
import image7 from "./assets/image_7.png"
import image8 from "./assets/image_8.png"
import image9 from "./assets/image_9.png"
import image10 from "./assets/image_10.png"
import image11 from "./assets/image_11.png"
import image12 from "./assets/image_12.png"
import image13 from "./assets/image_13.png"
import image14 from "./assets/image_14.png"
import video1 from "./assets/video_1.mp4"
import video2 from "./assets/video_2.mp4"
import video3 from "./assets/video_3.mp4"
import video4 from "./assets/video_4.mp4"
import Type1 from '../../components/Type1/Type1'
import Col2Photo from '../../components/Col2Photo/Col2Photo'
import HalfText from '../../components/HalfText/HalfText'
import Footer from '../../components/Footer/Footer'
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase'
import { casesData } from '../utils/const'
import ImageCustom from '../../components/ImageCustom/ImageCustom';

const Case7Page = () => {
  const caseData = {
    projectTitle: 'Pop-up «Самолет»',
    clientTitle: 'ГК «Самолет»',
    cards: ['events', 'архитектура'],
    description:
      'Перед нами стояли следующие задачи: подчеркнуть преимущества бренда, представить продукты экосистемы, повысить узнаваемость и привлечь новую аудиторию.',
    result: [
      {
        title: '5000',
        desc: 'гостей',
      },
      {
        title: '3790',
        desc: 'Проходимоть pop-up',
      }
    ],
  };
  const type1Data = {
      title1: 'Мы разработали pop-up пространство «Самолет», где гости могли познакомиться с ключевыми направлениями компании, включая 10D, HR и Cтрана/Девелоперы.',
      title2:
        'Наша команда полностью разработала архитектуру и дизайн pop-up зоны, которая стала эффективным инструментом лидогенерации и нетворкинга для гостей выставки.',
      image1: image6,
      image2: image7,
      widthTitle2: 'w-[75%] md:w-[49%]',
  };
  return (
    <>
      <main className="container mx-auto">
        <HeaderBlack />

        {/* Section 1 */}
        <InfoSection caseData={caseData} />

        <div className="mt-5 md:mt-[50px] mb-[-10px] md:mb-[-30px] text-[0.5rem] md:text-sm font-bold uppercase tracking-tighter whitespace-nowrap">[Renders]</div>

        {/* Section 2 */}
        <ImageCustom image={image1} />

        {/* Section 3 */}
        <div className={`flex justify-between mt-5 md:mt-[50px]`}>
          <video
            src={video1}
            autoPlay
            loop
            muted
            playsInline
            className={`h-[85px] xs:h-[95px] sm:h-[155px] md:h-[210px] lg:h-[280px] xl:h-[330px] w-auto`}
          ></video>
          <video
            src={video2}
            autoPlay
            loop
            muted
            playsInline
            className={`h-[85px] xs:h-[95px] sm:h-[155px] md:h-[210px] lg:h-[280px] xl:h-[330px] w-auto`}
          ></video>
        </div>

        <div className={`flex justify-between mt-5 md:mt-[50px]`}>
          <video
            src={video3}
            autoPlay
            loop
            muted
            playsInline
            className={`h-[85px] xs:h-[95px] sm:h-[155px] md:h-[210px] lg:h-[280px] xl:h-[330px] w-auto`}
          ></video>
          <video
            src={video4}
            autoPlay
            loop
            muted
            playsInline
            className={`h-[85px] xs:h-[95px] sm:h-[155px] md:h-[210px] lg:h-[280px] xl:h-[330px] w-auto`}
          ></video>
        </div>

        {/* Section 4 */}
        <div className="mt-5 md:mt-[50px]">
          <Type1 type1Data={type1Data} />
        </div>

        {/* Section 5 */}
        <Col2Photo image1={image8} image2={image9} />

        {/* Section 6 */}
        <HalfText 
          title={'Центральной частью пространства и главным eye-catcher\'ом стала инсталляция с «залипательным» контентом. Мы полностью разработали ее архитектуру и наполнение.'}
        />

        <div className="mt-5 md:mt-[50px] mb-[-10px] md:mb-[-30px] text-[0.5rem] md:text-sm font-bold uppercase tracking-tighter whitespace-nowrap text-right">[REAL photos]</div>

        {/* Section 7 */}
        <ImageCustom image={image10} />

        {/* Section 8 */}
        <HalfText 
          title={'Для вовлечения гостей мы добавили интерактивную карту присутствия компании. Гости отмечали города, где уже побывали или мечтают оказаться, и оставляли пожелания с помощью стикеров. Этот формат усилил эмоциональную связь с брендом.'}
        />

        {/* Section 9 */}
        <Col2Photo image1={image11} image2={image12} />

        {/* Section 10 */}
        <Col2Photo image1={image13} image2={image14} />

        <NextPrevCase dataPrev={casesData[4]} dataNext={casesData[6]} link={"/case2"}/>

        <Footer />
      </main>
    </>
  )
}

export default Case7Page