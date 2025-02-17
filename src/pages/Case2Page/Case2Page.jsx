import React from 'react';
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack';
import InfoSection from '../../components/InfoSection/InfoSection';
import image1 from './assets/image_1.svg';
import image2 from './assets/image_2.svg';
import image3 from './assets/image_3.svg';
import image4 from './assets/image_4.svg';
import image5 from './assets/image_5.svg';
import image6 from './assets/image_6.svg';
import image7 from './assets/image_7.svg';
import image8 from './assets/image_8.png';
import image9 from './assets/image_9.svg';
import image10 from './assets/image_10.svg';
import image11 from './assets/image_11.svg';
import image12 from './assets/image_12.svg';
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import Type2 from '../../components/Type2/Type2';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
import HalfText from '../../components/HalfText/HalfText';
const Case2Page = () => {
  const caseData = {
    projectTitle: 'rebranding',
    clientTitle: 'radi mira i lubvi',
    cards: ['брендинг', '3d'],
    description:
      'RADI MIRA I LUBVI — социально-культурный проект родом из Москвы. Международное объединение художников, музыкантов, лидеров мнений и ценителей искусства во всех его проявлениях. ',
  };
  const type2Data = {
    title1:
      'Мы создали новую визуальную айдентику, вдохновленную пиксельной эстетикой. Знаковые символы бренда — сердце и смайл — обрели обновленную форму, превратившись в пиксели, излучающие волны. Эти образы стали визуальной метафорой философии бренда: делиться любовью и распространять ее среди своей аудитории.',
    title2: '',
    image1: image5,
    image2: image6,
    customWidth: "w-[47%]"
  };
  return (
    <main className="container mx-auto">
      <HeaderBlack />

      {/* Section 1 */}
      <InfoSection caseData={caseData} />

      {/* Section 2 */}
      <img src={image1} alt="photo1" className="mt-5 md:mt-[50px] w-full h-auto" />

      {/* Section 3 */}
      <HalfText 
        title={'Логотип представляет собой уникальное сочетание графических элементов и типографики, которое воплощает в себе идею поделиться любовью (сердце) и счастьем (смайлик) с миром и сделать его лучше.'}
      />

      {/* Section 4 */}
      <Col2Photo image1={image2} image2={image3} />

      {/* Section 5 */}
      <img src={image4} alt="photo1" className="mt-5 md:mt-[50px] w-full h-auto" />

      {/* Section 6 */}
      <div className="mt-5 md:mt-[3.125rem]">
        <Type2 type2Data={type2Data} />
      </div>

      {/* Section 7 */}
      <img src={image7} alt="photo7" className="mt-5 md:mt-[50px] w-full h-auto" />

      {/* Section 8 */}
      <HalfText 
        title={'Создали библиотеку 3D-элементов, чтобы усилить визуальное присутствие бренда и повысить его узнаваемость. Также разработали дизайн для различных indoor- и outdoor-носителей.'}
      />

      {/* Section 9 */}
      <Col2Photo image1={image8} image2={image9} />

      {/* Section 10 */}
      <img src={image10} alt="photo10" className="mt-5 md:mt-[50px] w-full h-auto" />

      {/* Section 11 */}
      <Col2Photo image1={image11} image2={image12} />

      <NextPrevCase dataPrev={casesData[2]} dataNext={casesData[7]} link={"/case5"}/>

      <Footer />
    </main>
  );
};

export default Case2Page;
