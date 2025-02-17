import React from 'react'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import InfoSection from '../../components/InfoSection/InfoSection'
import HalfText from '../../components/HalfText/HalfText'
import Col2Photo from '../../components/Col2Photo/Col2Photo'
import image1 from './assets/image_1.svg'
import image2 from './assets/image_2.svg'
import image3 from './assets/image_3.svg'
import image4 from './assets/image_4.svg'
import image5 from './assets/image_5.svg'
import image6 from './assets/image_6.svg'
import image7 from './assets/image_7.svg'
import image8 from './assets/image_8.svg'
import image9 from './assets/image_9.svg'
import image10 from './assets/image_10.svg'
import image11 from './assets/image_11.svg'
import image12 from './assets/image_12.svg'
import image13 from './assets/image_13.svg'
import image14 from './assets/image_14.svg'
import image15 from './assets/image_15.svg'
import image16 from './assets/image_16.svg'
import image17 from './assets/image_17.svg'
import image18 from './assets/image_18.svg'
import image19 from './assets/image_19.svg'
import image20 from './assets/image_20.svg'
import image21 from './assets/image_21.svg'
import image22 from './assets/image_22.svg'
import image23 from './assets/image_23.svg'
import image24 from './assets/image_24.svg'
import image25 from './assets/image_25.svg'
import image26 from './assets/image_26.svg'
import image27 from './assets/image_27.svg'
import image28 from './assets/image_28.svg'
import image29 from './assets/image_29.svg'
import image30 from './assets/image_30.svg'
import image31 from './assets/image_31.svg'
import image32 from './assets/image_32.svg'
import image33 from './assets/image_33.svg'
import image34 from './assets/image_34.svg'
import image35 from './assets/image_35.svg'
import image36 from './assets/image_36.svg'
import image37 from './assets/image_37.svg'
import image38 from './assets/image_38.svg'
import image39 from './assets/image_39.svg'
import image40 from './assets/image_40.svg'
import image41 from './assets/image_41.svg'
import image42 from './assets/image_42.svg'
import video1 from "./assets/video_1.mp4"
import video2 from "./assets/video_2.mp4"
import video3 from "./assets/video_3.mp4"
import video4 from "./assets/video_4.mp4"
import video5 from "./assets/video_5.mp4"
import video6 from "./assets/video_6.mp4"
import video7 from "./assets/video_7.mp4"
import ImageVideo from '../../components/ImageVideo/ImageVideo'
import ImageCustom from '../../components/ImageCustom/ImageCustom'
import Footer from '../../components/Footer/Footer'
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase'
import { casesData } from '../utils/const'
const Case15Page = () => {
  const caseData = {
    projectTitle: 'Лига Уличного Футбола',
    clientTitle: '«Т-Банк»\n«Лига Ставок»\n«Окко»',
    cards: ['брендинг', 'ux/ui-дизайн', 'events', 'партнерство', 'smm/pr', 'production'],
    description:
      'Т-Лига Уличного Футбола — уникальный спортивный проект, возрождающий культуру уличного футбола. Это пространство объединило профессиональных и медиафутболистов, предложив оригинальные правила и новые форматы турниров.',
    result: [
      {
        title: '9к',
        desc: 'telegram подписчики',
      },
      {
        title: '20к',
        desc: 'посетили площадку',
      },
      {
        title: '25млн',
        desc: 'общий охват проекта',
      },
      {
        title: '275к',
        desc: 'присутствующих на\n прямой трансляции',
      },
      {
        title: '2млн',
        desc: 'охват в сми',
      }
    ]
  };
  return (
    <>
      <main className="container mx-auto">
        <HeaderBlack />

        {/* Section 1 */}
        <InfoSection caseData={caseData} />

        {/* Section 2 video */}
        <video src={video1} autoPlay loop muted playsInline className="mt-12 w-full h-auto"></video>

        {/* Section 3 */}
        <HalfText 
          title={'За 1,5 месяца наша команда разработала платформу бренда для данного продукта: от концепции и презентации для партнеров до наполнения мероприятия, разработки фирменного стиля, сайта и их полной реализации.'}
        />

        {/* Section 4 */}
        <Col2Photo image1={image1} image2={image2} />

        {/* Section 5 video */}
        <video src={video2} autoPlay loop muted playsInline className="mt-12 w-full h-auto"></video>

        {/* Section 5 */}
        <Col2Photo image1={image3} image2={image4} />

        {/* Section 6 */}
        <HalfText 
          title={'Все матчи проходили в течение месяца по выходным, а участие в них приняли 8 команд, состоящих из топовых игроков РПЛ, медиафутболистов и известных личностей (блогеров, актеров, комиков и других).'}
        />

        {/* Section 7 */}
        <Col2Photo image1={image5} image2={image6} />

        {/* Section 8 */}
        <ImageVideo image={image7} video={video3} heightCustom='xl:h-[592px]'/>

        {/* Section 9 */}
        <ImageCustom image={image8} />

        {/* Section 10 */}
        <HalfText 
          title={' Для тех, кто не смог посетить мероприятие, велись трансляции матчей на «Окко» и YouTube, что позволило еще большему числу зрителей стать частью этого события.'}
        />

        {/* Section 11 */}
        <ImageCustom image={image9} />

        {/* Section 12 */}
        <ImageCustom image={image10} />

        {/* Section 13 */}
        <Col2Photo image1={image11} image2={image12} />

        {/* Section 14 */}
        <ImageCustom image={image13} />

        {/* Section 15 video */}
        <video src={video4} autoPlay loop muted playsInline className="mt-12 w-full h-auto"></video>

        {/* Section 16 */}
        <HalfText 
          title={'Среди недели площадку могли посетить все желающие, для которых была подготовлена насыщенная программа от партнеров: функциональные тренировки от амбассадоров «Спортмастера»/Demix, кинопоказы фильмов о спорте от «Окко», автограф-сессии с Федором Смоловым, Артемом Дзюбой, Леонидом Слуцким, Виктором Гусевым и др.'}
        />

        {/* Section 17 */}
        <Col2Photo image1={image14} image2={image15} />

        {/* Section 18 */}
        <Col2Photo image1={image16} image2={image17} />

        {/* Section 19 video */}
        <video src={video5} autoPlay loop muted playsInline className="mt-12 w-full h-auto"></video>

        {/* Section 20 */}
        <Col2Photo image1={image18} image2={image19} />

        {/* Section 21 */}
        <Col2Photo image1={image20} image2={image21} />

        {/* Section 22 */}
        <Col2Photo image1={image22} image2={image23} />

        {/* Section 23 */}
        <ImageCustom image={image24} />

        {/* Section 24 */}
        <Col2Photo image1={image25} image2={image26} />

        {/* Section 25 */}
        <ImageCustom image={image27} />

        {/* Section 26 */}
        <HalfText 
          title={'Каждую неделю также проходили любительские турниры с подарками от Demix. За весь период проекта через любительские турниры прошло около 1000 человек, а победители получили уникальную возможность сыграть совместно с командами Т-Лиги в финале сезона.'}
        />

        {/* Section 27 */}
        <ImageCustom image={image28} />

        {/* Section 29 */}
        <Col2Photo image1={image29} image2={image30} />

        {/* Section 30 */}
        <HalfText 
          title={'Еще одна особенность турнира — драфт, организованный «Т-Банком», который позволил клиентам стать частью звездных команд и побороться за главный приз — 1 000 000. Из 500 заявок команды отобрали по 2 игрока к себе.'}
        />

        {/* Section 31 2 videos*/}
        <div className={`flex justify-between mt-[50px]`}>
          <video
            src={video6}
            autoPlay
            loop
            muted
            playsInline
            className={`h-[262px] xs:h-[303px] sm:h-[490px] md:h-[665px] lg:h-[888px] xl:h-[1046px] w-auto`}
          ></video>
          <video
            src={video7}
            autoPlay
            loop
            muted
            playsInline
            className={`h-[262px] xs:h-[303px] sm:h-[490px] md:h-[665px] lg:h-[888px] xl:h-[1046px] w-auto`}
          ></video>
        </div>

        {/* Section 32 */}
        <Col2Photo image1={image31} image2={image32} />

        {/* Section 33 */}
        <ImageCustom image={image33} />

        {/* Section 34 */}
        <Col2Photo image1={image34} image2={image35} />

        {/* Section 35 */}
        <Col2Photo image1={image36} image2={image37} />

        {/* Section 36 */}
        <Col2Photo image1={image38} image2={image39} />

        {/* Section 37 */}
        <Col2Photo image1={image40} image2={image41} />

        {/* Section 38 */}
        <ImageCustom image={image42} />

        <NextPrevCase dataPrev={casesData[14]} dataNext={casesData[5]} link={"/case1"}/>

        <Footer />
      </main>
    </>
  )
}

export default Case15Page