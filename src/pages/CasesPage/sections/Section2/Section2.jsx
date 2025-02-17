import React from 'react';

import SortByCondition from './components/UI/SortByCondition/SortByCondition.jsx';
const Section2 = ({ sortCase }) => {
  
  return (
    <section className="mt-[30px] md:mt-[3.9375rem]">
      <SortByCondition 
        sortCase={sortCase}
      />
      
    </section>
  );
};

export default Section2;
