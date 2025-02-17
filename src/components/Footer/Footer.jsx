import React from 'react';
import Socials from './components/UI/Socials/Socials';
import FooterPolicy from './components/UI/FooterPolicy/FooterPolicy';

const Footer = () => {
  return (
    <footer className="mt-[4.375rem] sm:mt-[11.25rem] container mx-auto pb-[53px]" id="footer">
      <Socials />

      <h1 className="w-full text-[26px] xs:text-[29px] sm:text-[46px] md:text-[63px] lg:text-[84px] xl:text-[99px] font-semibold leading-[36.9px] sm:leading-[54.9px] md:leading-[66.9px] xl:leading-[108.9px] text-secondary uppercase tracking-tight mt-[10px] mb-[10px] sm:mb-[20px] md:mb-[34px]">
        ceo.@nomad.agency.ru
      </h1>

      <FooterPolicy />
    </footer>
  );
};

export default Footer;
