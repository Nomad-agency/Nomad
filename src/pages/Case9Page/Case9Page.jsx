import React from 'react'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import InfoSection from '../../components/InfoSection/InfoSection'
import HalfText from '../../components/HalfText/HalfText'
import Col2Photo from '../../components/Col2Photo/Col2Photo'
import image1 from "./assets/image_1.png"
import image2 from "./assets/image_2.png"
import image3 from "./assets/image_3.png"
import image4 from "./assets/image_4.png"
import image5 from "./assets/image_5.png"
import image6 from "./assets/image_6.png"
import image7 from "./assets/image_7.png"
import image8 from "./assets/image_8.png"
import image9 from "./assets/image_9.png"
import image10 from "./assets/image_10.png"
import image11 from "./assets/image_11.png"
import image12 from "./assets/image_12.png"
import image13 from "./assets/image_13.png"
import image14 from "./assets/image_14.png"
import image15 from "./assets/image_15.png"
import image16 from "./assets/image_16.png"
import image17 from "./assets/image_17.png"
import image18 from "./assets/image_18.png"
import image19 from "./assets/image_19.png"
import image20 from "./assets/image_20.png"
import image21 from "./assets/image_21.png"
import image22 from "./assets/image_22.png"
import image23 from "./assets/image_23.png"
import image24 from "./assets/image_24.png"
import image25 from "./assets/image_25.png"
import Type1 from '../../components/Type1/Type1'
import ImageCustom from '../../components/ImageCustom/ImageCustom'
import Footer from '../../components/Footer/Footer'
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase'
import { casesData } from '../utils/const'
import Type3 from '../../components/Type3/Type3'
const Case9Page = () => {
  const caseData = {
    projectTitle: 'betboom party',
    clientTitle: 'BetBoom',
    cards: ['events'],
    description:
      'Бренд BetBoom решил устроить неформальное событие, на котором мог бы собрать близких друзей и клиентов. Мы предложили формат «вечер без галстуков» — событие, где можно расслабиться и наслаждаться моментом.',
  };
  const type1Data = {
    title1: 'Гости могли выбрать формат вечера на свой вкус: \nфуршет и нетворкинг на первом этаже, зона активных \nигр с возможностью заработать виртуальные деньги \nдля участия в финальном аукционе, приглушенная \nмузыка на втором этаже или lounge-зона с авторскими кальянами на уютной веранде.',
    title2:
      'Завершением вечера стало яркое выступление группы BAZAR.',
    image1: image5,
    image2: image6,
    widthTitle2: 'w-[50%]',
  };
  return (
    <>
      <main className="container mx-auto">
        <HeaderBlack />

        {/* Section 1 */}
        <InfoSection caseData={caseData} />

        {/* Section 2 */}
        <ImageCustom image={image1} />

        {/* Section 3 */}
        <HalfText 
          title={'В основе креативной концепции лежал стиль Gucci: яркий, эксцентричный и эффектный. Пространство ресторана Bagebi стало тропической хижиной с алыми бархатными шторами, декором из экзотических фруктов, яркой, но при этом очень камерной и домашней сценой.'}
        />

        {/* Section 4 */}
        <Col2Photo image1={image2} image2={image3} />

        {/* Section 5 */}
        <ImageCustom image={image4} />

        {/* Section 6 */}
        <div className="mt-5 md:mt-[50px]">
          <Type3 type1Data={type1Data} />
        </div>

        {/* Section 7 */}
        <Col2Photo image1={image7} image2={image8} />

        {/* Section 8 */}
        <ImageCustom image={image9} />

        {/* Section 9 */}
        <Col2Photo image1={image10} image2={image11} />

        {/* Section 8 */}
        <ImageCustom image={image12} />

        {/* Section 9 */}
        <Col2Photo image1={image13} image2={image14} />

        {/* Section 10 */}
        <ImageCustom image={image15} />

        {/* Section 11 */}
        <Col2Photo image1={image16} image2={image17} />

        {/* Section 12 */}
        <Col2Photo image1={image18} image2={image19} />

        {/* Section 13 */}
        <Col2Photo image1={image20} image2={image21} />

        {/* Section 14 */}
        <Col2Photo image1={image22} image2={image23} />

        {/* Section 15 */}
        <Col2Photo image1={image24} image2={image25} />

        <NextPrevCase dataPrev={casesData[1]} dataNext={casesData[2]} link={"/case7"}/>

        <Footer />
      </main>
    </>
  )
}

export default Case9Page