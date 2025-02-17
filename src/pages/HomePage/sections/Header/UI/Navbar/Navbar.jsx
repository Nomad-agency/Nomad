import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import logo_black from '../../assets/logo_black.svg';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = ({ isBlack = false }) => {
  const navbarContent = [
    {
      title: '[о нас]',
      link: '/about',
    },
    {
      title: '[кейсы]',
      link: '/cases',
    },
    {
      title: '[услуги]',
      link: '/services',
    },
    {
      title: '[контакты]',
      link: '/contact',
    },
  ];
  return (
    <nav className="container mx-auto absolute top-0 left-0 right-0 z-10 flex justify-between items-center py-6">
      <Link to={'/'} className="text-2xl font-light tracking-wider">
        <img
          src={isBlack ? logo_black : logo}
          alt="Nomad"
          className="w-[4.375rem] md:w-[7rem] h-[0.875rem] md:h-[1.375rem]"
        />
      </Link>
      {/* Burger Menu */}
      <button className="block sm:hidden">
        {/* надо поменять иконка */}
        <RxHamburgerMenu className={`${isBlack ? 'text-black' : 'text-white'}`} />
      </button>
      <div className="hidden sm:flex gap-10 md:gap-14 lg:gap-[6.8125rem]">
        {navbarContent.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`text-xs md:text-sm font-medium ${isBlack ? 'text-black/90 hover:text-black' : 'text-white/90 hover:text-white'} transition-colors uppercase`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
