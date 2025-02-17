import React from 'react';
import Title from '../../UI/Title/Title';
import LinkButton from '../../UI/LinkButton/LinkButton';
import GridCaseItem from './components/GridCaseItem';
import { casesData } from './const';

export default function Section3 () {
  return (
    <section className="mt-[5.625rem] sm:mt-[11.25rem] container mx-auto">
      <div className="flex justify-between items-center mb-5 sm:mb-10">
        <Title title="[КЕЙСЫ]" />
        <LinkButton title="СМОТРЕТЬ ВСЕ" link="/cases" />
      </div>
      <GridCaseItem casesData={casesData.slice(0, 3)} />
      <GridCaseItem casesData={casesData.slice(3)} />
    </section>
  );
};
