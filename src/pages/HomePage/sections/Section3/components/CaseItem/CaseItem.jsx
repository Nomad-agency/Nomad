import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CardItem from '../UI/CardItem/index.jsx';
import ButtonCase from '../UI/ButtonCase/ButtonCase.jsx';
import { HiDotsHorizontal } from 'react-icons/hi';
import styled from './index.module.css';
import { Link } from 'react-router-dom';

/**
 * Компонент CaseItem отображает кейс с заголовком, кнопкой и набором карточек.
 * Карточки отображаются динамически в зависимости от доступного пространства.
 *
 * @component
 * @param {Object} props - Свойства компонента.
 * @param {boolean} props.isMobile - Флаг мобильного режима.
 * @param {boolean} props.isFocus2 - Флаг расширенного фокуса для карточек.
 * @param {boolean} props.isFocus - Флаг основного фокуса (например, для анимации появления).
 * @param {string} props.background - CSS-класс для фона.
 * @param {string} props.title - Заголовок кейса.
 * @param {string} props.link - Ссылка для кнопки.
 * @param {Array} props.cards - Массив данных для карточек.
 * @returns {JSX.Element}
 */
export default function CaseItem({
                                   isMobile,
                                   isFocus2,
                                   isFocus,
                                   background,
                                   title,
                                   link,
                                   cards = [],
                                   check=false,
                                   nomadarch=false
                                 }) {
  const containerRef = useRef(null);
  const ellipsisRef = useRef(null);
  const cardRefs = useRef([]);
  const [isDop, setIsDop] = useState(false);
  const [visibleCount, setVisibleCount] = useState(cards.length);

  /**
   * Функция для обновления количества видимых карточек.
   * Если кейс находится в расширенном состоянии (isFocus2 или isDop) и не в мобильном режиме,
   * отображаются все карточки. В противном случае вычисляется, сколько карточек умещается.
   */
  const updateVisibleCount = useCallback(() => {
    // Если кейс в расширенном состоянии и не в мобильном режиме — показываем все карточки.
    if (!isMobile && (isFocus2 || isDop)) {
      setVisibleCount(cards.length);
      return;
    }
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const ellipsisWidth = ellipsisRef.current ? ellipsisRef.current.offsetWidth : 0;
    const GAP = 2; // Интервал между карточками (подгонка под дизайн)
    let totalWidth = 0;

    // Подсчитываем суммарную ширину всех карточек
    for (let i = 0; i < cards.length; i++) {
      const cardEl = cardRefs.current[i];
      if (cardEl) {
        totalWidth += (i > 0 ? GAP : 0) + cardEl.offsetWidth;
      }
    }
    // Если все карточки умещаются в контейнере, отображаем их все
    if (totalWidth <= containerWidth) {
      setVisibleCount(cards.length);
      return;
    }

    // Вычисляем, сколько карточек можно отобразить с учётом кнопки-ellipsis
    let sum = 0;
    let count = 0;
    for (let i = 0; i < cards.length; i++) {
      const cardEl = cardRefs.current[i];
      if (!cardEl) continue;
      const gap = i > 0 ? GAP : 0;
      if (sum + gap + cardEl.offsetWidth + ellipsisWidth <= containerWidth) {
        sum += gap + cardEl.offsetWidth;
        count++;
      } else {
        break;
      }
    }
    setVisibleCount(count);
  }, [cards, isFocus2, isDop, isMobile]);

  // Обновляем количество видимых карточек с задержкой (учитывая анимацию)
  useEffect(() => {
    const timeout = setTimeout(updateVisibleCount, isFocus2 ? 0 : 350);
    return () => clearTimeout(timeout);
  }, [cards, updateVisibleCount, isFocus2, isDop]);

  // Стиль для анимации появления/исчезновения элементов
  const cardStyle = {
    opacity: isFocus ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  /**
   * Функция для рендеринга карточек.
   * Если все карточки умещаются, они рендерятся полностью,
   * иначе отображается часть карточек с кнопкой-ellipsis вместо последней.
   *
   * @returns {JSX.Element[]} Массив элементов для рендеринга.
   */
  const renderCards = () => {
    // Если все карточки умещаются, отображаем их все
    if (visibleCount === cards.length) {
      return cards.map((item, index) => (
        <CardItem
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          title={item}
          paddingX={item === '3d' ? 'px-[1.625rem]' : 'px-4'}
        />
      ));
    }
    // Иначе показываем часть карточек и кнопку-ellipsis вместо последней карточки
    const visibleItems = cards.slice(0, visibleCount - 1).map((item, index) => (
      <CardItem
        key={index}
        ref={(el) => (cardRefs.current[index] = el)}
        title={item}
        paddingX={item === '3d' ? 'px-[1.625rem]' : 'px-4'}
      />
    ));
    visibleItems.push(
      <button
        key="ellipsis"
        ref={ellipsisRef}
        className="inline-flex items-center justify-center h-[35px] text-[#FFFFFFCC] text-3xl ml-6"
        onClick={() => setIsDop(true)}
      >
        <HiDotsHorizontal />
      </button>
    );
    return visibleItems;
  };

  return (
    <Link
      to={link}
      ref={containerRef}
      className={`
        ${background} bg-cover
        ${check ? 'bg-center md:bg-left-bottom' : 'bg-left-bottom'}
        ${background === 'bg-bg-4' ? '!bg-center' : ''} 
        w-full h-[352px] sm:h-[410px] xl:h-[460px] 
        rounded-[10px] p-5 relative cursor-pointer block z-[9]
      `}
    >
      {/* Заголовок кейса и кнопка (поверх фона) */}
      <div style={cardStyle} onClick={(e) => e.stopPropagation()}>
        <CardItem classComponent="absolute" title={title} />
        { nomadarch && 
          <a href='http://nomad-arch.ru' target='_blank'
            onClick={(e) => e.stopPropagation()}
            className="inline-flex justify-center items-center text-center w-[29px] sm:w-[35px] aspect-square absolute top-5 right-[60px] text-[5px] sm:text-[7px] text-white bg-[#393939] rounded-full uppercase z-10"
          >
            <a rel="noopener noreferrer" href='http://nomad-arch.ru' target='_blank'>nomad arch</a>
          </a>
        }
        <ButtonCase link={link} />
      </div>
      {/* Область для отображения карточек */}
      <div className="absolute bottom-5">
        <div
          className={styled.element}
          style={{
            ...cardStyle,
            flexWrap: isFocus2 || isDop ? 'wrap' : 'nowrap',
          }}
        >
          {renderCards()}
          {/* Если все карточки умещаются, добавляем невидимый элемент для измерения кнопки-ellipsis */}
          {visibleCount === cards.length && (
            <button
              ref={ellipsisRef}
              className="invisible absolute"
              onClick={() => setIsDop(true)}
              style={{ pointerEvents: 'none' }}
            >
              <HiDotsHorizontal />
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

CaseItem.propTypes = {
  isMobile: PropTypes.bool,
  isFocus2: PropTypes.bool,
  isFocus: PropTypes.bool,
  background: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  cards: PropTypes.array,
};
