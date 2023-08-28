import { Stack, Typography } from "../../../node_modules/@mui/material/index";

export const Projects = () => {
    return (
      <>
        <Stack>
          <Typography variant="h6">Projects</Typography>
          <Stack spacing={4}>
            <Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography>Web app for learning guitar positions</Typography>
                <Typography>Nov 2019 – Feb 2020</Typography>
              </Stack>
              <Typography><a href="https://edric-m.github.io/chordsscales">https://edric-m.github.io/chordsscales</a></Typography>
              <div>
                <div>
                  - Developed a single page application that aims to aid guitarists learn chords and scales through a dynamic fretboard display.
                </div>
                <div>
                  - Achieved real-time audio analysis on a shared thread while avoiding significant event loop blocking.
                </div>
                <div>
                  - Applied the Fourier Transform to analyse recorded audio data to listen for musical pitches.
                </div>
                <div>
                  - Designed an animated menu that reorders itself based on its inputs.
                </div>
                <div>
                  - Utilised: ReactJS, node.js, npm, CSS, HTML, GitHub, Media Streams API, Visual Studio Code, react-router, react-spring, create-react-app, Discrete Fourier Transform
                </div>
              </div>
            </Stack>
          </Stack>
        </Stack>
      </>
    ); 
  }