import React from 'react'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import InfoSection from '../../components/InfoSection/InfoSection'
import image1 from "./assets/image_1.png";
import image2 from "./assets/image_2.png";
import image3 from "./assets/image_3.png";
import image4 from "./assets/image_4.png";
import image5 from "./assets/image_5.png";
import image6 from "./assets/image_6.png";
import image7 from "./assets/image_7.png";
import image8 from "./assets/image_8.png";
import image9 from "./assets/image_9.png";
import image10 from "./assets/image_10.png";
import image11 from "./assets/image_11.png";
import image12 from "./assets/image_12.png";
import image13 from "./assets/image_13.png";
import image14 from "./assets/image_14.png";
import image15 from "./assets/image_15.png";
import image16 from "./assets/image_16.png";
import image17 from "./assets/image_17.png";
import video1 from "./assets/video_1.mp4";
import LongImgVideo from '../../components/LongImgVideo/LongImgVideo';
import HalfText from '../../components/HalfText/HalfText';
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import Type1 from '../../components/Type1/Type1';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
import ImageCustom from '../../components/ImageCustom/ImageCustom';
const Case6Page = () => {
  const caseData = {
    projectTitle: 'GRAND OPENING',
    clientTitle: 'BODIUM',
    cards: ['events'],
    description:
      'BODIUM — закрытый фитнес-бутик с уникальным арт-пространством внутри, созданным в сотрудничестве с современными художниками.',
    result: [
      {
        title: '150',
        desc: 'гостей',
      },
      {
        title: '300',
        desc: 'кг флористики',
      },
      {
        title: '10',
        desc: 'конвертаций \nв покупку',
      }
    ],
  };
  const type1Data = {
    title1: 'Мы пригласили всех клиентов и потенциальных резидентов на ультрамодный «неоновый» квартирник.',
    title2:
      'В расслабленной атмосфере гости знакомились с брендом ближе, общаясь с текущими резидентами клуба, что непосредственно влияло на решение присоединиться к фитнес-бутику.',
    image1: image5,
    image2: image6,
    widthTitle2: 'w-[70%] md:w-[49%]',
  };
  const type1Data1 = {
    title1: 'Основное событие проиходило внутри: гости ходили на иммерсивные экскурсии по внутреннему \nпространству, чтобы из реальных историй узнать, \nкак BODIUM меняет жизни людей и какой потенциал он раскрывает в наших телах и сознании.',
    
    image1: image9,
    image2: image10
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
          title={'В честь первого года работы мы решили на один вечер открыть двери для всех желающих, чтобы показать, что BODIUM — это больше, чем просто фитнес-пространство, это стиль жизни.'}
        />

        {/* Section 4 */}
        <Col2Photo image1={image2} image2={image3} />

        {/* Section 5 */}
        <img src={image4} alt="image 4" className="mt-[20px] md:mt-[50px]" loading='lazy'/>

        {/* Section 6 */}
        <div className="mt-5 md:mt-[50px]">
          <Type1 type1Data={type1Data} />
        </div>

        {/* Section 7 */}
        <ImageCustom image={image7} />

        {/* Section 8 */}
        <HalfText 
          title={'На парковке мы воссоздали атмосферу закрытого клуба, где гости в непринужденной обстановке общались с консультантами, играли в азартные игры, наслаждались изысканной едой и коктейлями, слушали джаз и танцевали под стильные виниловые треки. Кульминацией вечера стал аукцион, на котором разыгрывались ценные предметы искусства, представленные в пространстве.'}
          custom="w-[80%]"
        />

        {/* Section 9 */}
        <ImageCustom image={image8} />

        {/* Section 10 */}
        <div className="mt-[50px]">
          <Type1 type1Data={type1Data1} />
        </div>

        {/* Section 11 */}
        <Col2Photo image1={image11} image2={image12} />

        {/* Section 12 */}
        <ImageCustom image={image13} />

        {/* Section 13 */}
        <Col2Photo image1={image14} image2={image15} />

        {/* Section 14 */}
        <Col2Photo image1={image16} image2={image17} />

        <NextPrevCase dataPrev={casesData[11]} dataNext={casesData[13]} link={"/case4"}/>

        <Footer />
      </main>
    </>
  )
}

export default Case6Page