import Col2Photo from "../../components/Col2Photo/Col2Photo";
import HalfText from "../../components/HalfText/HalfText";
import HeaderBlack from "../../components/HeaderBlack/HeaderBlack"
import ImageVideo from "../../components/ImageVideo/ImageVideo";
import InfoSection from "../../components/InfoSection/InfoSection"
import Type2 from "../../components/Type2/Type2";
import VideoParallel from "../../components/VideoParallel/VideoParallel";
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
import image11 from './assets/image_11.svg';
import image12 from './assets/image_12.svg';
import image13 from './assets/image_13.svg';
import image14 from './assets/image_14.svg';
import image15 from './assets/image_15.svg';
import image16 from './assets/image_16.svg';
import image17 from './assets/image_17.svg';
import image18 from './assets/image_18.svg';
import image19 from './assets/image_19.svg';
import image20 from './assets/image_20.svg';
import image21 from './assets/image_21.svg';
import video1 from './assets/video_1.mp4';
import video2 from './assets/video_2.mp4';
import video3 from './assets/video_3.mp4';
import video4 from './assets/video_4.mp4';
import video5 from './assets/video_5.mp4';
import Footer from "../../components/Footer/Footer";
import NextPrevCase from "../../components/NextPrevCase/NextPrevCase";
import { casesData } from "../utils/const";
const Case4Page = () => {
  const caseData = {
    projectTitle: 'SBER BAZAR',
    clientTitle: '«СБЕР»',
    cards: ['events', 'брендинг', 'smm/pr'],
    description:
      '«Сбер» обратился к нам с запросом: провести особенное событие для застройщиков, которое приведет к высокой лидогенерации.',
    result: [
      {
        title: '2000',
        desc: 'гостей',
      },
      {
        title: '90',
        desc: 'конвертаций в сделку',
      },
      {
        title: '115',
        desc: 'принятых заявок',
      }
    ],
  };
  const type2Data = {
    title1:
      'Все участники активностей зарабатывали «жилищный рубль» (игровая валюта), который потом можно было обменять на мерч от застройщиков.',
    title2: '',
    image1: image7,
    image2: image8,
  };
  return (
    <>
      <main className="container mx-auto">
        <HeaderBlack />

        {/* Section 1 */}
        <InfoSection caseData={caseData} />

        <video src={video5} autoPlay loop muted playsInline className="mt-12 w-full h-auto"></video>

        {/* Section 2 */}
        <HalfText 
          title={'Мы решили отказаться от привычных официальных застроек в экспоцентре и представить новый способ знакомства с брендами — интересный и стильный маркет, который понятен и привычен ЦА, поэтому была разработана концепция «Жилищный БАЗАР». '}
        />

        {/* Section 3 */}
        <ImageVideo image={image1} video={video1} />

        {/* Section 4 */}
        <ImageVideo image={image2} video={video2} reverse={true} />

        {/* Section 5 */}
        <HalfText 
          title={'Выбрали самую проходимую и популярную площадку в городе и организовали в ней корнеры застройщиков. Для привлечения лидов интегрировали игровые механики и притягательные lounge-зоны, в которых хочется остаться подольше.'}
        />

        {/* Section 6 */}
        <VideoParallel video1={video3} video2={video4}/>

        {/* Section 7 */}
        <Col2Photo image1={image3} image2={image4} />

        {/* Section 8 */}
        <Col2Photo image1={image5} image2={image6} />

        {/* Section 9 */}
        <div className="mt-5 md:mt-[3.125rem]">
          <Type2 type2Data={type2Data} />
        </div>

        {/* Section 10 */}
        <Col2Photo image1={image9} image2={image10} />

        {/* Section 11 */}
        <HalfText 
          title={'На территории маркета мы также разместили лектории с полезным контентом, фудкорт и маркет товаров для дома, а на центральной сцене SBER BAZAR гостей развлекали лучшие диджеи города.'}
        />

        {/* Section 12 */}
        <img src={image11} alt="" className="mt-5 md:mt-[50px]"/>

        {/* Section 13 */}
        <Col2Photo image1={image12} image2={image13} />

        {/* Section 14 */}
        <img src={image14} alt="" className="mt-5 md:mt-[50px]"/>

        {/* Section 15 */}
        <Col2Photo image1={image15} image2={image16} />

        {/* Section 16 */}
        <Col2Photo image1={image17} image2={image18} />

        {/* Section 17 */}
        <img src={image19} alt="" className="mt-5 md:mt-[50px]"/>

        {/* Section 18 */}
        <Col2Photo image1={image20} image2={image21} />

        <NextPrevCase dataPrev={casesData[12]} dataNext={casesData[14]} link={"/case12"}/>

        <Footer />
      </main>
    </>
  )
}

export default Case4Page