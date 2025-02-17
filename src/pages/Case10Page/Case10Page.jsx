import React from 'react'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import InfoSection from '../../components/InfoSection/InfoSection'
import video1 from "./assets/video_1.mp4"
import HalfText from '../../components/HalfText/HalfText';
import ImageCustom from '../../components/ImageCustom/ImageCustom'
import image1 from "./assets/image_1.svg"
import image2 from "./assets/image_2.svg"
import image3 from "./assets/image_3.svg"
import image4 from "./assets/image_4.svg"
import image5 from "./assets/image_5.svg"
import image6 from "./assets/image_6.svg"
import image7 from "./assets/image_7.svg"
import image8 from "./assets/image_8.svg"
import image9 from "./assets/image_9.svg"
import image10 from "./assets/image_10.svg"
import image11 from "./assets/image_11.svg"
import image12 from "./assets/image_12.svg"
import image13 from "./assets/image_13.svg"
import image14 from "./assets/image_14.svg"
import image15 from "./assets/image_15.svg"
import image16 from "./assets/image_16.svg"
import image17 from "./assets/image_17.svg"
import image18 from "./assets/image_18.svg"
import image19 from "./assets/image_19.svg"
import image20 from "./assets/image_20.svg"
import image21 from "./assets/image_21.svg"
import image22 from "./assets/image_22.svg"
import image23 from "./assets/image_23.svg"
import image24 from "./assets/image_24.svg"
import image25 from "./assets/image_25.svg"
import image26 from "./assets/image_26.svg"
import image27 from "./assets/image_27.svg"
import image28 from "./assets/image_28.svg"
import image29 from "./assets/image_29.svg"
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import Footer from '../../components/Footer/Footer';
import { casesData } from '../utils/const';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
const Case10Page = () => {
  const caseData = {
    projectTitle: 'Rebranding',
    clientTitle: 'Lunda',
    cards: ['брендинг', '3d', 'партнерство'],
    description:
      'Lunda — самый большой padel-клуб в России. На момент обращения к нам он уже активно развивался и функционировал, но не хватало полноценного, продуманного брендинга, который отражал бы ценности и суть Lunda.',
  };
  return (
    <>
      <main className="container mx-auto">
        <HeaderBlack />

        {/* Section 1 */}
        <InfoSection caseData={caseData} />

        {/* Section 2 */}
        <div className="flex justify-between mt-[50px]">
          <img src={image1} alt="image" className="xl:w-auto h-[175px] xs:h-[195px] sm:h-[320px] md:h-[430px] lg:h-[580px] xl:h-auto" />
          <video
            src={video1}
            autoPlay
            loop
            muted
            playsInline
            className="xl:w-[674px] h-[175px] xs:h-[195px] sm:h-[320px] md:h-[430px] lg:h-[580px] xl:h-auto"
          ></video>
        </div>

        {/* Section 3 */}
        <HalfText 
          title={'В рамках сотрудничества мы провели ребрендинг и создали полноценный брендбук для клуба, включающий фирменные цвета, шрифтовую систему, графику и уникальные элементы брендинга. Дополнительно был разработан архитектурный гайд для indoor-/outdoor-кортов.'}
        />

        {/* Section 4 */}
        <ImageCustom image={image2} />

        {/* Section 5 */}
        <HalfText 
          title={'Логотип метафоричный: первая буква представляет собой траекторию движения мяча, которая сочетается со строгостью. В фирменных цветах мы стремились передать разные эмоции от игры в падел, а графику также выстроили вокруг буквы L.'}
        />

        {/* Section 6 */}
        <Col2Photo image1={image3} image2={image4} />

        {/* Section 7 */}
        <HalfText 
          title={'Она — воплощение всего, что заключено в клубе: движение и динамика, на которых основывается сам падел.'}
        />

        {/* Section 8 */}
        <Col2Photo image1={image5} image2={image6} />

        {/* Section 9 */}
        <ImageCustom image={image7} />

        {/* Section 10 */}
        <HalfText 
          title={'Особое внимание уделили разработке визуального кода для кортов с проработкой всех деталей, включая сетку, нумерацию и оформление входной группы.'}
        />

        {/* Section 11 */}
        <Col2Photo image1={image8} image2={image9} />

        {/* Section 12 */}
        <Col2Photo image1={image10} image2={image11} />

        {/* Section 13 */}
        <HalfText 
          title={'Кроме того, мы продумали брендирование необходимого для падела инвентаря: судейских стульев, скамеек, корзин для мячей, собирателей мячей, полотенец и корзин для них, брелков для ключей в раздевалке, стаканчиков для воды, пуфов, шезлонгов, зонтов и трофеев.'}
        />

        {/* Section 14 */}
        <Col2Photo image1={image12} image2={image13} />

        {/* Section 15 */}
        <Col2Photo image1={image14} image2={image15} />

        {/* Section 16 */}
        <Col2Photo image1={image16} image2={image17} />

        {/* Section 17 */}
        <Col2Photo image1={image18} image2={image19} />

        {/* Section 18 */}
        <ImageCustom image={image20} />

        {/* Section 19 */}
        <Col2Photo image1={image21} image2={image22} />

        {/* Section 20 */}
        <HalfText 
          title={'Часть фирменных предметов в новом оформлении стала мерчом, который можно приобрести в клубе: ракетки, тубусы для мячей, сумки для ракеток, бутылки для воды, мешки для обуви и формы. '}
        />

        {/* Section 21 */}
        <Col2Photo image1={image23} image2={image24} />

        {/* Section 22 */}
        <Col2Photo image1={image25} image2={image26} />

        {/* Section 23 */}
        <Col2Photo image1={image27} image2={image28} />

        {/* Section 24 */}
        <ImageCustom image={image29} />

        <NextPrevCase dataPrev={casesData[5]} dataNext={casesData[1]} link={"/case3"}/>

        <Footer />
      </main>
    </>
  )
}

export default Case10Page