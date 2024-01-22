import { List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

const guitarThingData = [
  'Developed a single page application that aims to aid guitarists learn chords and scales through a dynamic fretboard display',
  'Achieved real-time audio analysis on a shared thread while avoiding significant event loop blocking',
  'Applied the Fourier Transform to analyse recorded audio data to listen for musical pitches',
  'Designed an animated menu that reorders itself based on its inputs',
  'Utilised: ReactJS, node.js, npm, CSS, HTML, GitHub, Media Streams API, Visual Studio Code, react-router, react-spring, create-react-app, Discrete Fourier Transform',
];

export const Projects = () => {
  const GuitarDataFormatted = () => {
    return (
      <List>
        {guitarThingData.map((dotPoint: string, index: number) => {
          return(
            <ListItem disablePadding key={`${index}-guitar`}>
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
    <>
      <Stack>
        <Typography variant="h6">Projects</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ fontWeight: 'bold' }}>Web app for learning guitar positions</Typography>
          <Typography sx={{ fontWeight: 'bold' }}>Nov 2019 – Feb 2020</Typography>
        </Stack>
        <Typography><a href="https://edric-m.github.io/chordsscales">https://edric-m.github.io/chordsscales</a></Typography>
        <GuitarDataFormatted />
      </Stack>
    </>
  ); 
};
  