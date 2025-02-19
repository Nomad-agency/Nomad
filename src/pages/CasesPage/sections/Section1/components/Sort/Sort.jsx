import React from 'react';
import { Link } from 'react-router-dom';

const Sort = ({ sortCase, setSortCase }) => {
  const categories = [
    { name: 'Все', count: 15 },
    { name: 'Брендинг', count: 4 },
    { name: '3D', count: 5 },
    { name: 'UX/UI-дизайн', count: 3 },
    { name: 'Digital', count: 3 },
    { name: 'Events', count: 7 },
    { name: 'Стратегия и позиционирование', count: 1 },
    { name: 'Мерч', count: 2 },
    { name: 'Production', count: 2 },
    { name: 'SMM/PR', count: 3 },
    { name: 'Партнерство', count: 2 },
    { name: 'Архитектура', count: 2 },
  ];
  return (
    <div className="w-[570px] flex flex-wrap gap-[10px] md:gap-[15px] pr-0 md:pr-20 mt-5 md:mt-0">
      {categories.map((category) => (
        <div
          key={category.href}
          href={category.href}
          className={
            `${sortCase === category.name ? "text-[#000000]" : "text-[#C4C4C4]"} transition-colors text-[10px] md:text-base whitespace-nowrap cursor-pointer`
          }
          onClick={() => setSortCase(category.name)}
        >
          {category.name}
          <sup className="ml-0.5 text-[10px] md:text-xs">({category.count})</sup>,
        </div>
      ))}
    </div>
  );
};

export default Sort;
