import React, { useCallback, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import PropTypes from 'prop-types';
import CaseItem from './CaseItem/CaseItem.jsx';

gsap.registerPlugin(useGSAP);

GridCaseItem.propTypes = {
  casesData: PropTypes.array,
};

export default function GridCaseItem({ casesData }) {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const isMobile = window.innerWidth < 768;
  const { contextSafe } = useGSAP({ scope: { containerRef }, dependencies: [isMobile] });
  const [selectedIndex, setSelectedIndex] = useState(null);

  const animateCards = contextSafe((activeIndex, reset = false) => {
    cardsRef.current.forEach((card, index) => {
      if (!card || isMobile) return;

      const flexValue = reset
        ? '1 0 calc(33.3333% - 15px)'
        : index === activeIndex
          ? '1 0 calc(60% - 15px)'
          : '1 0 calc(20% - 15px)';
      gsap.to(card, { flex: flexValue, duration: 1, ease: 'power3.out' });
    });
  });

  const handleCardMouseEnter = useCallback(
    (index) => {
      if (isMobile) return;
      setSelectedIndex(index);
      animateCards(index);
    },
    [animateCards, isMobile]
  );

  const handleCardMouseLeave = useCallback(() => {
    if (isMobile) return;
    setSelectedIndex(null);
    animateCards(null, true);
  }, [animateCards, isMobile]);

  return (
    <div ref={containerRef} style={{ marginTop: '20px' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          gap: '15px',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
        }}
      >
        {casesData.map((item, index) => (
          <div
            key={index}
            style={{ flex: isMobile ? '1 0 100%' : '1 0 calc(33.3333% - 15px)' }}
            ref={(el) => (cardsRef.current[index] = el)}
            onMouseEnter={() => handleCardMouseEnter(index)}
            onMouseLeave={handleCardMouseLeave}
          >
            <CaseItem
              isFocus2={index === selectedIndex}
              isFocus={selectedIndex === index || selectedIndex === null}
              isMobile={isMobile}
              background={item.background}
              title={item.title}
              link={item.link}
              cards={item.cards}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
