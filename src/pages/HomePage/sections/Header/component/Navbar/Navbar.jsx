import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import logo_black from '../../assets/logo_black.svg';
import ListLickButtons from './component/ListLinkButtons.jsx';
import "./Navbar.css";
import BurgerMenu from '../../../../../../components/BurgerMenu/index.jsx';
const Navbar = ({ isBlack = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bar1 = useRef(null)
  const bar3 = useRef(null)
  const handleMenuClick = () => {
    if(!isMenuOpen){
      bar1.current.style.margin = "-2px 0";
      bar3.current.style.margin = "-2px 0";
      setTimeout(() => {
        bar1.current.style.margin = "2px 0";
        bar3.current.style.margin = "2px 0";
        setIsMenuOpen(!isMenuOpen);
      }, 3000)
    }
    else{
      setIsMenuOpen(!isMenuOpen);
    }
  }
  return (
    <>
      <BurgerMenu 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <nav className="container mx-auto absolute top-0 left-0 right-0 z-20 flex justify-between items-center pb-6 pt-8">
        <Link to="/" className={`text-2xl font-light tracking-wider ${isMenuOpen ? "hidden" : "block"}`}>
          <img
            src={isBlack ? logo_black : logo}
            alt="Nomad"
            className="w-[4.375rem] md:w-[7rem] h-[0.875rem] md:h-[1.375rem]"
          />
        </Link>
        {/* Burger Menu */}
        <button className="block sm:hidden absolute right-3" onClick={handleMenuClick}>
          <div className={`cursor-pointer inline-block ${isMenuOpen ? "change" : ""}`}>
            <div ref={bar1} className={`bar1 ${isBlack ? "bg-black" : "bg-white"} ${isMenuOpen ? "bg-white" : "bg-black"}`}></div>
            <div className="invis"></div>
            <div ref={bar3} className={`bar3 ${isBlack ? "bg-black" : "bg-white"} ${isMenuOpen ? "bg-white" : "bg-black"}`}></div>
          </div>
        </button>
  
        <ListLickButtons isBlack={isBlack} />
      </nav>
    </>
  );
};

export default Navbar;

