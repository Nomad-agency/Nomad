import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SCROLL_Y, useSHOW_TIME } from './const.js';

gsap.registerPlugin(useGSAP);

RotatingWord.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.number,
  fade: PropTypes.number,
  className: PropTypes.string,
  isAnimation: PropTypes.bool,
};

/**
 * Компонент для анимированной смены слов (fade-out -> fade-in).
 *
 * @param {string[]} words - Массив слов, которые будут циклически отображаться.
 * @param {number} [duration=2] - Длительность полного цикла (по умолчанию 2 сек).
 * @param {number} [fade=0.5] - Длительность фаз "прозрачности" (по умолчанию 0.5 сек).
 * @param {string} [className=''] - Дополнительный класс для стилизации контейнера.
 * @param {boolean} [isAnimation=true] - Флаг включения/выключения анимации.
 * @returns {React.JSX.Element}
 */
export default function RotatingWord({ words, duration = 2, fade = 0.5, className = '', isAnimation = true }) {
  const wordRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const SHOW_TIME = useSHOW_TIME(duration, fade);

  useGSAP(() => {
    if (!isAnimation) return;

    const tl = gsap.timeline({ repeat: -1 });

    tl
      // 1) Анимация исчезновения текущего слова (fade-out и сдвиг вниз)
      .fromTo(
        wordRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: SCROLL_Y,
          duration: fade,
          ease: 'power2.out',
          onComplete: () => {
            // Обновляем индекс для отображения следующего слова
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
          },
        },
      )
      // 2) Анимация появления нового слова (fade-in и сдвиг вверх)
      .fromTo(wordRef.current, { opacity: 0, y: -SCROLL_Y }, { opacity: 1, y: 0, duration: fade, ease: 'power2.out' })
      // 3) Задержка до начала следующей итерации цикла
      .to({}, { duration: SHOW_TIME });

    // Функция очистки: вызывается при размонтировании компонента для остановки анимации
    return () => {
      tl.kill();
    };
  }, [words, duration, fade, isAnimation]);

  return (
    <div
      style={{
        display: 'inline-block',
        textAlign: 'center',
      }}
    >
      <span ref={wordRef} className={`rotating-word ${className}`} style={{ display: 'inline-block', opacity: 1 }}>
        {words[currentIndex]}
      </span>
    </div>
  );
}
