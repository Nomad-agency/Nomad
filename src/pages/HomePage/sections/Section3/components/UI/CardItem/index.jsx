import React, { forwardRef } from 'react';
import styles from './index.module.css';
import classNames from 'classnames';

const CardItem = forwardRef(
  ({ title = '', classComponent = '' }, ref) => {
    const cx = classNames.bind(styles);
    const className = cx(
      { [styles.cart]: true },
      classComponent,
      'top-5 left-5 inline-flex items-center justify-center bg-[#FFFFFFCC] rounded-[100px] h-[29px] sm:h-[35px] px-[1rem] lg:px-[1.625rem] lg:text-xs font-semibold whitespace-nowrap uppercase'
    );

    return (
      <div className={className} ref={ref}>
        {title}
      </div>
    );
  }
);

export default CardItem;
