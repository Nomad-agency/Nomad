import React from 'react';
import FormSection from './components/UI/FormSection/FormSection';
import TitleSection from './components/UI/TitleSection/TitleSection';
import PolicySection from './components/UI/PolicySection/PolicySection';

const Section5 = () => {
  // 11.25rem = 180px
  return (
    <section className="mt-[5.625rem] md:mt-[11.25rem] container mx-auto">
      <TitleSection />

      {/* Форма отправки данных */}
      <FormSection />

      <PolicySection />
    </section>
  );
};

export default Section5;
