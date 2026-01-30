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
import image24 from './assets/image_24.png';
import image25 from './assets/image_25.png';
import image26 from './assets/image_26.png';
import image27 from './assets/image_27.png';
import image28 from './assets/image_28.png';
import image29 from './assets/image_29.png';
import image30 from './assets/image_30.png';
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
const Case18Page = () => {
  const caseData = {
    projectTitle: 'NOVA х Lunda Padel',
    clientTitle: '«Самолет Select»',
    cards: ['брендинг', '3d', 'партнерство', 'events'],
    description:
      'В рамках партнёрства Самолет Select и Lunda Padel мы разработали программу по продвижению жилого комплекса NOVA, превратив его в яркий бренд-опыт — от интеграции в пространство клуба до клиентского мероприятия, где гости могли лично познакомиться с Жилым комплексом.',
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
      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          В основе концепции NOVA — идея «тихой роскоши». Архитектура комплекса вдохновлена природой и северными ландшафтами. Мы перенесли эту эстетику в динамичную атмосферу падел-клуба и создали айдентику, где физическая активность сливается с ощущением нахождения на природе.
        </p>
        <img src={image2} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>
      </div>

      {/* Section */}
      <div className="mt-5 md:mt-[50px] mb-5 md:mb-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
        В дизайне мы использовали ключевые мотивы бренда:
        <br />
        — минимализм и чёткую геометрию, и “выход за рамки“ (графический элемент бренда);
        <br />
        — прозрачные формы, напоминающие ледники Норвегии;
        <br />
        — фактуры лавовых полей Исландии.
        </p>
      </div>

      {/* Section 4 */}
      <Col2Photo image1={image3} image2={image4} />

      {/* Section */}
      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          После создания айдентики мы оформили пространство клуба. В интерьере Lunda Padel появился органичный брендинг NOVA, а фотозона-пьедестал стала арт-объектом и центром притяжения на турнирах и мероприятиях.
        </p>
      </div>

      {/* Section */}
      <img src={image5} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      {/* Section 4 */}
      <Col2Photo image1={image6} image2={image7} />

      <Col2Photo image1={image8} image2={image9} />

      <img src={image10} alt="Фото кейса" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image11} image2={image12} />

      <img src={image13} alt="Фото кейса" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/>

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Для запуска партнёрства мы организовали клиентский день, объединив спорт и недвижимость. Гости смогли поучаствовали в тренировках, любительском турнире и узнать о концепции комплекса в тёплой, неформальной атмосфере.
        </p>
      </div>

      <img src={image14} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image15} image2={image16} />

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Проект показал, как бренд может общаться с людьми через партнера и живой опыт: 
          <br />
          — NOVA получила внимание новой аудитории и усилила узнаваемость через лайфстайл-формат.
          <br />
          — Гости открыли для себя бренд через любимый спорт, а кто-то — познакомился с паделом впервые и был благодарен бренду за этот опыт.
        </p>
      </div>

      <img src={image17} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image18} image2={image19} />

      <img src={image20} alt="Фото кейса" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image21} image2={image22} />

      <img src={image23} alt="Фото кейса" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image24} image2={image25} />

      <Col2Photo image1={image26} image2={image27} />

      <img src={image28} alt="Фото кейса" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image29} image2={image30} />


      {/* Section 14 */}
      <NextPrevCase dataPrev={casesData[5]} dataNext={casesData[21]} link={"/case22"}/>

      <Footer />
    </main>
  );
};

export default Case18Page;