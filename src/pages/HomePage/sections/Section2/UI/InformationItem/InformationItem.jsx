import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const InformationItem = ({ id = '', title = '', desc = '', className = '', isScroll }) => {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  const container = useRef(null);
  const elementRef = useRef(null);

  useGSAP(
    () => {
      if (isScroll) {
        gsap.fromTo(
          elementRef.current,
          { y: 0 },
          {
            y: '100%',
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: elementRef.current,
              start: 'top 100%',
              end: 'top 70%',
              scrub: 4,
            },
          },
        );
      }
    },
    { scope: container, dependencies: [isScroll] },
  );

  let classCss = '';
  switch (id) {
    case '0':
    case '2':
      classCss = 'md:pr-[0.875rem] xl:pr-[1.875rem]';
      break;
    case '1':
      classCss = 'md:pr-[0.875rem] xl:pr-[1.875rem]';
      break;
    case '3':
      classCss = 'md:items-start';
      break;
  }

  return (
    <div ref={container} className={`${className} w-full lg:w-auto flex ${id%2 === 0 ? 'justify-end' : 'justify-start'}`}>
      <div ref={elementRef} className={`w-[49%] lg:w-full h-fit sm:h-3/5 p-0 sm:p-3 uppercase flex flex-col ${classCss}`}>
        <div className="w-full flex justify-between text-[0.5rem] sm:text-sm font-semibold">
          <span>[0{id}]</span>
          <span>{title}</span>
        </div>
        <p className="text-[0.5rem] sm:text-xs text-primary text-justify tracking-tight mt-5 whitespace-pre-line">{desc}</p>
      </div>
    </div>
  );
};

export default InformationItem;
