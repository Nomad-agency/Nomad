import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CasesPage from '../pages/CasesPage/CasesPage';
import Case1Page from '../pages/Case1Page/Case1Page';
import Case2Page from '../pages/Case2Page/Case2Page';
import Case3Page from '../pages/Case3Page/Case3Page';
import Case4Page from '../pages/Case4Page/Case4Page';
import Case5Page from '../pages/Case5Page/Case5Page';
import Case6Page from '../pages/Case6Page/Case6Page';
import Case7Page from '../pages/Case7Page/Case7Page';
import Case8Page from '../pages/Case8Page/Case8Page';
import Case9Page from '../pages/Case9Page/Case9Page';
import Case10Page from '../pages/Case10Page/Case10Page';
import Case11Page from '../pages/Case11Page/Case11Page';
import Case12Page from '../pages/Case12Page/Case12Page';
import Case13Page from '../pages/Case13Page/Case13Page';
import Case14Page from '../pages/Case14Page/Case14Page';
import Case15Page from '../pages/Case15Page/Case15Page';
import PrivayPolicyPage from '../pages/PrivayPolicyPage/PrivayPolicyPage';
import PersonalDataPage from '../pages/PersonalDataPage/PersonalDataPage';
const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/case1" element={<Case1Page />} />
          <Route path="/case2" element={<Case2Page />} />
          <Route path="/case3" element={<Case3Page />} />
          <Route path="/case4" element={<Case4Page />} />
          <Route path="/case5" element={<Case5Page />} />
          <Route path="/case6" element={<Case6Page />} />
          <Route path="/case7" element={<Case7Page />} />
          <Route path="/case8" element={<Case8Page />} />
          <Route path="/case9" element={<Case9Page />} />
          <Route path="/case10" element={<Case10Page />} />
          <Route path="/case11" element={<Case11Page />} />
          <Route path="/case12" element={<Case12Page />} />
          <Route path="/case13" element={<Case13Page />} />
          <Route path="/case14" element={<Case14Page />} />
          <Route path="/case15" element={<Case15Page />} />
          <Route path="/privacypolicy" element={<PrivayPolicyPage />} />
          <Route path="/personaldata" element={<PersonalDataPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;
