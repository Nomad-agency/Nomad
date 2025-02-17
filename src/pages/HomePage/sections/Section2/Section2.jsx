import React, { useEffect, useState } from 'react';
import InformationItem from './UI/InformationItem/InformationItem';

const Section2 = () => {
  const informationData = [
    {
      id: '1',
      title: 'Свобода',
      desc: 'Мы — кочевники в мире маркетинга, для которых важны не условности и тренды, а постоянное движение. \n\n мы помогаем брендам не застревать на одном месте или идее.',
    },
    {
      id: '2',
      title: 'движение',
      desc: 'Вместе с тобой запускаем маркетинговый трип, где есть постоянный путь к новым целям и результатам.',
    },
    {
      id: '3',
      title: 'КРЕАТИВ',
      desc: 'Исследуем мир в поисках свежих идей, вау-решений и действий, которые формируют новые тренды.',
    },
    {
      id: '4',
      title: 'ГИБКОСТЬ',
      desc: 'Слушаем и слышим твои боли и скрытые желания, находим оптимальное и эффективное решение.',
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener('resize', handleResize);
    // Удаляем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  // 3.75rem = 60px, 1.875rem = 30px
  return (
    <section className="container mx-auto mt-[1.875rem] sm:mt-[3.75rem]">
      <div className="flex justify-between h-fit lg:h-[270px] lg:flex-nowrap flex-wrap gap-[0.9375rem] lg:gap-0">
        {informationData.map((item, index) => (
          <InformationItem
            key={index}
            id={item.id}
            title={item.title}
            desc={item.desc}
            className={index <= 2 ? 'lg:border-r border-primary' : ''}
            isScroll={isMobile ? false : index === 1 || index === 3} // Чтобы отключить анимацию, нужно ставить Null
          />
        ))}
      </div>
    </section>
  );
};

export default Section2;
