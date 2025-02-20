import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../../../UI/Link/index.jsx';

function ListLinkButtons({ isBlack = false }) {
  const navbarContent = [
    {
      title: '[о нас]',
      link: '#about',
    },
    {
      title: '[кейсы]',
      link: '/cases',
    },
    {
      title: '[услуги]',
      link: '#services',
    },
    {
      title: '[контакты]',
      link: '#contact',
    },
  ];
  return (
    <div className="hidden sm:flex gap-10 md:gap-14 lg:gap-[6.8125rem]">
      {navbarContent.map((item, index) => (
        <LinkButton key={index} index={index} link={item.link} title={item.title} isBlack={isBlack} />
      ))}
    </div>
  );
}

export default ListLinkButtons;
