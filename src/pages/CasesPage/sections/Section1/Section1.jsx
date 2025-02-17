import React from 'react';
import Title from './components/UI/Title/Title';
import Sort from './components/Sort/Sort';

const Section1 = ({ sortCase, setSortCase }) => {
  return (
    <section className="mt-[57px] md:mt-[9.25rem]">
      <div className="flex justify-between items-start flex-wrap">
        <Title title={'[КЕЙСЫ]'} />

        <Sort 
          sortCase={sortCase}
          setSortCase={setSortCase}
        />
      </div>
    </section>
  );
};

export default Section1;
