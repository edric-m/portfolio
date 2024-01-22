import { List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'; 
import { Projects } from './Projects';
import { Education } from './Education';

const abyssExperienceData = [
  'Collaborated with product to balance technical feasibility with user needs through defining technical requirements, user testing, and product discovery',
  'Developed and maintained key components of a web app which boosted the efficiency of an element of the value stream by 400%',
  'Contributed to code quality through code reviews, feedback, and documentation',
  'Identified and resolved software bugs through systematic debugging and proactive code maintenance, contributing to overall code stability',
  'Streamlined the colorisation of millions of 3D data points, reducing processing time from 6 seconds to milliseconds improving user experience',
  'Proposed, designed and developed a pilot project that uses a 3D model to automatically generate training data for a machine learning model'
];

const sealadderExperienceData = [
  'Designed and implemented full-stack solutions using SOLID principles and RESTful APIs',
  'Led the development of many key features of the companys main product',
  'Wrote unit test for the front end and back end, raised the test code coverage up to 80%',
  'Mentored and onboarded new interns through pair programming and code reviews'
];

export const Experience = () => {
  const AbyssExperienceFormatted = () => {
    return (
      <List>
        {abyssExperienceData.map((dotPoint: string, index: number) => {
          return(
            <ListItem disablePadding key={`${index}-abyss`}>
              <ListItemIcon>
              ○
              </ListItemIcon>
              <ListItemText primary={dotPoint} />
            </ListItem>
          );
        })}
      </List>
    );
  };

  const SealadderExperienceFormatted = () => {
    return (
      <List>
        {sealadderExperienceData.map((dotPoint: string, index: number) => {
          return(
            <ListItem disablePadding key={`${index}-sl`}>
              <ListItemIcon>
              ○
              </ListItemIcon>
              <ListItemText primary={dotPoint} />
            </ListItem>
          );
        })}
      </List>
    );
  };
  
  return (
    <Stack>
      <Typography variant="h6">Professional Experience</Typography>
      <Stack spacing={4}>
        <Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ fontWeight: 'bold' }}>Software Engineer</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>Jan 2022 – Dec 2023</Typography>
          </Stack>
          <Typography sx={{ fontWeight: 'bold' }}>Abyss Solutions Pty. Ltd.</Typography>
          <AbyssExperienceFormatted />
        </Stack>
        <Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ fontWeight: 'bold' }}>Junior Software Developer</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>Apr 2020 – Jul 2021</Typography>
          </Stack>
          <Typography sx={{ fontWeight: 'bold' }}>SeaLadder Pty. Ltd.</Typography>
          <SealadderExperienceFormatted />
        </Stack>
        <Projects />
        <Education />
      </Stack>
    </Stack>
  ); 
};
