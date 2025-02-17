import React from 'react';
import Section1 from './sections/Section1/Section1';
import Section2 from './sections/Section2/Section2';
import Section5 from '../HomePage/sections/Section5/Section5';
import Footer from '../../components/Footer/Footer';
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack';

const CasesPage = () => {
  return (
    <>
      <main className="container mx-auto">
        <HeaderBlack />
        <Section1 />
        <Section2 />
        <Section5 />
        <Footer />
      </main>
    </>
  );
};

export default CasesPage;
