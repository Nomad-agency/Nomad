import React from 'react';
import TargetGridItem from '../UI/TargetGridItem/TargetGridItem';

const TargetGrid = () => {
  const gridData = [
    {
      id: 1,
      title: 'Анализ рынка, трендов, конкурентов и аудитории',
    },
    {
      id: 2,
      title: 'Разработка креативной идеи, активаций, спецпроектов и календаря на следующий год',
    },
    {
      id: 3,
      title: 'Выстраивание позиционирования, отстройка  бренда и поиск свободных ниш',
    },
    {
      id: 4,
      title: 'Реализация стратегии 2024 года',
    },
  ];
  return (
    <div className="mt-5 md:mt-[4.375rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-16 gap-x-5">
        {gridData.map((item) => (
          <TargetGridItem key={item.id} id={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default TargetGrid;
