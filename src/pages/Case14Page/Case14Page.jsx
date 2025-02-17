import React from 'react'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import InfoSection from '../../components/InfoSection/InfoSection'
import ImageCustom from '../../components/ImageCustom/ImageCustom';
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
import Type1 from '../../components/Type1/Type1';
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import HalfText from '../../components/HalfText/HalfText';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
import Type3 from '../../components/Type3/Type3';
const Case14Page = () => {
  const caseData = {
    projectTitle: '«Капитальный прыжок»',
    clientTitle: 'УК «Альфа-Капитал»',
    cards: ['Digital', 'ux/ui-дизайн', '3d'],
    description:
      '«Капитальный прыжок» — созданная нами игра для УК «Альфа-Капитал», которая успешно увеличила активность клиентов в приложении и стимулировала рост продаж. Главным героем стал маскот компании — амбициозный бычок Гаврюша.',
    result: [
      {
        title: '5 раз',
        desc: 'выросла \nактивность в приложении',
      },
      {
        title: 'NDA',
        desc: 'дополнительный доход ',
      }
    ],
    nowrap: true
  };
  const type1Data = {
    title1: 'По задумке бычок отправляется в увлекательное путешествие по инвестиционному миру, исследуя яркий мегаполис. Механика знакома многим: игрок управляет бычком, который прыгает по платформам, собирая монеты и портфели с акциями.',
    title2:
      'Таким образом, игрок повышает свой рейтинг инвестора, преодолевая различные препятствия, такие как сломанные и движущиеся платформы. На его пути также появляется главный противник инвестиционного мира — медведь, символизирующий падающий рынок.',
    image1: image2,
    image2: image3,
    widthTitle2: 'w-[75%] md:w-[50%]',
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
        <div className="mt-5 mb-10">
          <Type3 type1Data={type1Data} />
        </div>

        {/* Section 4 */}
        <Col2Photo image1={image4} image2={image5} />

        {/* Section 6 */}
        <HalfText 
          title={'Для комфортного прохождения игры мы разработали различные бустеры, которые позволяли улучшить результаты и ускорить набор баллов. Одни давали жизни, другие — скорость, третьи позволяли продолжить игру даже при проигрыше.'}
        />

        {/* Section 7 */}
        <Col2Photo image1={image6} image2={image7} />

        {/* Section 8 */}
        <HalfText 
          title={'Бустеры дарились игроку за выполнение ежедневных заданий, а также их можно было приобрести в магазине внутри игры.'}
        />

        {/* Section 9 */}
        <Col2Photo image1={image8} image2={image9} />

        {/* Section 10 */}
        <HalfText 
          title={'Суммарный портфель накопленных инвестиций формировал общий бонус, который отображался в турнирной таблице. В конце сезона игроки с лучшими результатами получали призы от УК «Альфа-Капитал».'}
        />

        {/* Section 11 */}
        <ImageCustom image={image10} />

        {/* Section 12 */}
        <HalfText 
          title={'Игра не только повысила активность пользователей, но и стала эффективным инструментом вовлечения и удержания целевой аудитории в приложении . Она усилила лояльность аудитории и превратилась в дополнительный источник дохода для бренда, благодаря встроенной возможности приобретать дополнительные попытки и бустеры через инвестиции в продукты компании.'}
        />

        {/* Section 11 */}
        <ImageCustom image={image11} />

        <NextPrevCase dataPrev={casesData[9]} dataNext={casesData[11]} link={"/case8"}/>

        <Footer />
      </main>
    </>
  )
}

export default Case14Page