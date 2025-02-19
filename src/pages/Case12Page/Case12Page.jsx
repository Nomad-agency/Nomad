import React from 'react'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import InfoSection from '../../components/InfoSection/InfoSection'
import LongImgVideo from '../../components/LongImgVideo/LongImgVideo'
import image1 from "./assets/image_1.png"
import image2 from "./assets/image_2.png"
import image3 from "./assets/image_3.png"
import image4 from "./assets/image_4.png"
import image5 from "./assets/image_5.png"
import image6 from "./assets/image_6.png"
import video1 from "./assets/video_1.mp4"
import ImageCustom from '../../components/ImageCustom/ImageCustom'
import Footer from '../../components/Footer/Footer'
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase'
import { casesData } from '../utils/const'
import Type3 from '../../components/Type3/Type3'
const Case12Page = () => {
  const caseData = {
    projectTitle: 'CREATE YOUR REALITY?',
    clientTitle: 'Bodium',
    cards: ['smm/pr', 'production'],
    description:
      'BODIUM — закрытый фитнес-бутик с арт-пространством, созданным вместе с современными художниками. Идея рекламной кампании - показать, как фитнес помогает нам в реальной жизни и отключает нас от повседневности, перенося в совершенно другое пространство, где мы можем мечтать, думать и решать свои ежедневные задачи. ',
    result: [
      {
        title: '1',
        desc: 'единственный бутик',
      },
      {
        title: '500 000',
        desc: 'охват проекта',
      }
    ],
  };
  const type1Data = {
    title1: 'В роликах мы демонстрируем пространство бутика, уникальные тренажеры и методы тренировок,\n приглашая зрителя пройти увлекательный сюжет и \n вместе с нами создать эту новую реальность. Кроме того, мы разработали визуал для социальных сетей и \n наружной рекламы.',
    image1: image2,
    image2: image3,
    widthTitle2: 'w-[47%]',
  };
  return (
    <>
      <main className="container mx-auto">
        <HeaderBlack />

        {/* Section 1 */}
        <InfoSection caseData={caseData} />

        {/* Section 2 */}
        <LongImgVideo image={image1} video={video1}/>

        {/* Section 3 */}
        <div className="mt-5 md:mt-[50px]">
          <Type3 type1Data={type1Data} />
        </div>

        {/* Section 4 */}
        <ImageCustom image={image4} />

        {/* Section 5 */}
        <ImageCustom image={image5} />

        {/* Section 6 */}
        <ImageCustom image={image6} />

        <NextPrevCase dataPrev={casesData[13]} dataNext={casesData[0]} link={"/case15"}/>

        <Footer />
      </main>
    </>
  )
}

export default Case12Page