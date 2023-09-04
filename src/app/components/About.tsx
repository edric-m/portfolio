import { Stack, Typography } from "../../../node_modules/@mui/material/index";

export const About = () => {
    return (
      <Stack>
        <Typography variant="h6">About</Typography>
        <Stack spacing={2}>
          <Typography variant="body1">
            Heyo, the names Edric.
            I am a software engineer with about 2 years experience in full stack web development (with a slight preference to front end development). My UTS coursework included electronics, networking, security, signal processing and embedded software. I enjoyed signal processing the most and have applyed that knowledge in creating an app that can identify musical tones over a microphone.

            What excites me most about coding is the hard stuff (the more daunting the better haha), because I learn a lot and re-learn a lot - whether I succeed or not, its where I grow the most.

            I think the biggest takeaway I have from my work experience is that I like working with and supporting others, getting good work done and creating a team that feels fullfilled by their work, and happily improving.
            Software engineer seeking experience in technical software engineering problems where I can be exposed to interesting problems.
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