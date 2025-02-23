import * as React from 'react';
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack';
import InfoSection from '../../components/InfoSection/InfoSection';
import image1 from './assets/image_1.png';
import image2 from './assets/image_2.png';
import image2_1 from './assets/image2_1.png';
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
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
import Type3 from '../../components/Type3/Type3';
const Case3Page = () => {
  const caseData = {
    projectTitle: 'запуск бренда',
    clientTitle: 'nrav beauty',
    cards: ['events'],
    description:
      'NRAV BEAUTY — новый игрок на рынке декоративной косметики. Бренд обладает дерзким характером и четко знает, кто их клиент. Это косметика для уверенных в себе, смелых молодых девушек, которые не стесняются яркости и при этом ценят свою истинную красоту и внутренний стержень.',
    result: [
      {
        title: '70',
        desc: 'гостей',
      },
      {
        title: '1 530 000',
        desc: 'просмотров отчета о событии \n через ТГ-каналы инфлюенсеров',
      },
    ],
  };
  const type1Data = {
    title1:
      'Запуск вдохновлен стилем tennis core, так как NRAV BEAUTY знает, что сейчас в моде. Для проведения события выбрали открытый теннисный корт, чтобы полностью погрузить гостей в настроение теннисной тематики и переместить их из каменных джунглей в тенистый парк.',
    title2:
      'Детали продумали до мелочей: накрытые на игровом поле столы с сет-дизайном, авторская коктейльная карта от бартендеров, lounge-зона под зонтиками на лежаках с сорбетом из лимонов, анкеты для it-girls для определения нрава каждой гостьи и танцы под dj-set под звездным небом. ',
    image1: window.innerWidth > 576 ? image2 : image2_1,
    image2: image3,
    widthTitle2: 'w-[70%] md:w-[50%]',
  };
  const type1Data1 = {
    title1:
      'В течение вечера гостям на подносах разносили\n продукты бренда, чтобы в любой момент у них была возможность попробовать на себе NRAV и выбрать уникальный набор для самовыражения через макияж. ',
    image1: image7,
    image2: image8,
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
        <Type3 type1Data={type1Data} />
      </div>

      {/* Section 5 */}
      <Col2Photo image1={image4} image2={image5} />

      {/* Section 6 */}
      <img src={image6} alt="photo6" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      {/* Section 7 */}
      <div className="mt-5 md:mt-[50px]">
        <Type3 type1Data={type1Data1} />
      </div>

      {/* Section 8 */}
      <Col2Photo image1={image9} image2={image10} />

      {/* Section 9 */}
      <img src={image11} alt="photo11" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      {/* Section 10 */}
      <Col2Photo image1={image12} image2={image13} />

      {/* Section 11 */}
      <img src={image14} alt="photo14" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      {/* Section 12 */}
      <Col2Photo image1={image15} image2={image16} />

      {/* Section 13 */}
      <img src={image17} alt="photo17" className="mt-5 md:mt-[50px] w-full h-auto" loading='lazy'/>

      {/* Section 14 */}
      <Col2Photo image1={image18} image2={image19} />

      <NextPrevCase dataPrev={casesData[3]} dataNext={casesData[4]} link={"/case9"}/>

      <Footer />
    </main>
  );
};

export default Case3Page;
