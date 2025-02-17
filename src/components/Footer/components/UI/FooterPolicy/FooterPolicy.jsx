import React from 'react';
import { Link } from 'react-router-dom';

const FooterPolicy = () => {
  return (
    <div className="text-center text-[6px] sm:text-xs md:text-sm font-medium text-secondary">
      <div className="">© ALL RIGHTS RESERVED - 2022</div>
      <div className="">
        <Link to="https://nomad-agency.ru/privacypolicy" target="_blank" className="border-b border-secondary">
          PRIVACY POLICY
        </Link>
        <span> AND </span>
        <Link to="https://nomad-agency.ru/personaldata" target="_blank" className="border-b border-secondary">
          PERSONAL DATA
        </Link>
      </div>
    </div>
  );
};

export default FooterPolicy;
