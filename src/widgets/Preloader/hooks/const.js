import { gsap, Power2 } from 'gsap';

gsap.registerPlugin(Power2);

/**
 * Коэффициент масштабируемости для длительностей анимаций.
 * Позволяет изменять все временные параметры путем изменения одной переменной.
 *
 * @constant {number} SCALE
 */
const SCALE = 1;

/**
 * Константы длительностей анимаций (в секундах).
 *
 * @constant {Object} DURATION
 * @property {number} INITIAL_FADE - Длительность начального затухания (fade-in).
 * @property {number} INITIAL_WORD - Длительность анимации появления начального слова.
 * @property {number} TEXT_LIST - Длительность анимации textList (начальное положение).
 * @property {number} PAUSE_BEFORE_LINE - Короткая пауза перед анимацией линии.
 * @property {number} LINE - Длительность анимации появления/исчезновения линии.
 * @property {number} SHORT - Короткая анимация (например, для мгновенного эффекта).
 * @property {number} WORD - Длительность анимации смены слова (вход/выход).
 * @property {number} BREAK - Небольшая пауза между анимациями смены слов.
 * @property {number} FINAL_SLIDE - Длительность финального смещения текста.
 * @property {number} HEADER - Длительность анимации появления header-а.
 * @property {number} SECTION - Длительность анимации входа секции.
 * @property {number} POST_DELAY - Задержка после завершения анимаций.
 * @property {number} PRELOADER_HIDE - Мгновенное скрытие прелоадера.
 */
export const DURATION = {
  INITIAL_FADE: 1 * SCALE,
  INITIAL_WORD: 0.8 * SCALE,
  TEXT_LIST: 0.8 * SCALE,
  PAUSE_BEFORE_LINE: 0.3 * SCALE,
  LINE: 0.3 * SCALE,
  SHORT: 0.1 * SCALE,
  WORD: 0.3 * SCALE,
  BREAK: 0.2 * SCALE,
  FINAL_SLIDE: 0.5 * SCALE,
  HEADER: 2.5 * SCALE,
  SECTION: 1 * SCALE,
  POST_DELAY: 0.2 * SCALE,
  PRELOADER_HIDE: 0,
};

/**
 * Константы easing-функций для анимаций.
 *
 * @constant {Object} EASING
 * @property {gsap.Ease} DEFAULT - Базовое плавное затухание (Power2.easeOut).
 * @property {gsap.Ease} SLIDE_IN - Плавное появление элемента (Power2.easeOut).
 * @property {gsap.Ease} SLIDE_OUT - Плавное исчезновение элемента (Power2.easeIn).
 */
export const EASING = {
  DEFAULT: Power2.easeOut,
  SLIDE_IN: Power2.easeOut,
  SLIDE_OUT: Power2.easeIn,
};
