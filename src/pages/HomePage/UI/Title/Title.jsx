import React from 'react';

const Title = ({ title, newClass="" }) => {
  return <div className={`text-base sm:text-xl ${newClass} font-semibold text-secondary uppercase`}>{title}</div>;
};

export default Title;
