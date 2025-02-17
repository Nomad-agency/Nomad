import React from 'react';
import Navbar from '../../pages/HomePage/sections/Header/component/Navbar/Navbar';
// import Navbar from '../HomePage/sections/Header/component/Navbar/Navbar'

const HeaderBlack = () => {
  return (
    <header className="relative h-[70px]">
      <Navbar isBlack={true} />
    </header>
  );
};

export default HeaderBlack;
