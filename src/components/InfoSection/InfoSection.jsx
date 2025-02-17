import * as React from 'react';
import TitleSection from './components/TitleSection/TitleSection';
import Cards from './components/Cards/Cards';
import AboutProject from './components/AboutProject/AboutProject';
import ResultProject from './components/ResultProject/ResultProject';

const InfoSection = ({ caseData }) => {
  return (
    <section className="mt-[57px] md:mt-[6.25rem]">
      <TitleSection projectTitle={caseData.projectTitle} clientTitle={caseData.clientTitle} nowrap={caseData.nowrap} />

      {/* Cards */}
      <Cards cards={caseData.cards} />

      <AboutProject description={caseData.description} />

      {caseData.result && <ResultProject data={caseData.result} />}
    </section>
  );
};

export default InfoSection;
