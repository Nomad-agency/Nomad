import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const LinkButton = ({ title, link, target = '_self' }) => {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  const boxRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });

  const onHover = contextSafe((is) => {
    if (is) {
      gsap.to(boxRef.current, { width: '100%' });
    } else {
      gsap.to(boxRef.current, { width: '0' });
    }
  });

  return (
    <Link
      ref={container}
      to={link}
      className="text-[0.625rem] sm:text-sm p-[2px] text-secondary font-medium "
      target={target}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onFocus={() => onHover(true)}
      onBlur={() => onHover(false)}
    >
      {title}
      <div ref={boxRef} className={styles.className}></div>
    </Link>
  );
};

export default LinkButton;
