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
import video1 from './assets/video_1.mp4';
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import ImageVideo from '../../components/ImageVideo/ImageVideo';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
const Case20Page = () => {
  const caseData = {
    projectTitle: 'гольф-клуб «Пестово»',
    clientTitle: 'УК «Альфа-Капитал»',
    cards: ['Стратегия', 'брендинг', 'партнерство', 'events'],
    description:
      'Гольф — один из самых престижных видов спорта и популярен среди клиентов УК «Альфа-Капитал». В этом сезоне компания установила партнерские отношения с гольф-клубом «Пестово», который является одним из крупнейших в Москве и России.',
    titleAlign: 'items-center', // Выравнивание заголовка
  };
  return (
    <main className="container mx-auto">
      <HeaderBlack />

      {/* Section 1 */}
      <InfoSection caseData={caseData} />

      {/* Section 2 */}
      <ImageVideo image={image1} video={video1} widthImage="w-[42%]" widthVideo="w-[56%]"/>

      {/* Section 3 */}
      <div className="mt-5 md:mt-[50px] mb-5 md:mb-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Компания УК «Альфа-Капитал» создала собственную забрендированную лунку, где члены клуба и их гости могут начинать свою игру и делать фотографии на фоне большого логотипа компании, расположенного на живописных холмах гольф-клуба.
        </p>
      </div>

      <Col2Photo image1={image2} image2={image3} />

      <img src={image4} alt="Фото кейса" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/>

      <div className="mt-5 md:mt-[50px] mb-5 md:mb-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Кроме того, для гостей и членов клуба была открыта лаунж-зона УК «Альфа-Капитал» рядом с клубным домом, а начинающие гольфисты могли пройти обучение в гольф-академии и получить брендированные красные гольф-мячи, выделяющиеся на зеленом газоне.
        </p>
      </div>

      <Col2Photo image1={image5} image2={image6} />

      <div className="mt-5 md:mt-[50px] mb-5 md:mb-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          В честь запуска и анонса партнерства прошло масштабное клиентское мероприятие для клиентов УК «Альфа-Капитал» и членов гольф-клуба. Гости, в том числе и дети, обучались игре в гольф, совершали экскурсии по территории клуба на гольф-карах, знакомились с условиями и привилегиями партнерства, наслаждались семейным отдыхом и вкусной едой.
        </p>
      </div>

      <Col2Photo image1={image7} image2={image8} />

      <Col2Photo image1={image9} image2={image10} />
      
      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Фотозона — украшенный цветами гольф-кар, расположенный на газоне у озера, стала точкой притяжения дня, как и модный лимонадник, полностью собранный из клубники и ставший центральным объектом в зоне фуршета.
        </p>
      </div>

      <img src={image11} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image12} image2={image13} />

      <Col2Photo image1={image14} image2={image15} />

      <Col2Photo image1={image16} image2={image17} />

      <Col2Photo image1={image18} image2={image19} />

      {/* Section 14 */}
      <NextPrevCase dataPrev={casesData[20]} dataNext={casesData[16]} link={"/case17"}/>

      <Footer />
    </main>
  );
};

export default Case20Page;