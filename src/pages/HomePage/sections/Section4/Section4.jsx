import Title from '../../UI/Title/Title.jsx';
import AccordionItem from './components/AccordionItem/AccordionItem';
const Section4 = () => {
  const accordionData = [
    {
      id: 1,
      title: 'Работа с брендом',
      list: [
        'Разработка стратегии и позиционирования бренда',
        'Разработка BTL-стратегии ',
        'Разработка партнерской программы, поиск релевантных партнеров',
        'Реализация проектов разного формата: запуск брендов, организация и проведение презентаций, фестивалей, мероприятий для повышения лояльности клиентов, культурных и общественных событий любого масштаба',
      ],
    },
    {
      id: 2,
      title: 'Visual',
      list: ['Брендинг', 'UX/UI-дизайн', '3D-графика, анимация и визуализация'],
    },
    {
      id: 3,
      title: 'спецпроекты',
      list: [
        <a href="http://nomad-arch.ru" target="_blank" dangerouslySetInnerHTML={{ __html: 'Дизайн-студия <strong>Nomad.Arch</strong>, выполняющая полную разработку архитектурного пространства в рамках проектов' }}></a>, 
        'Digital-проекты', 
        'Создание капсульных коллекций/Мерч'
      ],
    },
    {
      id: 4,
      title: 'Продвижение',
      list: ['Разработка коммуникационной и SMM-стратегии', 'Ведение SMM/PR', 'Production'],
    },
  ];
  
  // 11.25rem = 180px
  return (
    <div className="mt-[5.625rem] sm:mt-[11.25rem] container mx-auto" id="services">
      <Title title={'[услуги]'} />

      <div className="mt-10 flex flex-col gap-[30px]">
        {accordionData.map((item) => (
          <AccordionItem key={item.id} id={item.id} title={item.title} list={item.list} />
        ))}
      </div>
    </div>
  );
};

export default Section4;
