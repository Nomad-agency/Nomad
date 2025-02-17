import { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ComponentPreloader } from './component/ComponentPreloader/index.jsx';

Preloader.propTypes = {
  children: PropTypes.node.isRequired,
};

export function Preloader({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    if (elementRef.current) {
      gsap.set(elementRef.current, { autoAlpha: 0, y: 20 });
    }
  }, []);

  useLayoutEffect(() => {
    if (isVisible && elementRef.current) {
      gsap.fromTo(elementRef.current, { autoAlpha: 0, y: 20 }, { duration: 1, autoAlpha: 1, y: 0 });
    }
  }, [isVisible]);

  return (
    <>
      <ComponentPreloader setIsVisible={setIsVisible} isPreloader={true} />
      {isVisible && <div ref={elementRef}>{children}</div>}
    </>
  );
}
