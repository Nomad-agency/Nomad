import React from 'react'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import InfoSection from '../../components/InfoSection/InfoSection'
import LongImgVideo from '../../components/LongImgVideo/LongImgVideo';
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
import video1 from './assets/video_1.mp4';
import HalfText from '../../components/HalfText/HalfText';
import Type1 from '../../components/Type1/Type1';
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
const Case5Page = () => {
  const caseData = {
    projectTitle: 'запуск косметологии',
    clientTitle: 'skin by BODIUM',
    cards: ['events', 'архитектура'],
    description:
      'SKIN by ​BODIUM — салон, в основе которого лежит эстетическая безинъекционная косметология. И пусть сегодня о косметологии говорится много, остаются те, кто испытывает тревогу перед походом к специалисту или вовсе не решается на это. ',
    result: [
      {
        title: '1000',
        desc: 'гостей',
      },
      {
        title: '200',
        desc: 'экспресс-консультаций',
      }
    ],
  };
  const type1Data = {
    title1: 'Pop-up разработал архитектор Руслан Баковкин. Конструкция выполнена в форме банки с кремом — отсылка к безинъекционной косметологии.',
    title2:
      'Внутри размещена инсталляция из капельниц, символизирующая важность кислорода для кожи.',
    image1: image3,
    image2: image4,
    widthTitle2: 'w-[50%]',
  };
  return (
    <>
      <main className="container mx-auto">
        <HeaderBlack />

        {/* Section 1 */}
        <InfoSection caseData={caseData} />

        {/* Section2 */}
        <LongImgVideo image={image1} video={video1}/>

        {/* Section 3 */}
        <HalfText 
          title={'Мы решили познакомить потенциальных клиентов с брендом и продемонстрировать услуги в неформальной обстановке через pop-up пространство. Возможность соприкоснуться с брендом до процедуры помогла клиенту установить эмоциональную связь со SKIN by ​BODIUM.'}
        />

        {/* Section 4 */}
        <img src={image2} alt="image_2" className="mt-5 md:mt-[50px]" loading='lazy'/>

        {/* Section 5 */}
        <div className="mt-5 md:mt-[50px]">
          <Type1 type1Data={type1Data} />
        </div>

        {/* Section 6 */}
        <Col2Photo image1={image5} image2={image6} />

        {/* Section 7 */}
        <img src={image7} alt="image_7" className="mt-5 md:mt-[50px]" loading='lazy'/>

        {/* Section 8 */}
        <HalfText 
          title={'Гости могли получить консультацию, узнать об услугах, проконсультироваться с косметологом, приобрести продукты и мерч.'}
        />

        {/* Section 9 */}
        <img src={image8} alt="image_8" className="mt-5 md:mt-[50px]" loading='lazy'/>

        {/* Section 10 */}
        <Col2Photo image1={image9} image2={image10} />

        {/* Section 11 */}
        <HalfText 
          title={'В честь запуска pop-up устроили вечеринку: гости могли посетить lounge-зону, насладиться dj-сетами, сыграть в пинг-понг и получить призы за выигрыш в игровых автоматах.'}
        />

        {/* Section 12 */}
        <img src={image11} alt="image_11" className="mt-5 md:mt-[50px]" loading='lazy'/>

        {/* Section 13 */}
        <img src={image12} alt="image_12" className="mt-5 md:mt-[50px]" loading='lazy'/>

        {/* Section 14 */}
        <Col2Photo image1={image13} image2={image14} />

        <NextPrevCase dataPrev={casesData[6]} dataNext={casesData[8]} link={"/case11"} check={true}/>

        <Footer />
      </main>
    </>
  )
}

export default Case5Page