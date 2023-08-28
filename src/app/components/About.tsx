import { Stack, Typography } from "../../../node_modules/@mui/material/index";

export const About = () => {
    return (
      <Stack>
        <Typography variant="h6">About</Typography>
        <Stack spacing={2}>
          <Typography variant="body1">
            Hi,
            Software engineer seeking experience in technical software engineering problems where I can be exposed to interesting problems.
            **Communication** – Worked as a tutor for basic computer skills at Karabi Community Services where I had to communicate technical concepts in a way that is easy to understand. Gained valuable experience from various group projects.
            **Teamwork** – Team leader in a semester long software engineering project in which our team achieved a high credit. Constantly improving this through my work at SeaLadder.
            **Problem solving** – Understanding how to analyse audio signals through a web app. Developed throughout my degree, being consistently challenged with physics, calculus, and software design problems.
          </Typography>
          <Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Bachelor of Software Engineering (Honours)</Typography>
              <Typography>Nov 2023 Graduating</Typography>
            </Stack>
            <Typography>Diploma in Professional Engineering Practice</Typography>
            <Typography>University of Technology Sydney</Typography>
            <div>
              - Coursework: software engineering, electronics, networking, security, agile software development, signal processing, embedded software
            </div>
          </Stack>
        </Stack>
      </Stack>
    ); 
  }