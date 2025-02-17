import React from 'react';
import { Link } from 'react-router-dom';

const Sort = () => {
  const categories = [
    { name: 'Все', count: 15 },
    { name: 'Брендинг', count: 5 },
    { name: '3D', count: 7 },
    { name: 'UX/UI дизайн', count: 3 },
    { name: 'Digital', count: 3 },
    { name: 'Events', count: 6 },
    { name: 'Стратегия и позиционирование', count: 1 },
    { name: 'Мерч', count: 2 },
    { name: 'Production', count: 2 },
    { name: 'SMM/PR', count: 3 },
    { name: 'Партнерство', count: 2 },
    { name: 'Архитектура', count: 2 },
  ];
  return (
    <div className="w-[570px] flex flex-wrap gap-[15px] pr-20">
      {categories.map((category) => (
        <div
          key={category.href}
          href={category.href}
          className={
            'text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base whitespace-nowrap cursor-pointer'
          }
        >
          {category.name}
          <sup className="ml-0.5 text-xs">({category.count})</sup>,
        </div>
      ))}
    </div>
  );
};

export default Sort;
