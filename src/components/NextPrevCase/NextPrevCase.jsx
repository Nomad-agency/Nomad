import React from 'react'
import Title from '../../pages/HomePage/UI/Title/Title'
import LinkButton from '../../pages/HomePage/UI/LinkButton/LinkButton'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import CaseItem from '../../pages/HomePage/sections/Section3/components/CaseItem/CaseItem';
import { casesData } from '../../pages/utils/const';
const NextPrevCase = ({ dataPrev, dataNext, link }) => {
  return (
    <>
      <div className="mt-[90px] md:mt-[180px]">
        <div className="flex justify-between items-center mb-5 sm:mb-10">
          <Title title="[КЕЙСЫ]" newClass="xl:text-[55px]"/>
          <LinkButton title="СЛЕДУЮЩИЙ" link={link} />
        </div>

        <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 6 }} display={{ xs: 'none', lg: 'block' }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={dataPrev.background}
                title={dataPrev.title}
                link={dataPrev.link}
                cards={dataPrev.cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={dataNext.background}
                title={dataNext.title}
                link={dataNext.link}
                cards={dataNext.cards}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default NextPrevCase