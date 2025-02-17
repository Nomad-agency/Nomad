import React from 'react'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import InfoSection from '../../components/InfoSection/InfoSection'
import image1 from './assets/image_1.svg';
import image2 from './assets/image_2.svg';
import image3 from './assets/image_3.svg';
import image4 from './assets/image_4.svg';
import image5 from './assets/image_5.svg';
import video1 from "./assets/video_1.mp4"
import video2 from "./assets/video_2.mp4"
import video3 from "./assets/video_3.mp4"
import video4 from "./assets/video_4.mp4"
import ImageCustom from '../../components/ImageCustom/ImageCustom';
import Type2 from '../../components/Type2/Type2';
import HalfText from '../../components/HalfText/HalfText';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
import Type3 from '../../components/Type3/Type3';
const Case11Page = () => {
  const caseData = {
    projectTitle: '«Исполнение мечты»',
    clientTitle: 'УК «Альфа-Капитал»',
    cards: ['Digital', 'ux/ui-дизайн'],
    description:
      'В 2023 году перед УК «Альфа-Капитал» стояла задача презентовать digital-маскота бренда в рамках масштабной PR-кампании. Так появился социальный новогодний проект, в котором маскот Гаврюша помогал исполнять мечты.',
    result: [
      {
        title: '4300',
        desc: 'Заявок',
      },
      {
        title: '7 000 000',
        desc: 'Охваты в интернете',
      }
    ],
    nowrap: true
  };
  const type1Data = {
    title1: 'Мы пригласили всех жителей России, независимо от их взаимодействия с УК «Альфа-Капитал», \n присоединиться к проекту и написать письма со своими желаниями. Для этого был создан специальный веб-\nсайт, который не только собирал трогательные истории участников, но и генерировал лиды для клиента.',
    title2:
      'В итоге были выбраны 5 участников, чьи мечты УК «Альфа-Капитал» исполнила в 2024 году: полет с парашютом, встреча с любимым певцом, управление реальным самолетом, беговой кемп в горах и другие.',
    image1: image1,
    image2: image2,
    widthTitle2: 'w-[75%] md:w-[50%]',
  };
  const type2Data = {
    title1:
      'Те, чьи мечты не вошли в пятерку, но были такими же яркими, мы транслировали на фасаде здания «Красный Октябрь». Участники могли увидеть свои мечты во время новогодних каникул и сфотографироваться на их фоне.',
    title2: '',
    image1: image4,
    image2: image5,
  };
  return (
    <>
      <main className="container mx-auto">
        <HeaderBlack />

        {/* Section 1 */}
        <InfoSection caseData={caseData} />

        {/* Section 2 video*/}
        <video src={video1} autoPlay loop muted playsInline className="mt-12 w-full h-auto"></video>

        {/* Section 3 */}
        <div className="mt-5 md:mt-[50px]">
          <Type3 type1Data={type1Data} />
        </div>

        {/* Section 4 */}
        <ImageCustom image={image3} />

        {/* Section 5 */}
        <div className="mt-5 md:mt-[3.125rem]">
          <Type2 type2Data={type2Data} />
        </div>

        {/* Section 6 */}
        <video src={video2} autoPlay loop muted playsInline className="mt-5 md:mt-12 w-full h-auto"></video>

        {/* Section 7 */}
        <HalfText 
          title={'Для дополнительного продвижения проекта были созданы CGI-ролики для посева в Telegram-каналах, закуплена интеграция в популярные шоу в YouTube.'}
        />

        <div className="flex justify-between mt-5 md:mt-[50px]">
          <video
            src={video3}
            autoPlay
            loop
            muted
            playsInline
            className="h-[118px] xs:h-[133px] sm:h-[218px] md:h-[295px] lg:h-[390px] xl:h-[460px] w-auto"
          ></video>

          <video
            src={video4}
            autoPlay
            loop
            muted
            playsInline
            className="h-[118px] xs:h-[133px] sm:h-[218px] md:h-[295px] lg:h-[390px] xl:h-[460px] w-auto"
          ></video>
        </div>

        <NextPrevCase dataPrev={casesData[7]} dataNext={casesData[9]} link={"/case13"} check={true}/>

        <Footer />
      </main>
    </>
  )
}

export default Case11Page