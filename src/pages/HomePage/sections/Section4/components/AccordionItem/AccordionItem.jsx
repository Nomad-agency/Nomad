import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { HiArrowUpRight } from 'react-icons/hi2';
import { LuDot } from 'react-icons/lu';
import './AccordionItem.css';

const AccordionItem = ({ id, title, list = [] }) => {
  return (
    <Accordion sx={{ boxShadow: 'none', borderBottom: '1px solid #202123', paddingBottom: { xs: '20px', md: '30px' } }}>
      <AccordionSummary
        expandIcon={<HiArrowUpRight className="text-[30px] lg:text-[42px] text-[#D04944]" />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="flex gap-[10px]">
          <div className="text-[10px] sm:text-sm font-medium text-secondary">0{id}</div>
          <div className="text-[25px] sm:text-[40px] lg:text-[55px] font-medium text-secondary leading-[24.55px] sm:leading-[38.55px] lg:leading-[66.55px] uppercase">
            {title}
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col gap-[15px] sm:gap-[20px]">
          {list.map((item, index) => (
            <div key={index} className="inline-flex items-start sm:items-center gap-0 sm:gap-1 text-sm">
              <LuDot className="text-[14px] sm:text-[24px]" />
              <span className="w-full sm:w-[60%] text-[10px] sm:text-sm leading-[14px] sm:leading-normal tracking-tighter sm:tracking-normal">
                {item}
              </span>
            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
