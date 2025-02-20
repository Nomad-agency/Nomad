import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useStartGSAP } from '../../hooks/useStartGSAP.js';
import Header from '../../../../pages/HomePage/sections/Header/Header.jsx';
import { words } from './const.js';
import { PreloaderFrame } from '../PreloaderFrame/index.jsx';
import Section1 from '../../../../pages/HomePage/sections/Section1/Section1.jsx';

ComponentPreloader.propTypes = {
  setIsVisible: PropTypes.func.isRequired,
  isPreloader: PropTypes.bool.isRequired, // Выключение или выключение анимации
};

export function ComponentPreloader({ setIsVisible, isPreloader }) {
  const containerRef = useRef(null);
  const preloaderRef = useRef(null);
  const textRef = useRef(null);
  const textListRef = useRef(null);
  const lineWord = useRef(null);
  const headerRef = useRef(null);
  const section1Ref = useRef(null);

  const [isRotatingWord, setIsRotatingWord] = useState(false);

  const refData = {
    containerRef,
    preloaderRef,
    textRef,
    textListRef,
    lineWord,
    headerRef,
    section1Ref,
  };

  const [currentWord, setCurrentWord] = useState('MAD');

  if (isPreloader) {
    useStartGSAP(setCurrentWord, setIsVisible, words, refData, setIsRotatingWord, isPreloader);
  }
  else{
    useStartGSAP(setCurrentWord, setIsVisible, words, refData, setIsRotatingWord, isPreloader);
  }

  return (
    <div ref={containerRef}>
      <Header refData={{ headerRef }} />
      {isPreloader && (
        <div ref={preloaderRef} className="flex items-center justify-center bg-white" style={{ zIndex: 5, height: '100vh' }}>
          <PreloaderFrame refData={{ textRef, lineWord, textListRef }} currentWord={currentWord} />
        </div>
      )}
      <Section1 refData={{ section1Ref }} isRotatingWord={isRotatingWord} />
    </div>
  );
}

