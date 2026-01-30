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
import Type3 from '../../components/Type3/Type3';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
const Case21Page = () => {
  const caseData = {
    projectTitle: 'Разработка мерча',
    clientTitle: 'Lunda Padel',
    cards: ['Мерч'],
    description:
      'Задача: Создать линейку мерча, разделенную на две стратегические категории: функциональную униформу для персонала и коммерческую коллекцию для продажи клиентам. Одежда должна была стать частью формирующейся культуры падела, отражая современный и узнаваемый стиль бренда.',
    titleAlign: 'items-center', // Выравнивание заголовка
  };
  const type1Data = {
    title1:
      'Концепция: «Padel starts here»\n\nПадел — это зарождающееся комьюнити и стиль жизни, а не просто спорт. Мы сознательно отошли от классических теннисных кодов и эстетики «тихой роскоши», чтобы создать свежий, актуальный язык.',
    title2:
      'Наша цель — разработать мерч, в котором «свои» узнают общие ценности, а новички захотят стать частью мира Lunda Padel.',
    image1: image3,
    image2: image4,
    widthTitle2: 'w-[70%] md:w-[calc(50%-10px)]',
  };
  return (
    <main className="container mx-auto">
      <HeaderBlack />

      {/* Section 1 */}
      <InfoSection caseData={caseData} />

      {/* Section 2 */}
      <Col2Photo image1={image1} image2={image2} widthImage1="w-[42%]" widthImage2="w-[56%]"/>

      <div className="mt-5 md:mt-[20px] mb-5 md:mb-[50px]">
        <Type3 type1Data={type1Data} />
      </div>

      <Col2Photo image1={image5} image2={image6} widthImage1="w-[49%]" widthImage2="w-[49%]"/>

      <img src={image7} alt="Фото кейса" className="mt-5 md:mt-[20px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image8} image2={image9} widthImage1="w-[49%]" widthImage2="w-[49%]"/>

      <Col2Photo image1={image10} image2={image11} widthImage1="w-[49%]" widthImage2="w-[49%]"/>

      <div className="mt-5 md:mt-[50px] mb-5 md:mb-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Решение: База, которую хочется носить
        </p>
        <p className="w-auto sm:w-[calc(50%-10px)] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Мы создали коллекцию, основанную на принципах актуального гардероба:
        </p>
        <ul className="w-auto sm:w-[calc(50%-10px)] ml-auto list-disc list-outside text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] pl-4 md:pl-6 space-y-1 md:space-y-2">
          <li>Функциональность: Удобные модели для everyday wear и занятий спортом.</li>
          <li>Современный крой: Свободные лекала, соответствующие последним трендам.</li>
          <li>Узнаваемый дизайн: Минималистичные принты и цепляющий копирайт, отражающий дух комьюнити.</li>
          <li>Яркие акценты: Детали, подчеркивающие динамику и энергию бренда.</li>
        </ul>
      </div>

      <Col2Photo image1={image12} image2={image13} widthImage1="w-[49%]" widthImage2="w-[49%]"/>

      <Col2Photo image1={image14} image2={image15} widthImage1="w-[49%]" widthImage2="w-[49%]"/>

      <Col2Photo image1={image16} image2={image17} widthImage1="w-[49%]" widthImage2="w-[49%]"/>

      <Col2Photo image1={image18} image2={image19} widthImage1="w-[49%]" widthImage2="w-[49%]"/>

      <div className="mt-5 md:mt-[50px] mb-5 md:mb-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] mb-[30px] text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line">
          Мы взяли на себя все этапы — от творческой идеи до готового продукта:
        </p>
        <ol className="w-auto sm:w-[calc(50%-10px)] list-decimal list-outside text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] pl-4 md:pl-6 space-y-1 md:space-y-2">
          <li>Разработка дизайна: Полное проектирование внешнего вида всех изделий.</li>
          <li>Конструирование: Разработка лекал для обеспечения идеальной посадки.</li>
          <li>Контроль качества: Тщательный отбор тканей и полной брендированной фурнитуры (молнии, пуговицы, бирки).</li>
          <li>Производство и пошив: Полное курирование работы фабрики и контроль каждого этапа пошива.</li>
        </ol>
      </div>

      <Col2Photo image1={image20} image2={image21} widthImage1="w-[49%]" widthImage2="w-[49%]"/>

      <Col2Photo image1={image22} image2={image23} widthImage1="w-[49%]" widthImage2="w-[49%]"/>

      <Col2Photo image1={image24} image2={image25} widthImage1="w-[49%]" widthImage2="w-[49%]"/>

      <div className="mt-5 md:mt-[50px]">
        <p className="w-auto sm:w-[calc(50%-10px)] ml-auto text-[0.625rem] sm:text-sm md:text-xl lg:text-[23px] font-medium leading-[13px] md:leading-[30px] whitespace-pre-line text-justify">
          Мы запустили две целевые линейки мерча, которые укрепляют корпоративный дух среди сотрудников и формируют лояльное комьюнити среди клиентов. Коллекция «Padel starts here» стала не просто одеждой, а символом принадлежности к новому поколению спортивных визионеров.
        </p>
      </div>

      <img src={image26} alt="Фото кейса" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      <Col2Photo image1={image27} image2={image28} widthImage1="w-[49%]" widthImage2="w-[49%]"/>

      <Col2Photo image1={image29} image2={image30} widthImage1="w-[49%]" widthImage2="w-[49%]"/>

      {/* Section 14 */}
      <NextPrevCase dataPrev={casesData[18]} dataNext={casesData[19]} link={"/case20"}/>

      <Footer />
    </main>
  );
};

export default Case21Page;