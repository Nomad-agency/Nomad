import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { DURATION, EASING } from './const.js';

gsap.registerPlugin(useGSAP);

/**
 * Хук для запуска анимаций GSAP.
 *
 * @param {Function} setCurrentWord - Функция для установки текущего слова.
 * @param {Function} setIsVisible - Функция для установки состояния видимости.
 * @param {Array<string>} words - Массив слов для последовательной анимации.
 * @param {Object} refData - Объект с React-рефами для элементов анимации.
 * @param {Function} setIsRotatingWord - Функция для переключения состояния "вращения" слова.
 * @param {boolean} isPreloader
 */
export function useStartGSAP(setCurrentWord, setIsVisible, words, refData, setIsRotatingWord, isPreloader) {
  const { containerRef, lineWord, textListRef, textRef, headerRef, preloaderRef, section1Ref } = refData;

  useGSAP(
    () => {
      // Kiểm tra trạng thái preloader từ sessionStorage
      const preloaderState = sessionStorage.getItem('preloaderState');
      if (isPreloader && preloaderState !== 'false') {
        console.log('isPreloader', isPreloader);
        const tl = gsap.timeline({ defaults: { ease: EASING.DEFAULT } });

        // Начальные анимации:
        tl
          // 1. Подготавливаем текст
          .fromTo(textRef.current, { opacity: 0 }, { opacity: 0, duration: DURATION.INITIAL_FADE })
          // 2. Анимация появления начального слова
          .fromTo(textRef.current, { x: '-110%', opacity: 0.5 }, { x: '-70%', opacity: 1, duration: DURATION.INITIAL_WORD })
          // 3. Анимация элемента textList
          .fromTo(
            textListRef.current,
            { x: '-68%', y: 0, opacity: 1 },
            { x: '-68%', y: 0, opacity: 1, duration: DURATION.TEXT_LIST },
            '<',
          )
          // 4. Короткая пауза
          .to(lineWord.current, { duration: DURATION.PAUSE_BEFORE_LINE })
          // 5. Анимация появления линии
          .fromTo(lineWord.current, { x: -10, scaleX: 0 }, { x: 0, scaleX: 1, duration: DURATION.LINE })
          // 6. Одновременно быстро скрываем textList
          .fromTo(textListRef.current, { у: 0, opacity: 1 }, {у: 0, opacity: 0, duration: DURATION.SHORT }, '<');

        // --- Анимация смены слов ---
        tl
          // Первый переход: убираем текст и устанавливаем первое слово
          .to(
            textListRef.current,
            {
              x: 0,
              y: 30,
              opacity: 0,
              duration: DURATION.WORD,
              ease: EASING.SLIDE_OUT,
              onComplete: () => setCurrentWord(words[0]),
            }
          )

          // Появления следующего слова
          .fromTo(textListRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: DURATION.WORD })
          .to({}, { duration: DURATION.BREAK })

          // Второй переход: убираем слово и устанавливаем второе слово
          .to(textListRef.current, {
            y: 30,
            opacity: 0,
            duration: DURATION.WORD,
            ease: EASING.SLIDE_OUT,
            onComplete: () => setCurrentWord(words[1]),
          })
          .fromTo(textListRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: DURATION.WORD })
          .to({}, { duration: DURATION.BREAK })

          // Третий переход: убираем слово и устанавливаем третье слово
          .to(textListRef.current, {
            y: 30,
            opacity: 0,
            duration: DURATION.WORD,
            ease: EASING.SLIDE_OUT,
            onComplete: () => setCurrentWord(words[2]),
          })
          .fromTo(textListRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: DURATION.WORD })
          .to({}, { duration: DURATION.BREAK })

          // Четвёртый переход: убираем слово и устанавливаем "MAD"
          .to(textListRef.current, {
            y: 30,
            opacity: 0,
            duration: DURATION.WORD,
            ease: EASING.SLIDE_OUT,
            onComplete: () => setCurrentWord('MAD'),
          })
          .fromTo(textListRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: DURATION.WORD })
          .to({}, { duration: DURATION.BREAK }, '<');

        // Финальный блок:
        tl.to(lineWord.current, {
          x: -10,
          scaleX: 0,
          duration: DURATION.LINE,
        })
          .to(textListRef.current, { x: '-68%', duration: 1 }, '<')
          .to(textRef.current, { x: '-10%', duration: DURATION.FINAL_SLIDE }, '+=0.3')
          .to(textRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: EASING.SLIDE_OUT,
          });

        // --- Скрываем прелоадер ---
        // Отображение header-а (например, меню или заголовка) и его анимация по высоте
        const computedHeight = window.getComputedStyle(headerRef.current).height;
        tl.fromTo(
          headerRef.current,
          {
            display: 'none',
            height: 0,
          },
          {
            display: 'block',
            height: computedHeight,
            duration: DURATION.HEADER,
            ease: EASING.DEFAULT,
          },
          '<',
        )
          .to(
            preloaderRef.current,
            {
              display: 'none',
              duration: DURATION.PRELOADER_HIDE,
            },
            '<',
          )
          .fromTo(
            section1Ref.current,
            {
              y: '-50vh',
              display: 'none',
            },
            {
              y: 0,
              display: 'block',
              duration: DURATION.SECTION,
              ease: EASING.SLIDE_IN,
            },
            '-=0.5',
          )
          .to(preloaderRef.current, {
            duration: 0,
            onComplete: () => setIsVisible(true),
          })
          .to(
            section1Ref.current,
            {
              onComplete: () => setIsRotatingWord(true),
            },
            '+=0.5',
          );

        // Функция очистки: сбрасываем текущее слово и останавливаем таймлайн
        return () => {
          setCurrentWord('MAD');
          tl.kill();
        };
      } else {
        console.log('isPreloader', isPreloader);
        const tl = gsap.timeline({ defaults: { ease: EASING.DEFAULT } });
        tl.fromTo(
          headerRef.current,
          {
            display: 'none',
            height: 0,
          },
          {
            display: 'block',
            height: '100vh',
            duration: DURATION.HEADER,
            ease: EASING.DEFAULT,
          },
          '<',
        )
          .to(
            preloaderRef.current,
            {
              display: 'none',
              duration: DURATION.PRELOADER_HIDE,
            },
            '<',
          )
          .fromTo(
            section1Ref.current,
            {
              y: '-50vh',
              display: 'none',
            },
            {
              y: 0,
              display: 'block',
              duration: DURATION.SECTION,
              ease: EASING.SLIDE_IN,
            },
            '-=0.5',
          )
          .to(preloaderRef.current, {
            duration: 0,
            onComplete: () => setIsVisible(true),
          })
          .to(
            section1Ref.current,
            {
              onComplete: () => setIsRotatingWord(true),
            },
            '+=0.5',
          );
        setIsVisible(true);
      }
    },
    { scope: containerRef, dependencies: [isPreloader] },
  );
}
