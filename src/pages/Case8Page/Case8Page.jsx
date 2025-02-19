import React from 'react'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import InfoSection from '../../components/InfoSection/InfoSection'
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
import Type1 from '../../components/Type1/Type1'
import Col2Photo from '../../components/Col2Photo/Col2Photo'
import HalfText from '../../components/HalfText/HalfText'
import Footer from '../../components/Footer/Footer'
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase'
import { casesData } from '../utils/const'
import ImageCustom from '../../components/ImageCustom/ImageCustom'
import Type3 from '../../components/Type3/Type3'

const Case8Page = () => {
  const caseData = {
    projectTitle: 'Limitless opportunities',
    clientTitle: 'УК «Альфа-Капитал»',
    cards: ['мерч'],
    description:
      'УК «Альфа-Капитал» — компания, которая бережно сохраняет свои главные ценности и с большим вниманием относится к сотрудникам. Именно для них решили создать особенный мерч, который передает философию компании и ее цели.',
    nowrap: true
  };
  const type1Data = {
    title1: 'Мы разработали креативную концепцию мерча\n под названием «БезПредел возможностей», которая отражает потенциал роста и развития каждого\n сотрудника в компании. В рамках этой идеи был создан внутренний инвестиционный словарь, ставший\n ключевым элементом дизайна вещей. Концепция символизирует потенциал роста и развития каждого сотрудника в компании.',
    title2:
      'У них нет преград, они могут раскрывать и развивать свои таланты, предлагать новые идеи, выходить за рамки и совершенствоваться. С помощью этой креативной идеи мы поддерживаем отдел HR в продвижении корпоративных ценностей и укреплении корпоративной культуры.',
    image1: image2,
    image2: image3,
    widthTitle2: 'w-[75%] md:w-[49%]',
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
        <div className="mt-5 md:mt-[50px]">
          <Type3 type1Data={type1Data} />
        </div>

        {/* Section 4 */}
        <Col2Photo image1={image4} image2={image5} />

        {/* Section 5 */}
        <HalfText 
          title={'Коллекция включала в себя: свитшот, oversize-футболку, стикерпак, свечи с ароматом успешных инвестиций, ремувки для ключей и сумок.'}
          custom='w-[54%]'
        />

        {/* Section 6 */}
        <Col2Photo image1={image6} image2={image7} />

        {/* Section 7 */}
        <Col2Photo image1={image8} image2={image9} />

        {/* Section 8 */}
        <Col2Photo image1={image10} image2={image11} />

        {/* Section 9 */}
        <HalfText 
          title={'Мы полностью создали коллекцию, дизайн и осуществили производство: от создания лекала до пошива изделий и нанесения брендинга, а также провели съемку коллекции. '}
        />

        {/* Section 10 */}
        <Col2Photo image1={image12} image2={image13} />

        {/* Section 11 */}
        <Col2Photo image1={image14} image2={image15} />

        <NextPrevCase dataPrev={casesData[10]} dataNext={casesData[12]} link={"/case6"}/>

        <Footer />
      </main>
    </>
  )
}

export default Case8Page