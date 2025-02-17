// Константы анимации
import { useCallback } from 'react';

export const SCROLL_Y = 20;

// Время показа слова: общий цикл минус время на fade-out и fade-in
export const useSHOW_TIME = (duration, fade) => {
  return useCallback(() => {
    return duration - 2 * fade;
  }, [duration, fade]);
};
