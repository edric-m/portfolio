import { Stack, Typography } from '@mui/material';

export const Projects = () => {
  return (
    <>
      <Stack>
        <Typography variant="h6">Projects</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Web app for learning guitar positions</Typography>
          <Typography>Nov 2019 – Feb 2020</Typography>
        </Stack>
        <Typography><a href="https://edric-m.github.io/chordsscales">https://edric-m.github.io/chordsscales</a></Typography>
        <Stack>
          <Typography>
                - Developed a single page application that aims to aid guitarists learn chords and scales through a dynamic fretboard display.
          </Typography>
          <Typography>
                - Achieved real-time audio analysis on a shared thread while avoiding significant event loop blocking.
          </Typography>
          <Typography>
                - Applied the Fourier Transform to analyse recorded audio data to listen for musical pitches.
          </Typography>
          <Typography>
                - Designed an animated menu that reorders itself based on its inputs.
          </Typography>
          <Typography>
                - Utilised: ReactJS, node.js, npm, CSS, HTML, GitHub, Media Streams API, Visual Studio Code, react-router, react-spring, create-react-app, Discrete Fourier Transform
          </Typography>
        </Stack>
      </Stack>
    </>
  ); 
};
  