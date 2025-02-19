import React from 'react'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import InfoSection from '../../components/InfoSection/InfoSection'
import HalfText from '../../components/HalfText/HalfText';
import ImageCustom from '../../components/ImageCustom/ImageCustom';
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
import image26 from "./assets/image_26.png"
import image27 from "./assets/image_27.png"
import image28 from "./assets/image_28.png"
import image29 from "./assets/image_29.png"
import image30 from "./assets/image_30.png"
import image31 from "./assets/image_31.png"
import image32 from "./assets/image_32.png"
import image33 from "./assets/image_33.png"
import image34 from "./assets/image_34.png"
import Col2Photo from '../../components/Col2Photo/Col2Photo';
import Footer from '../../components/Footer/Footer';
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase';
import { casesData } from '../utils/const';
const Case13Page = () => {
  const caseData = {
    projectTitle: 'форма ФК « Спартак »',
    clientTitle: 'ФК «Спартак»',
    cards: ['мерч', '3d'],
    description:
      'ФК «Спартак-Москва» — титулованный клуб с более чем столетней историей обратился к нам с запросом на создание одного из ключевых символов — мужской и женской футбольной формы. Необходимо было разработать 4-ый комплект формы: футболки,  этикетки, шорты и гетры.\n\nПри создании мужской формы мы опирались на историю клуба. Для каждой из концепций были разработаны паттерны и слоганы, которые также размещались на форме.',
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
          title={'Первый концепт: по одной из легенд, Николай Петрович Старостин, придумывая название для Спартака, был вдохновлён очень популярным в 30-е годы романом итальянского писателя Рафаэлло Джованьоли «Спартак». В книге присутствуют иллюстрации, которые мы взяли за основу паттерна.'}
        />

        {/* Section 3 */}
        <ImageCustom image={image2} />

        {/* Section 4 */}
        <ImageCustom image={image3} />

        {/* Section 6 */}
        <ImageCustom image={image4} />

        {/* Section 7 */}
        <ImageCustom image={image5} />

        {/* Section 8 */}
        <ImageCustom image={image6} />

        {/* Section 9 */}
        <ImageCustom image={image7} />

        {/* Section 10 */}
        <ImageCustom image={image8} />

        {/* Section 11 */}
        <ImageCustom image={image9} />

        {/* Section 12 */}
        <ImageCustom image={image10} />

        {/* Section 13 */}
        <HalfText 
          title={'Второй концепт: вдохновляясь легендарным слоганом «Кто мы? Мясо!», мы разработали уникальный паттерн, напоминающий текстуру мяса. Он символизирует соединительные ткани, выполняющие защитную функцию и создающие опорный каркас. Эти «прожилки» также отражают различные пути развития клуба и его богатую историю.'}
        />

        {/* Section 14 */}
        <ImageCustom image={image11} />

        {/* Section 15 */}
        <HalfText 
          title={'В паттерн были интегрированы различные исторические события и значимые места, связанные с ФК «Спартак», которые до сих пор остаются основой клуба. Этот узор напоминает переплетение артерий, ведущих к ключевым моментам и локациям, создавая образ своеобразной карты с историей клуба.'}
        />

        {/* Section 16 */}
        <ImageCustom image={image12} />

        {/* Section 17 */}
        <ImageCustom image={image13} />

        {/* Section 18 */}
        <ImageCustom image={image14} />

        {/* Section 19 */}
        <ImageCustom image={image15} />

        {/* Section 20 */}
        <ImageCustom image={image16} />

        {/* Section 21 */}
        <ImageCustom image={image17} />

        {/* Section 22 */}
        <ImageCustom image={image18} />

        {/* Section 23 */}
        <ImageCustom image={image19} />

        {/* Section 24 */}
        <ImageCustom image={image20} />

        {/* Section 25 */}
        <HalfText 
          title={'В основу концепции женской футбольной формы легли гладиолусы.'}
        />

        {/* Section 26 */}
        <ImageCustom image={image21} />

        {/* Section 27 */}
        <Col2Photo image1={image22} image2={image23} />

        {/* Section 28 */}
        <ImageCustom image={image24} />

        {/* Section 29 */}
        <ImageCustom image={image25} />

        {/* Section 30 */}
        <HalfText 
          title={'Название «гладиолус» произошло от лат. gladius — «меч», и связано с тем, что листья цветка по форме напоминают шпаги. Такой символическией образ передает сильный дух борьбы ФК «Спартак» на поле.'}
        />

        {/* Section 31 */}
        <ImageCustom image={image26} />

        {/* Section 32 */}
        <Col2Photo image1={image28} image2={image23} />

        {/* Section 33 */}
        <ImageCustom image={image27} />

        {/* Section 34 */}
        <HalfText 
          title={'Является символом благородства, дружбы, верности и братства.'}
        />

        {/* Section 35 */}
        <ImageCustom image={image29} />

        {/* Section 36 */}
        <Col2Photo image1={image30} image2={image23} />

        {/* Section 37 */}
        <ImageCustom image={image31} />

        {/* Section 38 */}
        <HalfText 
          title={'История цветка насчитывает несколько тысячелетий. Согласно легендам, они появились из мечей двух друзей-гладиаторов, которые отказались вступать в схватку друг с другом. За это их предали казни, а из оружия невинных жертв выросли прекрасные цветы.'}
        />

        {/* Section 39 */}
        <ImageCustom image={image32} />

        {/* Section 40 */}
        <Col2Photo image1={image33} image2={image23} />

        {/* Section 41 */}
        <HalfText 
          title={'С тех пор гладиолусы стали символом дружбы, благородства и храбрости. Их наделяли магическими свойствами, которые защищали воинов во время битвы и могли принести победу. Поэтому его бутоны прикрепляли на грудь древнеримские гладиаторы. Именно образ этого цветка был взят за основу паттерна для женской формы.'}
        />

        {/* Section 42 */}
        <ImageCustom image={image34} />

        <NextPrevCase dataPrev={casesData[8]} dataNext={casesData[10]} link={"/case14"}/>

        <Footer />
      </main>
    </>
  )
}

export default Case13Page