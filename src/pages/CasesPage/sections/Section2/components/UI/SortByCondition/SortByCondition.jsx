import React from 'react'
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import CaseItem from '../../../../../../HomePage/sections/Section3/components/CaseItem/CaseItem';
import { Box } from '@mui/material';
const SortByCondition = ({ sortCase }) => {
  const casesData = [
    {
      background: 'bg-bg-1',
      title: 'Лига уличного футбола',
      link: '/case15',
      cards: ['брендинг', 'ux/ui дизайн', 'events', 'партнерство', 'smm \\ pr', 'production'],
    },
    {
      background: 'bg-bg-2',
      title: 'запуск nrav',
      link: '/case3',
      cards: ['events'],
    },
    {
      background: 'bg-bg-3',
      title: 'pop-up самолет',
      link: '/case7',
      cards: ['events', 'архитектура'],
    },
    {
      background: 'bg-bg-4',
      title: 'Rebranding lunda',
      link: '/case10',
      cards: ['брендинг', '3d', 'партнерство'],
    },
    {
      background: 'bg-bg-5',
      title: 'betboom party',
      link: '/case9',
      cards: ['events'],
    },
    {
      background: 'bg-bg-6',
      title: 'маскот «Альфа-капитал»',
      link: '/case1',
      cards: ['3d', 'стратегия', 'digital'],
    },
    {
      background: 'bg-bg-7',
      title: 'Rebranding RML',
      link: '/case2',
      cards: ['брендинг', '3d'],
    },
    {
      background: 'bg-bg-8',
      title: 'запуск Косметологии',
      link: '/case5',
      cards: ['events', 'архитектура'],
    },
    {
      background: 'bg-bg-9',
      title: '«Исполнение мечты»',
      link: '/case11',
      cards: ['Digital', 'ux/ui дизайн'],
    },
    {
      background: 'bg-bg-10',
      title: 'форма ФК « Спартак »',
      link: '/case13',
      cards: ['мерч', '3d'],
    },
    {
      background: 'bg-bg-11',
      title: '«Капитальный прыжок»',
      link: '/case14',
      cards: ['Digital', 'ux/ui дизайн', '3d'],
    },
    {
      background: 'bg-bg-12',
      title: 'Limitless opportunities',
      link: '/case8',
      cards: ['мерч'],
    },
    {
      background: 'bg-bg-13',
      title: 'GRAND OPENING',
      link: '/case6',
      cards: ['events'],
    },
    {
      background: 'bg-bg-14',
      title: 'SBER BAZAR',
      link: '/case4',
      cards: ['events', 'брендинг', 'smm \\ pr'],
    },
    {
      background: 'bg-bg-15',
      title: 'create your reality?',
      link: '/case12',
      cards: ['smm \\ pr', 'production'],
    },
  ];
  console.log(sortCase)
  switch (sortCase) {
    case "Все":
      return (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={'15px'}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[0].background}
                  title={casesData[0].title}
                  link={casesData[0].link}
                  cards={casesData[0].cards}
                />
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[5].background}
                  title={casesData[5].title}
                  link={casesData[5].link}
                  cards={casesData[5].cards}
                />
              </Grid>
            </Grid>
          </Box>
        <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[3].background}
                title={casesData[3].title}
                link={casesData[3].link}
                cards={casesData[3].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[1].background}
                title={casesData[1].title}
                link={casesData[1].link}
                cards={casesData[1].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[4].background}
                title={casesData[4].title}
                link={casesData[4].link}
                cards={casesData[4].cards}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[2].background}
                title={casesData[2].title}
                link={casesData[2].link}
                cards={casesData[2].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[6].background}
                title={casesData[6].title}
                link={casesData[6].link}
                cards={casesData[6].cards}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[7].background}
                title={casesData[7].title}
                link={casesData[7].link}
                cards={casesData[7].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[8].background}
                title={casesData[8].title}
                link={casesData[8].link}
                cards={casesData[8].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[9].background}
                title={casesData[9].title}
                link={casesData[9].link}
                cards={casesData[9].cards}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={'15px'}>
            <Grid size={{ xs: 12, lg: 8 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[10].background}
                title={casesData[10].title}
                link={casesData[10].link}
                cards={casesData[10].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[11].background}
                title={casesData[11].title}
                link={casesData[11].link}
                cards={casesData[11].cards}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[12].background}
                title={casesData[12].title}
                link={casesData[12].link}
                cards={casesData[12].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[13].background}
                title={casesData[13].title}
                link={casesData[13].link}
                cards={casesData[13].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[14].background}
                title={casesData[14].title}
                link={casesData[14].link}
                cards={casesData[14].cards}
              />
            </Grid>
          </Grid>
      </Box>
        </>
      )
    case "Брендинг":
      return (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={'15px'}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[0].background}
                  title={casesData[0].title}
                  link={casesData[0].link}
                  cards={casesData[0].cards}
                />
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[3].background}
                  title={casesData[3].title}
                  link={casesData[3].link}
                  cards={casesData[3].cards}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[13].background}
                title={casesData[13].title}
                link={casesData[13].link}
                cards={casesData[13].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[6].background}
                title={casesData[6].title}
                link={casesData[6].link}
                cards={casesData[6].cards}
              />
            </Grid>
          </Grid>
        </Box>
        </>
      )
    case "3D":
      return (
        <>
          <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[3].background}
                title={casesData[3].title}
                link={casesData[3].link}
                cards={casesData[3].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[10].background}
                title={casesData[10].title}
                link={casesData[10].link}
                cards={casesData[10].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[5].background}
                title={casesData[5].title}
                link={casesData[5].link}
                cards={casesData[5].cards}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[9].background}
                title={casesData[9].title}
                link={casesData[9].link}
                cards={casesData[9].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[6].background}
                title={casesData[6].title}
                link={casesData[6].link}
                cards={casesData[6].cards}
              />
            </Grid>
          </Grid>
        </Box>
        </>
      )
    case "UX/UI дизайн":
      return (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={'15px'}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[0].background}
                  title={casesData[0].title}
                  link={casesData[0].link}
                  cards={casesData[0].cards}
                />
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[8].background}
                  title={casesData[8].title}
                  link={casesData[8].link}
                  cards={casesData[8].cards}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, marginTop: "15px" }}>
            <Grid container spacing={'15px'}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[10].background}
                  title={casesData[10].title}
                  link={casesData[10].link}
                  cards={casesData[10].cards}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )
    case "Digital":
      return (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={'15px'}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[10].background}
                  title={casesData[10].title}
                  link={casesData[10].link}
                  cards={casesData[10].cards}
                />
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[5].background}
                  title={casesData[5].title}
                  link={casesData[5].link}
                  cards={casesData[5].cards}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[8].background}
                title={casesData[8].title}
                link={casesData[8].link}
                cards={casesData[8].cards}
              />
            </Grid>
          </Grid>
        </Box>
        </>
      )
    case "Events":
      return (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={'15px'}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[0].background}
                  title={casesData[0].title}
                  link={casesData[0].link}
                  cards={casesData[0].cards}
                />
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[4].background}
                  title={casesData[4].title}
                  link={casesData[4].link}
                  cards={casesData[4].cards}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[2].background}
                title={casesData[2].title}
                link={casesData[2].link}
                cards={casesData[2].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[1].background}
                title={casesData[1].title}
                link={casesData[1].link}
                cards={casesData[1].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[12].background}
                title={casesData[12].title}
                link={casesData[12].link}
                cards={casesData[12].cards}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[7].background}
                title={casesData[7].title}
                link={casesData[7].link}
                cards={casesData[7].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[13].background}
                title={casesData[13].title}
                link={casesData[13].link}
                cards={casesData[13].cards}
              />
            </Grid>
          </Grid>
        </Box>
        </>
      )
    case "Стратегия и позиционирование":
      return (
        <>
          <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[5].background}
                title={casesData[5].title}
                link={casesData[5].link}
                cards={casesData[5].cards}
              />
            </Grid>
          </Grid>
        </Box>
        </>
      )
    case "Мерч":
      return (
        <>
          <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[9].background}
                title={casesData[9].title}
                link={casesData[9].link}
                cards={casesData[9].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[11].background}
                title={casesData[11].title}
                link={casesData[11].link}
                cards={casesData[11].cards}
              />
            </Grid>
          </Grid>
        </Box>
        </>
      )
    case "Production":
      return (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={'15px'}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[0].background}
                  title={casesData[0].title}
                  link={casesData[0].link}
                  cards={casesData[0].cards}
                />
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[14].background}
                  title={casesData[14].title}
                  link={casesData[14].link}
                  cards={casesData[14].cards}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )
    case "SMM/PR":
      return (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={'15px'}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[0].background}
                  title={casesData[0].title}
                  link={casesData[0].link}
                  cards={casesData[0].cards}
                />
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[13].background}
                  title={casesData[13].title}
                  link={casesData[13].link}
                  cards={casesData[13].cards}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, marginTop: "15px" }}>
            <Grid container spacing={'15px'}>
              <Grid size={{ xs: 12, lg: 4 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[14].background}
                  title={casesData[14].title}
                  link={casesData[14].link}
                  cards={casesData[14].cards}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )
    case "Партнерство":
      return (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={'15px'}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[0].background}
                  title={casesData[0].title}
                  link={casesData[0].link}
                  cards={casesData[0].cards}
                />
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <CaseItem
                  isFocus2={true}
                  isFocus={true}
                  background={casesData[3].background}
                  title={casesData[3].title}
                  link={casesData[3].link}
                  cards={casesData[3].cards}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )
    case "Архитектура":
      return (
        <>
          <Box sx={{ flexGrow: 1, marginTop: { xs: '10px', lg: '15px' } }}>
          <Grid container spacing={{ xs: '10px', lg: '15px' }}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[7].background}
                title={casesData[7].title}
                link={casesData[7].link}
                cards={casesData[7].cards}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <CaseItem
                isFocus2={true}
                isFocus={true}
                background={casesData[2].background}
                title={casesData[2].title}
                link={casesData[2].link}
                cards={casesData[2].cards}
              />
            </Grid>
          </Grid>
        </Box>
        </>
      )
  }
}

export default SortByCondition

