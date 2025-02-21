import React, { useRef } from 'react';
import styles from './index.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const InputSection = ({ type = 'text', placeholder = '', value, setValue }) => {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  const boxRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });

  const onFocus = contextSafe((is) => {
    if (is) {
      gsap.to(boxRef.current, { width: '100%', duration: 0.5 });
    } else {
      gsap.to(boxRef.current, { width: '0%', duration: 0.5, ease: 'power2.in' });
    }
  });
  return (
    <div ref={container} className={'w-auto pb-[10px] p-[2px]'} style={{ display: 'grid' }}>
      <input
        value={value}
        type={type}
        className="outline-none text-sm border-b-2"
        placeholder={placeholder}
        required
        onFocus={() => onFocus(true)}
        onBlur={() => onFocus(false)}
        onChange={(e) => setValue(e.target.value)}
      />
      <div ref={boxRef} className={styles.className}></div>
    </div>
  );
};

export default InputSection;
