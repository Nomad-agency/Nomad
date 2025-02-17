import React from 'react';
import Title from './components/UI/Title/Title';
import Sort from './components/Sort/Sort';

const Section1 = () => {
  return (
    <section className="mt-[9.25rem]">
      <div className="flex justify-between items-start flex-wrap">
        <Title title={'[КЕЙСЫ]'} />

        <Sort />
      </div>
    </section>
  );
};

export default Section1;
