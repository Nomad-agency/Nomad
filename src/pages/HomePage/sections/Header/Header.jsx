import PropTypes from 'prop-types';
import Navbar from './component/Navbar/Navbar';
import video from './assets/web_anim.mp4';
import BottomText from './UI/BottomText/BottomText';
import BurgerMenu from '../../../../components/BurgerMenu';
import { useState } from 'react';

Header.propTypes = {
  refData: PropTypes.object.isRequired,
};

export default function Header({ refData }) {
  return (
    <>
      <header
        ref={refData.headerRef}
        className="relative truncate"
        style={{
          height: '100vh',
          overflow: 'hidden',
          zIndex: 5,
        }}
      >
        <div className="absolute w-full h-full object-cover">
          <video src={video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          <Navbar />
          <BottomText />
        </div>
      </header>
    </>
  );
}
