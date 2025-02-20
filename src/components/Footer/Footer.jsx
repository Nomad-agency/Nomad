import React from 'react';
import Socials from './components/UI/Socials/Socials';
import FooterPolicy from './components/UI/FooterPolicy/FooterPolicy';

const Footer = () => {
  return (
    <footer className="mt-[4.375rem] sm:mt-[11.25rem] container mx-auto pb-[53px]" id="footer">
      <Socials />

      <a href='mailto:ceo.@nomad-agency.ru' className="w-full text-[24px] xs:text-[27px] sm:text-[44px] md:text-[59px] lg:text-[79px] xl:text-[93px] font-semibold leading-[36.9px] sm:leading-[54.9px] md:leading-[66.9px] xl:leading-[108.9px] text-secondary uppercase tracking-tight mt-[10px] mb-[10px] sm:mb-[20px] md:mb-[34px] whitespace-nowrap">
        ceo.@nomad—agency.ru
      </a>

      <FooterPolicy />
    </footer>
  );
};

export default Footer;
